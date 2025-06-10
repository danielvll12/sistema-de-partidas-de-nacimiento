import React, { useState } from 'react';
import HeaderAlcaldia from './components/HeaderAlcaldia';
import SolicitudForm from './components/SolicitudForm';
import PagoForm from './components/PagoForm';
import Confirmacion from './components/Confirmacion';
import Footer from './components/Footer';
import { generarPartidaPDF } from './utils/api';

const App = () => {
  const [step, setStep] = useState(1); // 1: Formulario, 2: Pago, 3: Confirmación
  const [solicitud, setSolicitud] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitSolicitud = (formData) => {
    setSolicitud(formData);
    setStep(2);
  };

  const handlePaymentSuccess = async () => {
    setIsLoading(true);
    try {
      const url = await generarPartidaPDF(solicitud);
      setPdfUrl(url);
      setStep(3);
    } catch (error) {
      console.error('Error generando partida:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Función para reiniciar la solicitud y volver al paso 1
  const handleNuevaSolicitud = () => {
    setSolicitud(null);
    setPdfUrl(null);
    setStep(1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <HeaderAlcaldia />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className={`flex items-center ${step >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                  1
                </div>
                <span>Datos Personales</span>
              </div>
              
              <div className={`flex items-center ${step >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                  2
                </div>
                <span>Pago</span>
              </div>
              
              <div className={`flex items-center ${step >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                  3
                </div>
                <span>Descarga</span>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full" 
                style={{ width: `${(step / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mb-4"></div>
              <p>Generando tu partida de nacimiento...</p>
            </div>
          ) : (
            <>
              {step === 1 && <SolicitudForm onSubmit={handleSubmitSolicitud} />}
              {step === 2 && <PagoForm solicitud={solicitud} onPaymentSuccess={handlePaymentSuccess} />}
              {step === 3 && (
                <Confirmacion 
                  solicitud={solicitud} 
                  pdfUrl={pdfUrl} 
                  onNuevaSolicitud={handleNuevaSolicitud} 
                />
              )}
            </>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
