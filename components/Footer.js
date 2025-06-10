import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Alcaldía Municipal De Cojutepeque</h3>
            <p className="text-gray-400">Sistema de Partidas de Nacimiento</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400">Atención al ciudadano: (503) 2525-2525</p>
            <p className="text-gray-400">Horario: Lunes a Viernes 8:00 AM - 4:00 PM</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-4 pt-4 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Alcaldía Municipal De Cojutepeque- El Salvador. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;