import React from 'react';

const HeaderAlcaldia = () => {
  return (
    <header className="bg-blue-800 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Alcaldía Municipal de Cojutepeque</h1>
          <p className="text-blue-200">Sistema de Partidas de Nacimiento</p>
        </div>
        <img 
          src="https://yt3.ggpht.com/a/AATXAJzqWlY8vKzVwqEQQo_NGWx6B1KDKdhal1BEvQ=s900-c-k-c0xffffffff-no-rj-mo" /*https://yt3.ggpht.com/a/AATXAJzqWlY8vKzVwqEQQo_NGWx6B1KDKdhal1BEvQ=s900-c-k-c0xffffffff-no-rj-mo*/   /*https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_El_Salvador.svg*/
          alt="Logo De El Salvador" 
          className="h-20"
        />
      </div>
    </header>
  );
};

export default HeaderAlcaldia;