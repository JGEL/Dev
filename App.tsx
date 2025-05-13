
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // Adjusted path
import HtmlContent from './components/HtmlContent'; // Adjusted path

// Import page components
// Assuming these files will be moved or paths adjusted accordingly.
// For now, let's define them inline or assume they are created in a 'pages' directory.

// Placeholder for HomePage, PlanLeccionPage etc.
// Actual page components will use Layout and HtmlContent

const HomePage = () => (
  <Layout>
    <div className="bg-white shadow-md rounded-lg p-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Bienvenido al Sitio Educativo sobre el Aprendizaje</h1>
      <p className="text-lg text-gray-700 mb-4">
        Este sitio web ha sido creado para proporcionar una visión completa sobre cómo aprendemos, explorando diversas teorías del aprendizaje, conceptos clave y los factores que influyen en este fascinante proceso.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Utiliza la barra de navegación superior para explorar las diferentes secciones:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-4 ml-4">
        <li><strong>Plan de Lección:</strong> Una guía detallada para una sesión de 2 horas sobre este tema.</li>
        <li><strong>Teorías del Aprendizaje:</strong> Profundiza en el Conductismo, Cognitivismo, Constructivismo y Conectivismo.</li>
        <li><strong>Conceptos Clave:</strong> Entiende la importancia de la Memoria, la Atención y la Motivación.</li>
        <li><strong>Factores de Aprendizaje:</strong> Analiza los elementos internos y externos que impactan cómo aprendemos.</li>
      </ul>
      <p className="text-lg text-gray-700">
        Esperamos que este recurso sea de gran utilidad para tu desarrollo y comprensión del aprendizaje.
      </p>
    </div>
  </Layout>
);

const PlanLeccionPage = () => <Layout><HtmlContent fileName="plan_leccion_aprendizaje.html" /></Layout>;
const ConductismoPage = () => <Layout><HtmlContent fileName="conductismo_info.html" /></Layout>;
const CognitivismoPage = () => <Layout><HtmlContent fileName="cognitivismo_info.html" /></Layout>;
const ConstructivismoPage = () => <Layout><HtmlContent fileName="constructivismo_info.html" /></Layout>;
const ConectivismoPage = () => <Layout><HtmlContent fileName="conectivismo_info.html" /></Layout>;
const MemoriaPage = () => <Layout><HtmlContent fileName="memoria_info.html" /></Layout>;
const AtencionPage = () => <Layout><HtmlContent fileName="atencion_info.html" /></Layout>;
const MotivacionPage = () => <Layout><HtmlContent fileName="motivacion_info.html" /></Layout>;
const FactoresAprendizajePage = () => <Layout><HtmlContent fileName="factores_aprendizaje_info.html" /></Layout>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plan_leccion_aprendizaje" element={<PlanLeccionPage />} />
        <Route path="/conductismo_info" element={<ConductismoPage />} />
        <Route path="/cognitivismo_info" element={<CognitivismoPage />} />
        <Route path="/constructivismo_info" element={<ConstructivismoPage />} />
        <Route path="/conectivismo_info" element={<ConectivismoPage />} />
        <Route path="/memoria_info" element={<MemoriaPage />} />
        <Route path="/atencion_info" element={<AtencionPage />} />
        <Route path="/motivacion_info" element={<MotivacionPage />} />
        <Route path="/factores_aprendizaje_info" element={<FactoresAprendizajePage />} />
      </Routes>
    </Router>
  );
}

export default App;

