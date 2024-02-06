// En algún archivo de configuración o utilidades
// export const API_URL = 'https://tu-api.com';
// En tu componente
import React from 'react';
import useFetchApi from '../hooks/useFetchApi';
// import { API_URL } from './ruta/del/archivo/de/configuracion';
const API_URL = 'http://127.0.0.1:5000';

const ProductsApi = () => {
  const { data: productos, loading, error } = useFetchApi(`${API_URL}/productos`);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>{producto.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsApi;
