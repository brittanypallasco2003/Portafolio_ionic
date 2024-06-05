import { Component, OnInit } from '@angular/core';
import { AutheticationService } from '../authetication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  email :any

  constructor(public authService:AutheticationService, private route:Router) {
  }

  ngOnInit(): void {

    this.authService.getProfile().then(user => {
      this.email = user?.email;
      console.log(user?.email);
    }).catch(error => {
      console.error('Error getting user profile:', error);
    });
    
  }


  async logOut(){
    this.authService.signOut().then(() => {
      this.route.navigate(['/landingpage'])
      }).catch((error) => { console.log(error) })

  }

}
