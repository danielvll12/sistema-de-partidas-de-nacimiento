import React, { useState } from 'react';

const SolicitudForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    fechaNacimiento: '',
    lugarNacimiento: '',
    nombrePadre: '',
    nombreMadre: '',
    email: '',
    telefono: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Datos del Solicitante</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Campos del formulario */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Nombres completos</label>
          <input
            type="text"
            name="nombres"
            value={formData.nombres}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Apellidos completos</label>
          <input
            type="text"
            name="apellidos"
            value={formData.apellidos}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
      </div>

      {/* Resto de campos del formulario */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Fecha de nacimiento</label>
          <input
            type="date"
            name="fechaNacimiento"
            value={formData.fechaNacimiento}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Lugar de nacimiento (Municipio)</label>
          <input
            type="text"
            name="lugarNacimiento"
            value={formData.lugarNacimiento}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
      </div>

      
<div className="mb-4">
  <label className="block text-gray-700 mb-2">Hora de nacimiento</label>
  <input
    type="time"
    name="horaNacimiento"
    value={formData.horaNacimiento || ''}
    onChange={handleChange}
    className="w-full px-3 py-2 border border-gray-300 rounded-md"
    required
  />
</div>

<div className="mb-4">
  <label className="block text-gray-700 mb-2">Sexo</label>
  <select
    name="sexo"
    value={formData.sexo || ''}
    onChange={handleChange}
    className="w-full px-3 py-2 border border-gray-300 rounded-md"
    required
  >
    <option value="">Selecciona</option>
    <option value="Masculino">Masculino</option>
    <option value="Femenino">Femenino</option>
  </select>
</div>


<div className="mb-4">
  <label className="block text-gray-700 mb-2">DUI del padre</label>
  <input
    type="text"
    name="documentoPadre"
    value={formData.documentoPadre || ''}
    onChange={handleChange}
    className="w-full px-3 py-2 border border-gray-300 rounded-md"
  />
</div>


<div className="mb-4">
  <label className="block text-gray-700 mb-2">DUI de la madre</label>
  <input
    type="text"
    name="documentoMadre"
    value={formData.documentoMadre || ''}
    onChange={handleChange}
    className="w-full px-3 py-2 border border-gray-300 rounded-md"
  />
</div>

<div className="mb-4">
  <label className="block text-gray-700 mb-2">Domicilio</label>
  <input
    type="text"
    name="domicilio"
    value={formData.domicilio || ''}
    onChange={handleChange}
    className="w-full px-3 py-2 border border-gray-300 rounded-md"
  />
</div>


<div className="mb-4">
  <label className="block text-gray-700 mb-2">Fecha de emisión</label>
  <input
    type="date"
    name="fechaEmision"
    value={formData.fechaEmision || ''}
    onChange={handleChange}
    className="w-full px-3 py-2 border border-gray-300 rounded-md"
  />
</div>


      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Nombre completo del padre</label>
        <input
          type="text"
          name="nombrePadre"
          value={formData.nombrePadre}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Nombre completo de la madre</label>
        <input
          type="text"
          name="nombreMadre"
          value={formData.nombreMadre}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Correo electrónico</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Teléfono</label>
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        Continuar al pago
      </button>
    </form>
  );
};

export default SolicitudForm;