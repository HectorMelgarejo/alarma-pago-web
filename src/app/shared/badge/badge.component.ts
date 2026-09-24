import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadoObligacion } from '../models/obligacion.model';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
})
export class BadgeComponent {
  @Input({ required: true }) estado!: EstadoObligacion;
}
