import './style.css'

let apiKey = `AIzaSyAKsZNo47SxzAmtqUE-CFJu9oPFVKvrG-A`;
async function getFont(apiKey) {
  console.log(apiKey);
  const URL = `https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}&sort=popularity`;
  const resp = await fetch(`${URL}`);
  const responseJson = await resp.json();
  console.log(responseJson);
  
  const data = responseJson.items;
  for (let i = 0; i < 50; i++) {
     //create div for each card 
     let div = document.getElementById("list");
     let columndiv = document.createElement("li");
     columndiv.id = "popularResults";
     columndiv = document.createElement("a");
     columndiv.href = "/fontdetails.html"
     columndiv.textContent = `${responseJson.items[i].family}`;
    
// columndiv.onclick= "/fontdetails.html"
    //  let fontLink = document.createElement("a");
    //  fontLink.href = "/fontdetails.html";

    div.appendChild(columndiv);
     //columndiv.style.objectFit = "scale-down";
 // card.appendChild(moviePoster);

 //getting the name of the font for the font details pagw 
//  let fontHeader = document.getElementById("fontname");
//  fontHeader.textContent = `${responseJson.items[i].family}`

}

}
getFont(apiKey);