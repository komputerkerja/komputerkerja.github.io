function LIP(A,B,t){
    return A+(B-A)*t;
}

function getInterSection(A,B,C,D){
    const tTop=(D.x-C.x)*(A.y-C.y)-(D.y-C.y)*(A.x-C.x)
    const uTop=(C.y-A.y)*(A.x-B.x)-(C.x-A.x)*(A.y-B.y)
    const bottom=(D.y-C.y)*(B.x-A.x)-(D.x-C.x)*(B.y-A.y)
    if(bottom!=0){
        const t=tTop/bottom
        const u=uTop/bottom
        if(t>=0 && t<=1 && u>=0 && u<=1){
            return {
                x: LIP(A.x,B.x,t),
                y: LIP(A.y,B.y,t),
                offset: t
            }
        }
    }
    return null;
}

function polyIntersection(poly1, poly2){
    for(let i=0; i< poly1.length; i++){
        for(let x=0; x< poly2.length; x++){
            const touch = getInterSection(
                poly1[i],
                poly1[(i+1)%poly1.length],
                poly2[x],
                poly2[(x+1)%poly2.length],
            )
            if(touch) return true
        }
    }
    return false;
}

function getRandomHexColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    // Convert the RGB values to a hex string
    const hexColor = `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;
    return hexColor;
}

function getRandomColor() {
    const hue = 290+Math.random()*260;
    return "hsl("+hue+",100%,60%)";
}
