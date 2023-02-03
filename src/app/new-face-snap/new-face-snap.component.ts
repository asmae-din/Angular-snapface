import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from "@angular/forms";
import { Route, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit {
  snapForm!:FormGroup;
  faceSnapPreview$!:Observable<FaceSnap>;
  urlRegex!:RegExp;


  constructor(private formBuilder:FormBuilder,
              private faceSnapsServices:FaceSnapsService,
              private router:Router) { }

  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.snapForm=this.formBuilder.group({
         title:[null , Validators.required],
         ingredients:[null,Validators.required],
         directions:[null,Validators.required],
         nutritionFacts:[null,Validators.required],
         imageUrl:[null,[Validators.required, Validators.pattern(this.urlRegex)]],
         location:[null]

    },{
      updateOn:'blur'
    });
    this.faceSnapPreview$=this.snapForm.valueChanges.pipe(
      map(formValue=>({
        ...formValue,
        createDate:new Date(),
        snaps:0,
        id:5,
      }))
    )
  };
  
//   onSubmitForm() {
//     this.faceSnapsServices.addFaceSnap(this.snapForm.value);
//     this.router.navigateByUrl('/facesnaps')
// }

}
