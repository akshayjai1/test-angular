import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  id: number =6;
  name: string;

  constructor() {
    
    // this.id=5;
    
   }

  ngOnInit() {
    
  }

}
