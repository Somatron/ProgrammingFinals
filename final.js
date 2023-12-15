

if (yes == 0){ //old concept, type of variable special for having a differnet image for each page 

const image = new Image();
image.src = "images/Mediterranean-chicken-Small Medium Medium.png";
document.body.appendChild(image);
}
if (yes == 1) {
const image = new Image();
image.src = "images/Indian-Butter-Chicken-683x1024 Small.png";
document.body.appendChild(image);

} 

if (yes == 2) {
    const image = new Image();
    image.src = "images/soba-royalty-free-image-1621288461 Small.png";
    document.body.appendChild(image);
    
} 
if (yes == 3) {
    const image = new Image();
    image.src = "images/GettyImages-1178684940-scaled-e1647271049457 Small.png";
    document.body.appendChild(image);
    
} 
if (yes == 4) {
    const image = new Image();
    image.src = "images/south-american-food-23 Small.png";
    document.body.appendChild(image);
    
} 
if (yes == 5) {
    const image = new Image();
    image.src = "images/Spanish-Seafood-Paella Small.png";
    document.body.appendChild(image);
    
} 
if (yes == 6){
    
    let username = "";

    while(username == "" || username == null){ //while loop
        username = window.prompt("Enter your name");
    }
    document.getElementById("p1").innerHTML = "Hello " + username + ", welcome to the website!";

}

else {
    
}
