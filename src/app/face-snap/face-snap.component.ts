import { DYNAMIC_TYPE } from '@angular/compiler';
import { Component, OnInit, Input} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!:FaceSnap;
  buttonTxt!:string;

ngOnInit(){ 
 this.buttonTxt="Oh Snap!";
}
onAddSnap(){
  if(this.buttonTxt=="Oh Snap!"){
  this.faceSnap.snaps++;
  this.buttonTxt="Oops, unSnap!";
}else{
  this.faceSnap.snaps--;
  this.buttonTxt='Oh Snap!';
}
}

}
