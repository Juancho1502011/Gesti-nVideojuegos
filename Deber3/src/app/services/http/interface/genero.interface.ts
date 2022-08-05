export interface GeneroInterface {
  id: number;
  nombre: string;
  anio: string;
  juego: string;
  ga:boolean;
  clasificacion: string;
  videojuegos: [{
    id: number;
    nombre: string;
    ventas: number;
    precio: number;
    plataforma: string;
    online: boolean;
  }]
}
