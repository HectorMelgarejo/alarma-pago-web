import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-dialog.component.html',
  styleUrl: './select-dialog.component.scss',
})
export class SelectDialogComponent {
  @Input({ required: true }) titulo = '';
  @Input({ required: true }) opciones: string[] = [];
  @Input() seleccionado = '';
  @Output() cerrar = new EventEmitter<void>();
  @Output() seleccionar = new EventEmitter<string>();

  elegir(opcion: string): void {
    this.seleccionar.emit(opcion);
  }
}
