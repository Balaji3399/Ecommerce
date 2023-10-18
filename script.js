//Nav bar

fetch('nav.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_navbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
});

// footer
fetch('footer.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_footer");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
});


// Animation of AssuranceMART
const lst = ["AssuranceMART"];
const currentname = document.querySelector(".dynamic-names");
let currentindex = 0;
let char = 0;
let erase = false;

function displayNextCharacter() {
  if (currentindex < lst.length) {
    const currentword = lst[currentindex];
    if (!erase && char < currentword.length) {
      currentname.textContent +=  currentword[char] ;
      char++;
    } else if (erase && char >= 0) {
      currentname.textContent = currentword.substring(0, char);
      char--;
    } else {
      if (!erase) {
        erase = true;
      } else {
        currentindex++;
        if (currentindex >= lst.length) {
          currentindex = 0; 
        }
        char = 0;
        erase = false;
        setTimeout(displayNextCharacter, 1000);
      }
    }
  }
}
const interval = setInterval(displayNextCharacter, 200); 
document.addEventListener("DOMContentLoaded", function () {
  displayNextCharacter();
});


// side-bar functionality
function open_sidebar(){
  document.querySelector(".side-bar").style.display = "block" ;
  document.querySelector(".bar").style.display ="none"
}
function close_sidebar(){
  document.querySelector(".side-bar").style.display = "none" ;
  document.querySelector(".bar").style.display = "block" ;
}

function open_cart(){
  document.querySelector("#my-cart").style.display = "block" ;
}
function close_cart(){
  document.querySelector("#my-cart").style.display = "none" ;
}


//Pop up Box
document.addEventListener("DOMContentLoaded", function () {
  const productItems = document.querySelectorAll(".item");
  const popupContainers = document.querySelectorAll(".popup-container");

  productItems.forEach((item, index) => {
      item.addEventListener("click", function () {
          popupContainers[index].style.display = "flex";
      });

      const closePopupButton = popupContainers[index].querySelector(".close-popup");
      closePopupButton.addEventListener('click', function(event) {
          event.stopPropagation(); 
          popupContainers[index].style.display = "none";
      });
  });
});


// Cart Functionality

var buynow = document.querySelectorAll(".btn2");

let totalPrice = 0;


for (let i = 0; i < buynow.length; i++) {
  buynow[i].addEventListener('click', function (event) {
    const item = document.querySelectorAll(".item")[i];
    const priceElement = document.querySelectorAll(".price")[i];
    const price = parseFloat(priceElement.innerHTML);

    const image = item.querySelector("img");
    const name = item.querySelector("p");

    if (image && name) {
      const imageSrc = image.getAttribute("src");
      const nameText = name.textContent;
      addRow(imageSrc, nameText, price);

      // Update the total price
      totalPrice += price;

      // Display the total price wherever you need it
      updateTotalPrice(totalPrice);
    } else {
      console.log("Error");
    }
  });
}

function updateTotalPrice(total) {
  const totalPriceElement = document.querySelector("#total-price");
  if (totalPriceElement) {
    totalPriceElement.textContent = `Total: ${total.toFixed(2)}`;
  }
  total.style.color = 'green' ;
}


function addRow(imageSrc, nameText , price) {
  var table = document.getElementById("table-data");
  var row = table.insertRow(table.rows.length);
  console.log(table.rows.length);

  var imageCell = row.insertCell(0);
  var img = document.createElement("img");

  img.src = imageSrc;
  img.width = 70; 

  imageCell.appendChild(img);

  var nameCell = row.insertCell(1);
  nameCell.innerHTML = nameText;

  var deleteCell = row.insertCell(2);
  var deletebtn = document.createElement("button");
  deletebtn.textContent = "Delete";
  deletebtn.classList.add("delete");
  deletebtn.addEventListener('click', function () {
    deleteRow(this); 
  });
  deleteCell.appendChild(deletebtn);

  var priceCell = row.insertCell(3);
  priceCell.innerHTML = price ;
}

function deleteRow(obj) {
  var index = obj.parentNode.parentNode.rowIndex; 
  var table = document.getElementById("table-data"); 
  table.deleteRow(index);
}

document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function showSlide(n) {
      slides[currentSlide].style.display = 'none';
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].style.display = 'block';

  }

  function nextSlide() {
      showSlide(currentSlide + 1);
  }

  function prevSlide() {
      showSlide(currentSlide - 1);
  }

  document.querySelector('.next').addEventListener('click', nextSlide);
  document.querySelector('.prev').addEventListener('click', prevSlide);

  showSlide(currentSlide);

  const intervalId = setInterval(nextSlide,3000);

  document.querySelector('.next').addEventListener('click', function () {
      clearInterval(intervalId);
  });
  
  document.querySelector('.prev').addEventListener('click', function () {
      clearInterval(intervalId);
  });
});


















