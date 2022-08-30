import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";
@Injectable({
    providedIn:'root'
})
export class FaceSnapsService{
    faceSnapsArr:FaceSnap[]=[{
        id:1,
        title:"asmae",
        description:"20yo female",
        imageUrl:"https://images.pexels.com/photos/13020454/pexels-photo-13020454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        createdDate:new Date(),
        snaps:255,
        location:'Casablanca'
        },
        {
            id:2,
          title:"the cave",
          description:"25yo female",
          imageUrl:"https://images.pexels.com/photos/12712600/pexels-photo-12712600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          createdDate:new Date(),
          snaps:0,
          location:'L.A'
        },
        {
            id:3,
          title:"beauty under the moon",
          description:"32yo female",
          imageUrl:"https://images.pexels.com/photos/12789556/pexels-photo-12789556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          createdDate:new Date(),
          snaps:0
        }]
        getAllFaceSnaps():FaceSnap[] {
            return this.faceSnapsArr;

        }
        getFaceSnapById( faceSnapId:number):FaceSnap{
            const faceSnap=this.faceSnapsArr.find(faceSnap=>faceSnap.id===faceSnapId);
            if (!faceSnap) {
                throw new Error('FaceSnap not found!');
            } else {
                return faceSnap;
            }

        }
        snapFaceSnapById(faceSnapId:number, snapType:'snap'| 'unsnap' ):void{
            const faceSnaps=this.getFaceSnapById(faceSnapId);
            snapType==='snap'? faceSnaps.snaps++:faceSnaps.snaps--;
        }

}