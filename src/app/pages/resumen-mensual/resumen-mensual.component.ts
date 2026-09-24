import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopAppBarComponent } from '../../shared/top-app-bar/top-app-bar.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { ListItemComponent } from '../../shared/list-item/list-item.component';
import { SelectDialogComponent } from '../../shared/dialog/select-dialog.component';
import { CopCurrencyPipe } from '../../shared/pipes/cop-currency.pipe';
import { ObligacionesService } from '../../core/obligaciones.service';
import { Obligacion } from '../../shared/models/obligacion.model';

const MESES = ['Todos', 'Julio', 'Agosto'];
const CATEGORIAS = ['Todas', 'Servicios', 'Vivienda'];

@Component({
  selector: 'app-resumen-mensual',
  standalone: true,
  imports: [
    CommonModule,
    TopAppBarComponent,
    ButtonComponent,
    ListItemComponent,
    SelectDialogComponent,
    CopCurrencyPipe,
  ],
  templateUrl: './resumen-mensual.component.html',
  styleUrl: './resumen-mensual.component.scss',
})
export class ResumenMensualComponent {
  meses = MESES;
  categorias = CATEGORIAS;

  // Filtros aplicados (los que gobiernan el resultado mostrado)
  mesAplicado = 'Todos';
  categoriaAplicada = 'Todas';

  // Selección en curso en los controles (puede diferir de lo aplicado)
  mesSeleccionado = 'Todos';
  categoriaSeleccionada = 'Todas';

  mostrarSelectorMes = false;
  mostrarSelectorCategoria = false;

  resultados: Obligacion[];

  constructor(private obligacionesService: ObligacionesService) {
    this.resultados = this.obligacionesService.filtrar(this.mesAplicado, this.categoriaAplicada);
  }

  get hayFiltrosSinAplicar(): boolean {
    return this.mesSeleccionado !== this.mesAplicado || this.categoriaSeleccionada !== this.categoriaAplicada;
  }

  get total(): number {
    return this.resultados.reduce((sum, o) => sum + o.monto, 0);
  }

  fechaLabel(o: Obligacion): string {
    return `Pagada ${o.fecha}`;
  }

  aplicarFiltros(): void {
    this.mesAplicado = this.mesSeleccionado;
    this.categoriaAplicada = this.categoriaSeleccionada;
    this.resultados = this.obligacionesService.filtrar(this.mesAplicado, this.categoriaAplicada);
  }

  elegirMes(mes: string): void {
    this.mesSeleccionado = mes;
    this.mostrarSelectorMes = false;
  }

  elegirCategoria(categoria: string): void {
    this.categoriaSeleccionada = categoria;
    this.mostrarSelectorCategoria = false;
  }
}
