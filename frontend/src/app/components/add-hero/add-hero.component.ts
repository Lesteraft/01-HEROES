import { Component, OnInit } from '@angular/core';
import { HeroService } from "../../service/hero.service";
import { NgForm }    from "@angular/forms";
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { Options, ImageResult } from "ngx-image2dataurl";

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css', '../../../assets/semantic/components/card.css']
})
export class AddHeroComponent {

  // nombre:string;

  imageChangedEvent: any = '';
  croppedImage: any = '';
  fileInput: Array <File>;
  firstImage:any = 'assets/img/not-found-image.jpg';
  src: string = "assets/img/not-found-image.jpg";
  options: Options = {
    resize: {
      maxHeight: 1697,
      maxWidth: 1200
    },
    allowedExtensions: ['JPG', 'PNG']
  }
  images: any = [];
  constructor(private heroService: HeroService) {}


  addHero(form:NgForm) {
    let allForm = new FormData();

    if (this.images.length > 0){
      for (const file of  this.images) {
        console.log(file);
        allForm.append("files", file.file);
      }
      allForm.set('img', this.images? 'assets/img/' + this.images[0].file.name : '');
    }
    // if ( this.images ) {
    //   for (let i = 0; i <   this.images.length; i++) {
    //     allForm.append("files", this.images[i].file);
    //   }
    // }
    allForm.set('nombre', form.value.nombre);
    allForm.set('aparicion', form.value.aparicion);
    allForm.set('bio', form.value.bio);
    allForm.set('casa', form.value.casa);

    this.heroService.createHero(allForm)
        .subscribe(res => {
          console.log(res);

          //Reset data :D
          form.resetForm();
          form.value.casa = '-1';
          this.src = "assets/img/not-found-image.jpg";
          this.images = [];
        });

  }


  onLoadImg( e ){
    this.imageChangedEvent = e;
    console.log(e);
    this.fileInput = e.target.files;

    const reader = new FileReader();
    reader.onload = e => this.firstImage = reader.result;

    reader.readAsDataURL(this.fileInput[0]);
    this.imageCropped(  this.imageChangedEvent);
    // if (e.target.files) {
    //   this.fileInput = e.target.files;
    //   for (const image of this.fileInput) {
    //
    //   }
    // }


  }

  selected(imageResult:ImageResult) {
    this.images = [];
    if (imageResult.error) alert(imageResult.error);
    this.images.push(imageResult);
    console.log(this.images);

    this.src = imageResult.resized && imageResult.resized.dataURL || imageResult.dataURL;
  }





  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
      // this.croppedImage.width = 100;
      // this.croppedImage.height = 100;
      console.log('fuera JOH');

  }
  imageLoaded() {
      // show cropper
      console.log('imageLoaded');

  }
  cropperReady() {
    console.log('cropperReady');
      // cropper ready
  }
  loadImageFailed() {
    console.log('loadImageFailed');
      // show message
  }


}
