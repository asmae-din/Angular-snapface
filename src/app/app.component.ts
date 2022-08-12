import { Component, OnInit} from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  mySnap!:FaceSnap;
  mySecSnap!:FaceSnap;
  myLastSnap!:FaceSnap;
  ngOnInit(){
    this.mySnap=new FaceSnap(
      "ASMAE",
      "20yo female",
      "https://images.pexels.com/photos/13020454/pexels-photo-13020454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      new Date,
      0,
      'Casablanca'
      
    );
    this.mySecSnap=new FaceSnap(
      "ASMAE",
      "25yo female",
      "https://images.pexels.com/photos/12712600/pexels-photo-12712600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      new Date,
      0
    );
    this.myLastSnap=new FaceSnap( 
      "ASMAE",
      "32yo female",
      "https://images.pexels.com/photos/12789556/pexels-photo-12789556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      new Date,
      0
    );
  }
 
}

