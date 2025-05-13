
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2024 Material Educativo sobre el Aprendizaje. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Layout;

