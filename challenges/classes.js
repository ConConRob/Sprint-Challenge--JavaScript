// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMakerClass{
    constructor(length, width, height){
        this.length = length;
        this.width = width;
        this.height = height;
    }
    volume(){
        return this.height*this.length*this.width;
    }
    surfaceArea(){
        return 2*(this.length * this.width + this.length * this.height + this.width * this.height);
    }
}
const cuboid1 = new CuboidMaker(4, 5, 5);
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid1.volume()); // 100
console.log(cuboid1.surfaceArea()); // 130


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerClass {
    constructor(size){
        super(size, size, size);
    }
    //don't need to change functions volume or surfaceArea because the same formula will do the job
    //I did this silly thing anyways becuase it asked me to
    volume(){
        return this.height*this.height*this.height;
    }
    surfaceArea(){
        return 6*(this.length * this.length);
    }
    
}
const cube =  new CubeMaker(5);
console.log(cube.surfaceArea());//150
console.log(cube.volume());//125