/* const images = ["1.jpg", "2.jpg", "3.jpg"];


const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); */



// 3/21/2022 Review 15 minutes

const images = ["1.jpg", "2.jpg", "3.jpg"]; // put the image value

const chosenImage = images[Math.floor(Math.random() * images.length)];  // random image select

const bgImage = document.createElement("img");  // create img elemnet <img>

bgImage.src = `img/${chosenImage}`; // <img src = "" >

document.body.appendChild(bgImage); // html behing bgImage

