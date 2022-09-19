import { DYNAMIC_TYPE } from '@angular/compiler';
import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!:FaceSnap;
  buttonTxt!:string;

  constructor(private faceSnapService:FaceSnapsService,
              private router:Router ){}

ngOnInit(){ 
 this.buttonTxt="Oh Snap!";
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
onViewFaceSnap(){
this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);

}
}
