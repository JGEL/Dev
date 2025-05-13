'use client';

import { useEffect, useState } from 'react';

interface HtmlContentProps {
  fileName: string;
}

const HtmlContent: React.FC<HtmlContentProps> = ({ fileName }) => {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHtmlContent = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/html_content/${fileName}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch ${fileName}: ${response.statusText}`);
        }
        const text = await response.text();
        setContent(text);
      } catch (err: any) {
        setError(err.message);
        console.error('Error fetching HTML content:', err);
      } finally {
        setLoading(false);
      }
    };

    if (fileName) {
      fetchHtmlContent();
    }
  }, [fileName]);

  if (loading) {
    return <div className="p-4 text-center">Loading content...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-red-500">Error: {error}</div>;
  }

  return <div className="prose lg:prose-xl max-w-none p-4 md:p-6" dangerouslySetInnerHTML={{ __html: content }} />;
};

export default HtmlContent;

