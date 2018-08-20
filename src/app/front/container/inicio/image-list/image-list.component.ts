import { Component, OnInit } from '@angular/core';
import { Image } from '../../../../models/image';
import {ImageService} from '../../../../services/image.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

	images: Observable<Image[]>;
	selectedImage: Image;

  constructor(public imageService: ImageService) { }

  ngOnInit() {
  	//this.images = this.imageService.getImages();
    this.images = this.imageService.getImages();
    /*this.imageService.getImages().subscribe(images => {
      console.log(images);
      //this.images = images
    });*/
  }
  onSelect(image: Image){
		this.selectedImage = image;
	}
}
