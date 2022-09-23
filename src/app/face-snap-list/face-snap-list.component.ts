import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject, takeUntil, tap } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit, OnDestroy {

  faceSnapsArr!:FaceSnap[];
  private destroy$!:Subject<boolean>;
  constructor( private faceSnapsServices:FaceSnapsService) {};
  ngOnInit(): void{
    this.destroy$=new Subject<boolean>();
    this.faceSnapsArr=this.faceSnapsServices.getAllFaceSnaps();
    interval(1000).pipe(
      takeUntil(this.destroy$),
      tap(console.log)
    ).subscribe();  
  }
  ngOnDestroy():void{
    this.destroy$.next(true);
  }
  
}
