import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SeccionOpcionesDeUsoComponent } from './seccion-opciones-de-uso/seccion-opciones-de-uso.component';
import { SeccionAInformacionDelContribuyenteComponent } from './seccion-a-informacion-del-contribuyente/seccion-a-informacion-del-contribuyente.component';
import { SeccionBBaseGravableComponent } from './seccion-b-base-gravable/seccion-b-base-gravable.component';
import { SeccionCDiscriminacionActividadesGravadasComponent } from './seccion-c-discriminacion-actividades-gravadas/seccion-c-discriminacion-actividades-gravadas.component';
import { SeccionDLiquidacionPrivadaComponent } from './seccion-d-liquidacion-privada/seccion-d-liquidacion-privada.component';
import { SeccionEPagoComponent } from './seccion-e-pago/seccion-e-pago.component';
import { SeccionPagoVoluntarioComponent } from './seccion-pago-voluntario/seccion-pago-voluntario.component';
import { SeccionFFirmasComponent } from './seccion-f-firmas/seccion-f-firmas.component';

@NgModule({
  declarations: [
    AppComponent,
    SeccionOpcionesDeUsoComponent,
    SeccionAInformacionDelContribuyenteComponent,
    SeccionBBaseGravableComponent,
    SeccionCDiscriminacionActividadesGravadasComponent,
    SeccionDLiquidacionPrivadaComponent,
    SeccionEPagoComponent,
    SeccionPagoVoluntarioComponent,
    SeccionFFirmasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
