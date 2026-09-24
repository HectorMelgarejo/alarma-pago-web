import { Injectable } from '@angular/core';
import { Obligacion } from '../shared/models/obligacion.model';

@Injectable({ providedIn: 'root' })
export class ObligacionesService {
  private readonly data: Obligacion[] = [
    {
      id: 'luz-jul',
      nombre: 'Luz — Casa',
      monto: 82000,
      estado: 'pagada',
      fecha: '07/07',
      fechaCompleta: '07/07/2026',
      categoria: 'Servicios',
      mes: 'Julio',
    },
    {
      id: 'luz-ago',
      nombre: 'Luz — Casa',
      monto: 85000,
      estado: 'pendiente',
      fecha: '21/08',
      fechaCompleta: '21/08/2026',
      categoria: 'Servicios',
      mes: 'Agosto',
    },
    {
      id: 'internet-ago',
      nombre: 'Internet hogar',
      monto: 72000,
      estado: 'pendiente',
      fecha: '18/09',
      fechaCompleta: '18/09/2026',
      categoria: 'Servicios',
      mes: 'Agosto',
    },
    {
      id: 'arriendo-ago',
      nombre: 'Arriendo',
      monto: 900000,
      estado: 'pendiente',
      fecha: '04/09',
      fechaCompleta: '04/09/2026',
      categoria: 'Vivienda',
      mes: 'Agosto',
    },
    {
      id: 'netflix',
      nombre: 'Netflix',
      monto: 45000,
      estado: 'pendiente',
      fecha: '15/09',
      fechaCompleta: '15/09/2026',
      categoria: 'Servicios',
      mes: 'Agosto',
    },
    {
      id: 'gas',
      nombre: 'Gas — Casa',
      monto: 38000,
      estado: 'pendiente',
      fecha: '22/09',
      fechaCompleta: '22/09/2026',
      categoria: 'Servicios',
      mes: 'Agosto',
    },
    {
      id: 'seguro-auto',
      nombre: 'Seguro del auto',
      monto: 180000,
      estado: 'pagada',
      fecha: '09/08',
      fechaCompleta: '09/08/2026',
      categoria: 'Vivienda',
      mes: 'Agosto',
    },
    {
      id: 'colegio',
      nombre: 'Colegio',
      monto: 650000,
      estado: 'pagada',
      fecha: '12/08',
      fechaCompleta: '12/08/2026',
      categoria: 'Vivienda',
      mes: 'Agosto',
    },
  ];

  getTodas(): Obligacion[] {
    return this.data;
  }

  getPendientes(): Obligacion[] {
    return this.data.filter((o) => o.estado === 'pendiente');
  }

  getPagadas(): Obligacion[] {
    return this.data.filter((o) => o.estado === 'pagada');
  }

  getPorId(id: string): Obligacion | undefined {
    return this.data.find((o) => o.id === id);
  }

  filtrar(mes: string, categoria: string): Obligacion[] {
    return this.data.filter((o) => {
      const coincideMes = mes === 'Todos' || o.mes === mes;
      const coincideCategoria = categoria === 'Todas' || o.categoria === categoria;
      return coincideMes && coincideCategoria && o.estado === 'pagada';
    });
  }
}
