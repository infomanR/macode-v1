import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';
//import { Image } from '../../models/image';
import { Router } from '@angular/router';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-image-create',
  templateUrl: './admin-image-create.component.html',
  styleUrls: ['./admin-image-create.component.css']
})
export class AdminImageCreateComponent implements OnInit {
  frmRegistro: FormGroup
  //constructor(private imageService: ImageService, private router: Router) { }
  constructor(private fb: FormBuilder, private imageService: ImageService){
    this.frmRegistro = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      thumbnail: ['', Validators.required],
      imageLink: ['', Validators.required]
    })
  }
  ngOnInit() {
  }
  
  createImage(image){
  	this.imageService.addImage(image).subscribe(
  		image => {
                console.log(image);
                //this.router.navigate(['back/dashboard']);
              },
  		error => console.log(<any> error)
	  );
  }
  registro(){
    console.log("Valida por aca")
  }
}
   