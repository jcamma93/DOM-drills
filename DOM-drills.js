
document.addEventListener("DOMContentLoaded", function () {
    let div = document.createElement("div"); 
    div.className = "header-container"; 
    document.body.appendChild(div); 

    let h1 = document.createElement("h1"); 
    let h1Txt = document.createTextNode("This is an h1!");
    h1.appendChild(h1Txt);
    h1.className = "h1";
    div.appendChild(h1);

    let h2 = document.createElement("h2");
    let h2Txt = document.createTextNode("This is an h2!");  
    h2.appendChild(h2Txt);
    h2.className = "h2";
    div.appendChild(h2);

    let h3 = document.createElement("h3");
    let h3Txt = document.createTextNode("This is an h3!");
    h3.appendChild(h3Txt); 
    h3.className = "h3";
    div.appendChild(h3);

    let h4 = document.createElement("h4");
    let h4Txt = document.createTextNode("This is an h4!");
    h4.appendChild(h4Txt);
    h4.className = "h4"; 
    div.appendChild(h4);

    let h5 = document.createElement("h5");
    let h5Txt = document.createTextNode("This is an h5!");
    h5.appendChild(h5Txt);
    h5.className = "h5";
    div.appendChild(h5); 

    let h6 = document.createElement("h6");
    let h6Txt = document.createTextNode("This is an h6!");
    h6.appendChild(h6Txt);
    h6.className = "h6";
    div.appendChild(h6);

    let myColors = [
        "0x000000",
        "0x0000ff",
        "0xff0000",
        "0x7a7a7a",
        "0x00ffff",
        "0xffd700",
        "0x4b0082",
        "0xffffff"
    ];

    function getRandomColor() {

        let randomColor = myColors[Math.floor(Math.random() * myColors.length)];
        return randomColor;
    }

    let ul = document.createElement("ul"); 
    div.appendChild(ul); 

    //I could not figure out how to properly proceed from here; I was having difficulty getting my button to operate effectively.//


})