import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AutheticationService } from 'src/app/authetication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public loadingCtrl:LoadingController, public authService:AutheticationService, private router:Router,
    private toastController: ToastController,
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      password: ['', [
        Validators.required,
      ]
      ],
    });
  }
  get errorControl(){
    return this.loginForm?.controls
  }

  async login() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    // console.log(this.email + this.password);
    if (this.loginForm?.valid) {

      //  await  loading.dismiss();
      const user = await this.authService.loginUser(this.loginForm.value.email, this.loginForm.value.password).catch((err) => {
        this.presentToast(err.message)
        console.log(err);
        loading.dismiss();
      })

      if (user) {
        loading.dismiss();
        this.router.navigate(['/home'])
      }
    } else {
      return console.log('Please provide all the required values!');
    }

  }

  async presentToast(message: undefined) {
    console.log(message);

    const toast = await this.toastController.create({
      message: message,
      duration: 6000,
      position: 'top',
    });

    await toast.present();
  }

}
