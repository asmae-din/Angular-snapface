import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";
@Injectable({
    providedIn:'root'
})
export class FaceSnapsService{
    faceSnapsArr:FaceSnap[]=[{
        id:1,
        title:"Taco Pasta",
        ingredients:" 16 ounces dry fettuccine pasta 1 pound lean ground beef 1 (1.25 ounce) package taco seasoning mix 4 ounces shredded Cheddar cheese 3 tomatoes, diced salt to taste ground black pepper to taste 1 pinch garlic powder (6 ounce) can black olives, drained and chopped 2 tablespoons grated Parmesan cheese",
        directions:"Step 1 Cook pasta in a large pot of boiling salted water until al dente. Drain. Step 2 Meanwhile, in a large skillet cook ground beef. Drain excess grease. Add taco seasoning packet as directed on package. Step 3 Transfer pasta to a large bowl. Toss with cooked meat mixture, prepared cheese, and tomatoes. If desired, add sliced olives. Season to taste with salt, pepper, and garlic powder. Sprinkle with grated Parmesan cheese. Serve immediately.",
        imageUrl:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5343298.jpg&w=596&h=596&c=sc&poi=face&q=60&orient=true",
        createdDate:new Date(),
        nutritionFacts:"Per Serving: 552 calories; protein 25.8g; carbohydrates 58.4g; fat 24g; cholesterol 66.9mg; sodium 939.2mg. ",
        snaps:255,
        location:'Casablanca'
        },
        {
            id:2,
          title:"Cookies and Cream Brownies",
          ingredients:"1 ½ cups white sugar ¾ cup all-purpose flour ½ cup high-quality unsweetened cocoa powder ½ teaspoon salt ¼ teaspoon baking powder ¾ cup unsalted butter, melted 3 large eggs 1 teaspoon vanilla extract 32 chocolate sandwich cookies (such as Oreo®), divided 1 (8 ounce) container frozen whipped topping (such as Cool Whip®), thawed",
          directions:"Step 1 Preheat the oven to 350 degrees F (175 degrees C). Grease a 9-inch square baking pan. Step 2Mix sugar, flour, cocoa powder, salt, and baking powder together in a mixing bowl.Step 3 Whisk butter, eggs, and vanilla together in a separate bowl. Add butter mixture to the flour mixture and mix until well combined.Step 4Pour 1/2 of the batter into the prepared baking pan and smooth out with a spatula. Add 16 OREO® cookies in an even layer (4 rows of 4 cookies), then spread the remaining 1/2 of the batter over top.Step 5 Bake in the preheated oven until edges are brown and center is set, 30 to 35 minutes.Step 6 pan from the oven and set on a wire rack. Let brownies cool completely, at least 30 minutes. Step 7 Crush 12 of the remaining OREO® cookies. Place the whipped topping in a bowl and fold in the crushed cookies. Spread over the top of the brownies. Crush the remaining 4 cookies, then sprinkle over the top of the whipped cream mixture. Step 8 Keep refrigerated until you are ready to slice and serve.",
          imageUrl:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F09%2F14%2FCookies-and-Cream-Brownies.jpg&q=60",
          createdDate:new Date(),
          nutritionFacts:"Per Serving: 328 calories; fat 17.4g; cholesterol 57.8mg; sodium 183.5mg; carbohydrates 42.4g; protein 3.6g. ",
          snaps:0,
          location:'L.A'
        },
        {
            id:3,
          title:" Creamy Zucchini Soup",
          ingredients:"1 ½ tablespoons olive oil 1 ½ tablespoons butter1 cup finely chopped white onion 2 cloves garlic, finely chopped 2 ½ pounds zucchini, cubed 1 medium russet potato, peeled and cubed 1 ½ teaspoons kosher salt ½ teaspoon ground black pepper1 (32 fluid ounce) container chicken stock ½ cup heavy cream 1 teaspoon chopped fresh dill, or to taste",
          directions :"Step 1 Heat oil and butter in a large saucepan over medium heat. Add onion and garlic; cook, stirring frequently, until softened, 6 to 8 minutes. Add zucchini, potato, salt, and pepper; cook, stirring often, until softened, 8 to 10 minutes. Stir in stock and bring to a simmer. Simmer for 15 minutes. Step 2 Fill blender halfway with soup. Cover and hold lid down with a potholder; pulse a few times before leaving on to blend. Pour into another large saucepan. Repeat with remaining soup. Step 3 Stir in cream and bring soup to a low simmer to heat through. Ladle into bowls and garnish with dill.",
          imageUrl:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2Ff7921a82a9e12249de5c77b4eac7cc92%2F1650944303creamy-zucchini-soup.jpg&w=595&h=398&c=sc&poi=face&q=60&orient=true",
          createdDate:new Date(),
          nutritionFacts:"Per Serving: 202 calories; protein 4.3g; carbohydrates 16.9g; fat 14.4g; cholesterol 35.3mg; sodium 984.3mg. Full Nutrition",
          snaps:0,
          location:'CALIFORNIA'
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