const Xmov = 4;
const Ymov = 3;
const wallDist = 5;

const Ylength = wallDist + Ymov; 
const firstTriangle = (a, b) => {
    const step1 = Math.sqrt((a**2)+(b**2));
    return step1;
}

const secondAngle = (a, b, c) => {
    const step1 = (a**2 + b**2 - c**2);
    const step2 = Math.acos(step1/(2*a*b));
    return step2 * 180 / Math.PI;
}


const angleMov = (FullDistance, Xmovement,) => {
    const angle = secondAngle(FullDistance,firstTriangle(Xmovement,FullDistance),Xmovement);
    return angle;
}


console.log(angleMov(Ylength, Xmov));
