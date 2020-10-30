import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AgmCoreModule } from '@agm/core';
import { EditarComponent } from './components/mapa/editar.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAQHN-OuBvhrgBlP4GNnzitAHoLLf2BfVQ'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
