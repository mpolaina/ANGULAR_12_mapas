import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Marcador } from '../../classes/marcador.class';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { EditarComponent } from './editar.component';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent  {

  marcadores: Marcador[] = []

  lat = 37.8914313;
  lng = -4.8002343;

  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor( private _snackBar: MatSnackBar,
                public dialog: MatDialog ) {

      if( localStorage.getItem('marcadores')){

          this.marcadores = JSON.parse( localStorage.getItem('marcadores') )
      }
  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  guardarStorage(){
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores))
  }

  agregarMarcador( evento ){

      const coords = evento.coords
      const nuevoMarcador = new Marcador( coords.lat, coords.lng)

      this.marcadores.push( nuevoMarcador )
      this.guardarStorage()

      this._snackBar.open('Marcador agregado!', 'OK', { duration: 2000, verticalPosition: this.verticalPosition });
  }

  borrarMarcador( i ){

      this.marcadores.splice(i, 1)
      this.guardarStorage()

      this._snackBar.open('Marcador eliminado!', 'OK', { duration: 2000, verticalPosition: this.verticalPosition  });

  }

  editarMarcador (marcador: Marcador) {

      const dialogRef = this.dialog.open( EditarComponent, {
        width: '250px',
        data: {titulo: marcador.titulo, descripcion: marcador.descripcion}
      });

      dialogRef.afterClosed().subscribe(result => {

        if ( !result ){
          return
        }

        marcador.titulo = result.titulo
        marcador.descripcion = result.desc

        this.guardarStorage()

        this._snackBar.open('Marcador actualizado con éxito!', 'OK', { duration: 2000, verticalPosition: this.verticalPosition  });

      });
  }

}
