import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false, 
})
export class HomePage {
  nombre: string = '';
  mensaje: string = '';

  mostrarMensaje() {
  if (this.nombre.trim() === '') {
      this.mensaje = 'Por favor, introduce tu nombre.';
    return;
  }
    this.mensaje = `¡Bienvenido/a, ${this.nombre}!`;
  }
}
