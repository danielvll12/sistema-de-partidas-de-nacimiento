import React from 'react';

const Confirmacion = ({ solicitud, pdfUrl, onNuevaSolicitud }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="mb-6">
        <svg className="w-16 h-16 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <h2 className="text-2xl font-bold text-gray-800 mt-4">¡Pago Completado Exitosamente!</h2>
        <p className="text-gray-600 mt-2">Tu partida de nacimiento está lista para descargar</p>
      </div>
      
      <div className="mb-6 text-left border-t border-gray-200 pt-4">
        <h3 className="font-semibold text-gray-800 mb-2">Resumen de tu solicitud:</h3>
        <p><span className="font-medium">Nombre:</span> {solicitud.nombres} {solicitud.apellidos}</p>
        <p><span className="font-medium">Fecha de nacimiento:</span> {solicitud.fechaNacimiento}</p>
        <p><span className="font-medium">Lugar de nacimiento:</span> {solicitud.lugarNacimiento}</p>
        <p><span className="font-medium">Código de transacción:</span> SAL-{Math.random().toString(36).substr(2, 8).toUpperCase()}</p>
      </div>
      
      <a
        href={pdfUrl}
        download="partida_nacimiento.pdf"
        className="inline-block bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors mb-4"
      >
        Descargar Partida de Nacimiento (PDF)
      </a>

      {/* Nuevo botón para solicitar otra partida */}
      <button
        onClick={onNuevaSolicitud}
        className="block mx-auto bg-gray-300 text-gray-800 py-2 px-6 rounded-md hover:bg-gray-400 transition-colors"
      >
        Solicitar Nueva Partida
      </button>
      
      <p className="mt-4 text-gray-600">También hemos enviado una copia a: {solicitud.email}</p>
    </div>
  );
};

export default Confirmacion;
