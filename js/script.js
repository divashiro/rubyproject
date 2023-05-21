var previous = null
var prevImg = null



function showButton() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function displayInfo(id, img) {
    var x = document.getElementById(id);
    if (x.style.display === "none" || x.style.display == "") {
        x.style.display = "block";
        img.style.opacity = "1";
        if (previous != null && previous !== x){
            previous.style.display = "none";
            prevImg.style.opacity = ".5";
            prevImg = img
            previous = x
        } else{
            previous = x
            prevImg = img
        }
    } else {
        x.style.display = "none";
        img.style.opacity = ".5";
    }
}