
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { href: "/plan_leccion_aprendizaje", label: "Plan de Lección" },
    { href: "/conductismo_info", label: "Conductismo" },
    { href: "/cognitivismo_info", label: "Cognitivismo" },
    { href: "/constructivismo_info", label: "Constructivismo" },
    { href: "/conectivismo_info", label: "Conectivismo" },
    { href: "/memoria_info", label: "Memoria" },
    { href: "/atencion_info", label: "Atención" },
    { href: "/motivacion_info", label: "Motivación" },
    { href: "/factores_aprendizaje_info", label: "Factores de Aprendizaje" },
  ];

  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link to="/" className="text-white text-xl font-bold">
          Aprendizaje Web
        </Link>
        {/* Basic responsive toggle for mobile, can be improved with state if needed */}
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-gray-800 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-800">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

