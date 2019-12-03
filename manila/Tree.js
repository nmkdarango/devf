class Farm {
    constructor(rangeHouse, rangeTree){
       this.rangeHouse = rangeHouse;
       this.rangeTree = rangeTree;
    }
    countApplesAndOranges(numbers, positionA, positionO){
        let apples = 0;
        let oranges = 0;
        if(numbers[0] === positionA.length && numbers[1] === positionO.length){
            for(let i=0;i<numbers[0]; i++){
                console.log(this.rangeTree[0]+positionA[i]);
                if(this.rangeHouse[0]<=this.rangeTree[0]+positionA[i] && this.rangeHouse[1]>= this.rangeTree[0]+positionA[i]){
                    apples++;
                }
            }
            for(let i=0;i<numbers[1]; i++){
                if(this.rangeHouse[0]<=this.rangeTree[1]+positionO[i] && this.rangeHouse[1]>= this.rangeTree[1]+positionO[i]){
                    oranges++;
                }
            }
            
            
        }
        return [apples,oranges];
    }
};

let farm = new Farm([7,13], [5,15]);
console.log(farm.countApplesAndOranges([3,2], [-2, 2, 1], [5, -6]));



