import { Component, OnInit} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { DYNAMIC_TYPE } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!:FaceSnap;
  buttonTxt!:string;

  constructor(private faceSnapService:FaceSnapsService,
               private route :ActivatedRoute){}

ngOnInit(){ 
 this.buttonTxt="Oh Snap!";
 const faceSnapId=+this.route.snapshot.params['id'];
 this.faceSnap=this.faceSnapService.getFaceSnapById(faceSnapId);
}
onAddSnap(){
  if(this.buttonTxt=="Oh Snap!"){
  this.faceSnapService.snapFaceSnapById(this.faceSnap.id,'snap');
  this.buttonTxt="Oops, unSnap!";
}else{
  this.faceSnapService.snapFaceSnapById(this.faceSnap.id,'unsnap');
  this.buttonTxt='Oh Snap!';
}
}

}
