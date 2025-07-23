// Script de ejemplo para agregar datos iniciales
// Este archivo muestra cómo podrían agregarse datos de prueba

import { Casa } from '../casa/casa.entity';

export const casasEjemplo: Partial<Casa>[] = [
  {
    nombre: 'Casa Colonial Moderna',
    valor: 285000,
    imagenURL: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400',
    username: 'juan.perez',
  },
  {
    nombre: 'Departamento Centro Histórico',
    valor: 180000,
    imagenURL: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400',
    username: 'maria.garcia',
  },
  {
    nombre: 'Villa con Piscina',
    valor: 450000,
    imagenURL: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400',
    username: 'carlos.rodriguez',
  },
  {
    nombre: 'Casa Moderna Minimalista',
    valor: 320000,
    imagenURL: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400',
    username: 'ana.martinez',
  },
  {
    nombre: 'Penthouse Vista al Mar',
    valor: 650000,
    imagenURL: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400',
    username: 'luis.fernandez',
  },
  {
    nombre: 'Casa Familiar Suburbana',
    valor: 225000,
    username: 'sofia.lopez',
  },
  {
    nombre: 'Loft Industrial',
    valor: 195000,
    imagenURL: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400',
    username: 'diego.morales',
  },
  {
    nombre: 'Casa de Campo',
    valor: 175000,
    imagenURL: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400',
    username: 'elena.vargas',
  },
  {
    nombre: 'Duplex Contemporáneo',
    valor: 340000,
    imagenURL: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400',
    username: 'roberto.silva',
  },
  {
    nombre: 'Casa sin Precio Definido',
    valor: 0,
    username: 'admin.sistema',
  }
];

/*
Para usar estos datos, puedes crear un endpoint temporal en el controlador:

@Post('seed-data')
async seedData() {
  for (const casaData of casasEjemplo) {
    await this.casaService.crearUno(casaData);
  }
  return { mensaje: 'Datos de ejemplo agregados correctamente' };
}

Y luego llamar a: POST http://localhost:3000/api/casa/seed-data
*/
