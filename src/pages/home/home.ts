import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecuperarContraPage, RegistrarsePage } from '../index.paginas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  RdNuevo() {
    this.navCtrl.push(RegistrarsePage);
  }

  RdContra() {
    this.navCtrl.push(RecuperarContraPage);
  }

}
