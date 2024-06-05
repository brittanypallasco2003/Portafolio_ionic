import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AutheticationService } from 'src/app/authetication.service';

@Component({
  selector: 'app-restablacer-pass',
  templateUrl: './restablacer-pass.page.html',
  styleUrls: ['./restablacer-pass.page.scss'],
})
export class RestablacerPassPage implements OnInit {

  email:any
  constructor(public authService:AutheticationService, private route:Router, private toastController: ToastController) { }

  ngOnInit() {
  }

  async resetPassword(){
    this.authService.resetPassword(this.email).then(() => {
      console.log('Correo enviado')
      this.presentToast()
     }).catch((error) => {
      console.log(error)
      })
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Se acaba de enviar a tu correo electrónico un enlace para restablecer tu contraseña',
      duration: 2000,
      position: 'bottom' 
    });
  
    toast.present();
    toast.onDidDismiss().then(()=>{
      this.route.navigate(['/login']);
    })
  }

}
