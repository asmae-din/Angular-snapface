import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, switchMap, VirtualTimeScheduler } from "rxjs";
import { FaceSnap } from "../models/face-snap.model";
@Injectable({
    providedIn:'root'
})
export class FaceSnapsService{
    constructor(private http:HttpClient){}
      
    faceSnapsArr:FaceSnap[]=[];
        getAllFaceSnaps():Observable<FaceSnap[]> {
            return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');

        }
        getFaceSnapById( faceSnapId:number):Observable<FaceSnap>{
            return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`)

        }
        snapFaceSnapById(faceSnapId:number, snapType:'yummy'| 'tasteless' ):Observable<FaceSnap>{
            return this.getFaceSnapById(faceSnapId).pipe(
                map(FaceSnap=>({
                    ...FaceSnap,
                    snaps:FaceSnap.snaps + ( snapType === 'yummy' ? 1:-1)
                    
                })),
                switchMap(updateFacesnap=>this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`,updateFacesnap))
            )
          
        }
       
}