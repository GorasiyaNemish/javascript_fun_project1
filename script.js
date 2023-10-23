let rect = document.getElementById("rectangle");

function myFunction(e) {
    // console.log("hello");
    let clientX = parseInt(e.clientX);
    let rectLeft = parseInt(rect.getBoundingClientRect().left);
    let rectWidth = parseInt(rect.getBoundingClientRect().width);
    let position = clientX - rectLeft;
    // console.log(position);
    if (position<(rectWidth/2)) {
        // console.log("left");
        let redIntensity = gsap.utils.mapRange(0,rectWidth/2,255,0,position);
        gsap.to(rect,{
            background: `rgb(${redIntensity}, 0, 0)`,
        })
    }else {
        // console.log("right");
        let blueIntensity = gsap.utils.mapRange(rectWidth/2,rectWidth,0,255,position);
        gsap.to(rect,{
            background: `rgb(0, 0, ${blueIntensity})`
        })
    }
}
    