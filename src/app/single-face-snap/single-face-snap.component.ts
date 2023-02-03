import { Component, OnInit} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { DYNAMIC_TYPE } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap$!:Observable<FaceSnap>;
  buttonTxt!:string;

  constructor(private faceSnapService:FaceSnapsService,
               private route :ActivatedRoute){}

ngOnInit(){ 
 this.buttonTxt="So Yummy!";
 const faceSnapId=+this.route.snapshot.params['id'];
 this.faceSnap$=this.faceSnapService.getFaceSnapById(faceSnapId);
}
onAddSnap(faceSnapId:number){
    if(this.buttonTxt==="So Yummy!"){
      this.faceSnap$= this.faceSnapService.snapFaceSnapById(faceSnapId,'yummy').pipe(
      tap(()=>this.buttonTxt='Oops, tasteless')
    );
    
    }else{
     this.faceSnap$= this.faceSnapService.snapFaceSnapById(faceSnapId,'tasteless').pipe(
        tap(()=>this.buttonTxt='So Yummy!')
      );
    }
  }
}
