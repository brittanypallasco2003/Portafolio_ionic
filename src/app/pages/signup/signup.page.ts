import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AutheticationService } from 'src/app/authetication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  ionicForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public authService: AutheticationService,
    private router: Router,
    private toastController: ToastController,
  ) {}

  ngOnInit() {
    // this.signUP()
    this.ionicForm = this.formBuilder.group({
      fullname: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      password: [
        '',
        [
          Validators.pattern(
            '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-8])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
          ),
          Validators.required,
        ],
      ],
    });
  }
  get errorControl() {
    return this.ionicForm.controls;
  }

  async signUP() {
    const loading = await this.loadingCtrl.create();
    await loading.present();

      const user = await this.authService
        .registerUser(
          this.ionicForm.value.email,
          this.ionicForm.value.password,
        )
        .catch((err) => {
          this.presentToast(err.message)
          console.log(err);
          loading.dismiss();
        });

      if (user) {
        loading.dismiss();
        this.router.navigate(['/home']);
      }
    }

    async presentToast(message: undefined) {
      console.log(message);
      
      const toast = await this.toastController.create({
        message: message,
        duration: 1500,
        position: 'top',
      });
  
      await toast.present();
    }
}
