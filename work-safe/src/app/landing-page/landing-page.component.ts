import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openInstagram(name){

    if(name=="af"){
      window.open("https://www.af-reabilitacao.com/");

    } else if(name=="amm"){
      window.open("http://www.construcoesamm.com/");

    }

    else if(name=="witech"){
      window.open("https://witech-web.web.app/");
    }

    else if(name=="deccer"){
      window.open("https://deccer.com/");
    }
      
  }

}
