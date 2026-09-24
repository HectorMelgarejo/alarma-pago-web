import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TopAppBarComponent } from '../../shared/top-app-bar/top-app-bar.component';
import { BadgeComponent } from '../../shared/badge/badge.component';
import { CopCurrencyPipe } from '../../shared/pipes/cop-currency.pipe';
import { ObligacionesService } from '../../core/obligaciones.service';
import { Obligacion } from '../../shared/models/obligacion.model';

@Component({
  selector: 'app-detalle-obligacion',
  standalone: true,
  imports: [CommonModule, TopAppBarComponent, BadgeComponent, CopCurrencyPipe],
  templateUrl: './detalle-obligacion.component.html',
  styleUrl: './detalle-obligacion.component.scss',
})
export class DetalleObligacionComponent {
  obligacion: Obligacion | undefined;

  constructor(private route: ActivatedRoute, private obligacionesService: ObligacionesService) {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.obligacion = this.obligacionesService.getPorId(id);
  }
}
