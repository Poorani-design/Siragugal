import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ourservices',
  templateUrl: './ourservices.component.html',
  styleUrls: ['./ourservices.component.css']
})
export class OurservicesComponent implements OnInit {
  imgTxt="Siragugal_Makeup_Services";
  imgArray:any;
  imgTopic:any=[];
  constructor() { 
   
  }
 
  ngOnInit(): void {
    this.imgTopic=[
      'FACE MAKEUP',
      'BODY FRAGRANCE',
      'NAIL COLORING',
      'EYELINER'
    ]
    this.imgArray=[
      '../../assets/images/services/Face-Makeup.png',
      '../../assets/images/services/Parfume.png',
      '../../assets/images/services/Snail-Coloring.png',
      '../../assets/images/services/Eyeliner.png'
    

    ]
  }

}
