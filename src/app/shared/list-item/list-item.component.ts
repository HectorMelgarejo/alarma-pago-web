import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BadgeComponent } from '../badge/badge.component';
import { CopCurrencyPipe } from '../pipes/cop-currency.pipe';
import { Obligacion } from '../models/obligacion.model';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [CommonModule, CopCurrencyPipe, RouterLink, BadgeComponent],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss',
})
export class ListItemComponent {
  @Input({ required: true }) obligacion!: Obligacion;
  /** Muestra el badge de estado (se usa en Alarmas, no en Resumen mensual) */
  @Input() showBadge = false;
  /** Texto de fecha ya formateado, p.ej. "Vence 21/08" o "Pagada 04/08" */
  @Input() fechaLabel = '';
  @Input() routerLink: string | any[] | null = null;
}
