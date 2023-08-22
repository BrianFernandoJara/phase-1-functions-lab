// Code your solution in this file!


function distanceFromHqInBlocks(block){
    if(Math.sign(block - 42) === -1){
        return (block - 42) * -1;
    } else {
        return block - 42;
    }
}

function distanceFromHqInFeet(block){
    return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(start, destination){
    if(Math.sign(start - destination) === -1){
        return ((start - destination) * -1) * 264;
    } else {
        return (start - destination) * 264;
    }
}
function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start,destination);
    if (distance < 400){
        return 0;
    } else if(distance >= 400 && distance < 2000){
        return (distance - 400) * .02;
    } else if(distance >= 2000 && distance < 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}
