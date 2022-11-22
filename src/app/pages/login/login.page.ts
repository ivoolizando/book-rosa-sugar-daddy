import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../shared/authentication-service";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public router: Router,
    public afs: AngularFirestore,
    private alertController: AlertController,
  ) { }

  ngOnInit() {
  }

  login(email, senha) {
    
    this.authService.SignIn(email.value, senha.value)
      .then((res) => {
          this.router.navigate(['home']);          
      }).catch((error) => {
        window.alert(error.message)
      })
  }

}
