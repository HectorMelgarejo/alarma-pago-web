export type EstadoObligacion = 'pendiente' | 'pagada';

export interface Obligacion {
  id: string;
  nombre: string;
  monto: number;
  estado: EstadoObligacion;
  /** Fecha de vencimiento en formato dd/mm (o dd/mm/yyyy en el detalle) */
  fecha: string;
  fechaCompleta?: string;
  categoria: 'Servicios' | 'Vivienda';
  mes: 'Julio' | 'Agosto';
}
