import { Component, OnInit } from '@angular/core';
import { AutheticationService } from '../authetication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  email: string | null = null;

  constructor(
    public authService: AutheticationService,
    private route: Router
  ) {}

  ngOnInit() {
    // Suscríbete a los cambios en el estado de autenticación
    this.authService.ngFireAuth.authState.subscribe((user) => {
      if (user) {
        this.email = user.email;
      } else {
        this.email = null;
      }
    });
  }

  async logOut() {
    this.authService
      .signOut()
      .then(() => {
        this.email = null;
        this.route.navigate(['/landingpage']);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
