import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  makeup:any;
  makeupTopic:any;
  constructor() {
    this.makeup=[
    '../../assets/images/makeup_images/siragugal_bridal_makeup_1.jpeg',
    '../../assets/images/makeup_images/siragugal_bridal_makeup_2.jpeg',
    '../../assets/images/makeup_images/siragugal_bridal_makeup_3.jpg',
    '../../assets/images/makeup_images/siragugal_bridal_makeup_4.jpeg',
    '../../assets/images/makeup_images/siragugal_bridal_makeup_5.jpeg',
    '../../assets/images/makeup_images/siragugal_bridal_makeup_6.jpeg',
    '../../assets/images/makeup_images/siragugal_bridal_makeup_7.jpeg',
    '../../assets/images/makeup_images/siragugal_bridal_makeup_8.jpeg',
    '../../assets/images/makeup_images/siragugal_bridal_makeup_9.jpeg',
    '../../assets/images/makeup_images/siragugal_bridal_makeup_10.jpeg',
    '../../assets/images/makeup_images/siragugal_bridal_makeup_11.jpeg',
    '../../assets/images/makeup_images/siragugal_bridal_makeup_12.jpeg',
    '../../assets/images/makeup_images/siragugal_bridal_makeup_13.jpeg',
    '../../assets/images/makeup_images/siragugal_bridal_makeup_14.jpeg',
    '../../assets/images/makeup_images/siragugal_bridal_makeup_15.jpeg',
    '../../assets/images/makeup_images/siragugal_bridal_makeup_16.jpeg',



    ]
   }

  
  ngOnInit(): void {
  }


}
