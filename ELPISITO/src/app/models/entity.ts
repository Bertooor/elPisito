export interface Provincia {
  id?: number;
  nombre: string;
  activo: any;
}

export interface Poblacion {
  id?: number;
  nombre: string;
  provincia: Provincia;
  activo: any;
}

export interface Tipo {
  id?: number;
  nombre: string;
  activo: any;
}

export interface Inmueble {
  id?: number;
  activo: any;
  apertura: string;
  ascensor: any;
  cp: string;
  descripcion: string;
  plazasGarage: number;
  jardin: any;
  nBalcones: number;
  nBanhos: number;
  nHabitaciones: number;
  nombreVia: string;
  numero: string;
  orientacion: string;
  piscina: any;
  planta: string;
  portada: any;
  precio: number;
  puerta: string;
  superficieConstruida: string;
  superficieUtil: string;
  tendedero: any;
  tipoCalefaccion: string;
  titular: string;
  via: string;
  poblacion: Poblacion;
  amueblado: any;
  trastero: any;
  tipo: Tipo;
  direccionCompleta?: String;
}
