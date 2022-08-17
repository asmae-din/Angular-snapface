import { Component, OnInit} from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  faceSnapsArr!:FaceSnap[];
 

  ngOnInit(){
    this.faceSnapsArr=[{
      title:"asmae",
      description:"20yo female",
      imageUrl:"https://images.pexels.com/photos/13020454/pexels-photo-13020454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      createdDate:new Date(),
      snaps:255,
      location:'Casablanca'
      },
      {
        title:"the cave",
        description:"25yo female",
        imageUrl:"https://images.pexels.com/photos/12712600/pexels-photo-12712600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        createdDate:new Date(),
        snaps:0,
        location:'L.A'
      },
      {
        title:"beauty under the moon",
        description:"32yo female",
        imageUrl:"https://images.pexels.com/photos/12789556/pexels-photo-12789556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        createdDate:new Date(),
        snaps:0
      }]
  }
  
}

