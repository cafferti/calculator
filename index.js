let gphones = document.getElementById("phone");
let removelement = gphones.style.display;
function active(){
    let marginne = document.getElementById("nextG")
    let blur = document.getElementById("bgfade")
    if(gphones.style.display === removelement){
        gphones.style.display = "none"
        marginne.style.paddingTop = "25rem"
        blur.style.background= "linear-gradient(to bottom,hsl(233, 26%, 24%),hsl(0, 0%, 100%))"

    }
    else{gphones.style.display = removelement;
        marginne.style.paddingTop = "0rem"
        blur.style.background = ""
        blur.style.paddingBottom = "0rem"
    }

}
// let blur = Document.getElementById("bgfade");
// let addbg = blur.style.background;
// function active(){
//     if(blur.style.background === addbg){
//     blur.style.background = "linear-gradient(to right,hsl(136, 65%, 51%),hsl(192, 70%, 51%))"
//     }
// }
