import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TopAppBarComponent } from '../../shared/top-app-bar/top-app-bar.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { ListItemComponent } from '../../shared/list-item/list-item.component';
import { ObligacionesService } from '../../core/obligaciones.service';
import { Obligacion } from '../../shared/models/obligacion.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, TopAppBarComponent, ButtonComponent, ListItemComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  pendientes: Obligacion[];
  pagadas: Obligacion[];
  proximas: Obligacion[];

  constructor(private obligacionesService: ObligacionesService) {
    this.pendientes = this.obligacionesService.getPendientes();
    this.pagadas = this.obligacionesService.getPagadas();
    this.proximas = this.pendientes.slice(0, 2);
  }
}
