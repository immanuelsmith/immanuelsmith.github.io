var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("img1");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src.replace('-s','');
  captionText.innerHTML = this.alt;
}
var img2 = document.getElementById("img2");
if(img2 != null){img2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src.replace('-s','');
  captionText.innerHTML = this.alt;
}}
var img3 = document.getElementById("img3");
if(img3 != null){img3.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src.replace('-s','');
  captionText.innerHTML = this.alt;
}}

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closebtn")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

modal.onclick = function() { 
    if(event.target === event.currentTarget){
  modal.style.display = "none";
}}

document.addEventListener('keyup', (event) => {
  // Alert the key name and key code on keydown
  if (event.key === 'Escape') {
     modal.style.display = "none"; 
  }
}, false);