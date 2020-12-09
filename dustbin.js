class Dustbin{
              constructor(x, y) {
                 var rect_options={

                   isStatic:true

                 }
                
                 this.Image= loadImage("Sprites/dustbingreen.png");

                
                this.bodyleft= Bodies.rectangle(530,300,10,10,rect_options);
                this.bodyright= Bodies.rectangle(670,300,10,10,rect_options);
                this.bodydown= Bodies.rectangle(600,y+50,220,20,rect_options);
                
                
                World.add(myworld,this.bodyleft);
                World.add(myworld,this.bodyright);
                World.add(myworld,this.bodydown);
                
              
              }



     display() {
        
      
      fill("red");
      
      
        rect(this.bodyleft.position.x, this.bodyleft.position.y,10, 180);
        rect(this.bodyright.position.x, this.bodyright.position.y,10, 180);
        imageMode(CENTER);
        image(this.Image, this.bodydown.position.x, this.bodydown.position.y,200, 180);
          
        
     }  
}