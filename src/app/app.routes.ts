import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AlarmasComponent } from './pages/alarmas/alarmas.component';
import { ResumenMensualComponent } from './pages/resumen-mensual/resumen-mensual.component';
import { DetalleObligacionComponent } from './pages/detalle-obligacion/detalle-obligacion.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'alarmas', component: AlarmasComponent },
  { path: 'resumen-mensual', component: ResumenMensualComponent },
  { path: 'obligacion/:id', component: DetalleObligacionComponent },
  { path: '**', redirectTo: '' },
];
