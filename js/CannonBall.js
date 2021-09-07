class CannonBall {
  constructor(x, y) {
    var options = {
      isStatic: true
    };
    this.r = 30;
    this.body = Bodies.circle(x, y, this.r, options);
    this.image = loadImage("./assets/cannonball.png");
    World.add(world, this.body);
  }


  display() 
  {
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r);
    pop();
  }


  shoot() {
   var newangle = cannon.angle-28
   newangle = newangle*(3.14/180) 
   var velocity = p5.Vector.fromAngle (newangle) 
   velocity.mult(0.5)
   

    Matter.Body.setStatic(this.body,false) 
   Matter.Body.setVelocity(this.body,{x:velocity.x*(180/3.14),
    y:velocity.y*(180/3.14)})
   
   }
}

/*the p5 library has a predefined function p5.Vector.fromAngle(). this function by 
default accepts the angle in radians but The angle we are providing is in degrees
 as our angle mode is in degrees, in order to pass the angle value to this function
  we need to convert angle to radians.That is done by multiplying the angle value
   with (pi/180) which is (3.14/180)*/


/*in the setVelocity() function the angle
 is in radians, but we need to convert that into degrees 
 by multiplying with (180/pi) which is (180/3.14)*/

   