import React, { useState } from 'react';

const PagoForm = ({ solicitud, onPaymentSuccess }) => {
  const [paymentMethod, setPaymentMethod] = useState('tarjeta');
  const [cardData, setCardData] = useState({
    numero: '',
    nombre: '',
    expiracion: '',
    cvv: ''
  });

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simular pago exitoso
    onPaymentSuccess();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Pago de Partida de Nacimiento</h2>
      <p className="mb-4">Costo: <span className="font-bold">$3.00 USD</span></p>
      
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Método de pago</label>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="tarjeta"
              checked={paymentMethod === 'tarjeta'}
              onChange={() => setPaymentMethod('tarjeta')}
              className="mr-2"
            />
            Tarjeta de crédito/débito
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="paypal"
              checked={paymentMethod === 'paypal'}
              onChange={() => setPaymentMethod('paypal')}
              className="mr-2"
            />
            PayPal
          </label>
        </div>
      </div>

      {paymentMethod === 'tarjeta' ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Número de tarjeta</label>
            <input
              type="text"
              name="numero"
              value={cardData.numero}
              onChange={handleCardChange}
              placeholder="1234 5678 9012 3456"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Nombre en la tarjeta</label>
            <input
              type="text"
              name="nombre"
              value={cardData.nombre}
              onChange={handleCardChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Fecha de expiración</label>
              <input
                type="text"
                name="expiracion"
                value={cardData.expiracion}
                onChange={handleCardChange}
                placeholder="MM/AA"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">CVV</label>
              <input
                type="text"
                name="cvv"
                value={cardData.cvv}
                onChange={handleCardChange}
                placeholder="123"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
          >
            Pagar $3.00 USD
          </button>
        </form>
      ) : (
        <div className="text-center py-4">
          <p className="mb-4">Serás redirigido a PayPal para completar tu pago</p>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition-colors"
          >
            Pagar con PayPal
          </button>
        </div>
      )}
    </div>
  );
};

export default PagoForm;