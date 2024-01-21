import React from 'react';
import errorImage from '../../images/ErrorPage.png';

function ErrorPage() {
  return (
    <>
    <div className="flex flex-col p-4 items-center bg-white/90">
      <h1 className="bg-color-white text-4xl font-bold p-2">Error 404</h1>
      <p className="text-lg p-2">La página que estás buscando no se encontró.</p>
      <img src={errorImage} alt="Error" className="w-80 h-80 shadow-lg shadow-slate-700/5" />
    </div>
    </>
  );
}

export default ErrorPage;