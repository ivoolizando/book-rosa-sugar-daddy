import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-primeiratela',
  templateUrl: './primeiratela.page.html',
  styleUrls: ['./primeiratela.page.scss'],
})
export class PrimeiratelaPage implements OnInit {

  constructor(
    private router: Router
  ) { 

  }

  ngOnInit() {
  }
  proximatela(){
    this.router.navigateByUrl('segundatela')

  }

}
