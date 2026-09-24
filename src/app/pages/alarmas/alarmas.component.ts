import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopAppBarComponent } from '../../shared/top-app-bar/top-app-bar.component';
import { ListItemComponent } from '../../shared/list-item/list-item.component';
import { ObligacionesService } from '../../core/obligaciones.service';
import { Obligacion } from '../../shared/models/obligacion.model';

type Tab = 'todas' | 'pendientes' | 'pagadas';

@Component({
  selector: 'app-alarmas',
  standalone: true,
  imports: [CommonModule, TopAppBarComponent, ListItemComponent],
  templateUrl: './alarmas.component.html',
  styleUrl: './alarmas.component.scss',
})
export class AlarmasComponent {
  tabActivo: Tab = 'todas';

  private todas: Obligacion[];
  private pendientes: Obligacion[];
  private pagadas: Obligacion[];

  constructor(private obligacionesService: ObligacionesService) {
    this.todas = this.obligacionesService.getTodas();
    this.pendientes = this.obligacionesService.getPendientes();
    this.pagadas = this.obligacionesService.getPagadas();
  }

  get lista(): Obligacion[] {
    if (this.tabActivo === 'pendientes') return this.pendientes;
    if (this.tabActivo === 'pagadas') return this.pagadas;
    return this.todas;
  }

  get tituloSeccion(): string {
    if (this.tabActivo === 'pendientes') return 'Obligaciones pendientes';
    if (this.tabActivo === 'pagadas') return 'Obligaciones pagadas';
    return 'Todas las obligaciones';
  }

  fechaLabel(o: Obligacion): string {
    return o.estado === 'pendiente' ? `Vence ${o.fecha}` : `Pagada ${o.fecha}`;
  }

  seleccionar(tab: Tab): void {
    this.tabActivo = tab;
  }
}
