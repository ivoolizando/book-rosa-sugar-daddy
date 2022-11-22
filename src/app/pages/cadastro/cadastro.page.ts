import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../shared/authentication-service";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public router: Router,
    public afs: AngularFirestore,
    private alertController: AlertController,
  ) { }

  ngOnInit() {
  }

  async presentAlert(texto) {
    const alert = await this.alertController.create({
      header: texto,
      buttons: [
        {
          text: 'Ok',
        },
      ],
    });

    await alert.present();
  }

  cadastrar(nome, email, senha, confirmasenha){
    if(senha.value==confirmasenha.value){
      this.authService.RegisterUser(nome.value, email.value, senha.value)
      .then((res) => {
        this.router.navigateByUrl('home');
      }).catch((error) => {
        window.alert(error.message)
      })
    }
    else{
      this.presentAlert('Confirmação de senha não confere!')
    }
  }

}
