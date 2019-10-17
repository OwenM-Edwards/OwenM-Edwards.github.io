const copyToClipboard = str => {
    const el = document.createElement('textarea');  // Create a <textarea> element
    el.value = str;                                 // Set its value to the string that you want copied
    el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
    el.style.position = 'absolute';                 
    el.style.left = '-9999px';                      // Move outside the screen to make it invisible
    document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
    const selected =            
      document.getSelection().rangeCount > 0        // Check if there is any content selected previously
        ? document.getSelection().getRangeAt(0)     // Store selection if found
        : false;                                    // Mark as false to know no selection existed before
    el.select();                                    // Select the <textarea> content
    document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
    document.body.removeChild(el);                  // Remove the <textarea> element
    if (selected) {                                 // If a selection existed before copying
      document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
      document.getSelection().addRange(selected);   // Restore the original selection
    }
};

// Changes text upon to indicate it has been copied
const emailLink = document.querySelectorAll("#navEmail");
for(var i=0;i<emailLink.length;i++){
    emailLink[i].addEventListener("click", function() {
        copyToClipboard("owenhedwards@gmail.com");
        document.getElementById("toolTipText").innerHTML = "Email address has been copied to your clipboard.";
    })
}

// Changes text back to default when user moves mouse away
for(var i=0;i<emailLink.length;i++){
    emailLink[i].addEventListener("mouseout", function() {
        document.getElementById("toolTipText").innerHTML = "Click to copy address to clipboard.";
    })
}


const upArrow = document.getElementById("arrowCircle");
  // When the user clicks on the button, scroll to the top of the document
topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 



// onmouseover="style.transform = 'translate(-30%, 0)'" onmouseout="style.transform = 'translate(-130%, 0)'"

const cardADetails = document.querySelector(".cardADetails");
const cardAArrow1 = document.querySelector(".cardADetails .fa-chevron-right");
const cardAArrow2 = document.querySelector(".cardADetails .fa-chevron-left");
const cardA = document.querySelector("#card-a");
const cardATitle = document.querySelector(".card-contain-a h2");

const cardBDetails = document.querySelector(".cardBDetails");
const cardBArrow1 = document.querySelector(".cardBDetails .fa-chevron-left");
const cardBArrow2 = document.querySelector(".cardBDetails .fa-chevron-right");
const cardB = document.querySelector("#card-b");

const cardCDetails = document.querySelector(".cardCDetails");
const cardCArrow1 = document.querySelector(".cardCDetails .fa-chevron-right");
const cardCArrow2 = document.querySelector(".cardCDetails .fa-chevron-left");
const cardC = document.querySelector("#card-c");

const cardDDetails = document.querySelector(".cardDDetails");
const cardDArrow1 = document.querySelector(".cardDDetails .fa-chevron-left");
const cardDArrow2 = document.querySelector(".cardDDetails .fa-chevron-right");
const cardD = document.querySelector("#card-d");


cardA.addEventListener("mouseover", function(){
    cardADetails.classList.remove("left-details-hidden");
    cardADetails.classList.add("left-details-tab");
})
cardA.addEventListener("mouseout", function(){
    cardADetails.classList.remove("left-details-tab");
    cardADetails.classList.add("left-details-hidden");
})
cardAArrow1.addEventListener("click", function(){
    cardADetails.classList.remove("left-details-tab");
    cardADetails.classList.add("left-details-full");
    cardAArrow1.style.display = "none";
    cardAArrow2.style.display = "block";
})
cardAArrow2.addEventListener("click", function(){
    cardADetails.classList.remove("left-details-full");
    cardADetails.classList.add("left-details-tab");
    cardAArrow1.style.display = "block";
    cardAArrow2.style.display = "none";
})

cardB.addEventListener("mouseover", function(){
    cardBDetails.classList.remove("right-details-hidden");
    cardBDetails.classList.add("right-details-tab");
})
cardB.addEventListener("mouseout", function(){
    cardBDetails.classList.remove("right-details-tab");
    cardBDetails.classList.add("right-details-hidden");
})
cardBArrow1.addEventListener("click", function(){
    cardBDetails.classList.remove("right-details-tab");
    cardBDetails.classList.add("right-details-full");
    cardBArrow1.style.display = "none";
    cardBArrow2.style.display = "block";
})
cardBArrow2.addEventListener("click", function(){
    cardBDetails.classList.remove("right-details-full");
    cardBDetails.classList.add("right-details-tab");
    cardBArrow1.style.display = "block";
    cardBArrow2.style.display = "none";
})

cardC.addEventListener("mouseover", function(){
    cardCDetails.classList.remove("left-details-hidden");
    cardCDetails.classList.add("left-details-tab");
})
cardC.addEventListener("mouseout", function(){
    cardCDetails.classList.remove("left-details-tab");
    cardCDetails.classList.add("left-details-hidden");
})
cardCArrow1.addEventListener("click", function(){
    cardCDetails.classList.remove("left-details-tab");
    cardCDetails.classList.add("left-details-full");
    cardCArrow1.style.display = "none";
    cardCArrow2.style.display = "block";
})
cardCArrow2.addEventListener("click", function(){
    cardCDetails.classList.remove("left-details-full");
    cardCDetails.classList.add("left-details-tab");
    cardCArrow1.style.display = "block";
    cardCArrow2.style.display = "none";
})


cardD.addEventListener("mouseover", function(){
    cardDDetails.classList.remove("right-details-hidden");
    cardDDetails.classList.add("right-details-tab");
})
cardD.addEventListener("mouseout", function(){
    cardDDetails.classList.remove("right-details-tab");
    cardDDetails.classList.add("right-details-hidden");
})
cardDArrow1.addEventListener("click", function(){
    cardDDetails.classList.remove("right-details-tab");
    cardDDetails.classList.add("right-details-full");
    cardDArrow1.style.display = "none";
    cardDArrow2.style.display = "block";
})
cardDArrow2.addEventListener("click", function(){
    cardDDetails.classList.remove("right-details-full");
    cardDDetails.classList.add("right-details-tab");
    cardDArrow1.style.display = "block";
    cardDArrow2.style.display = "none";
})







fadeCardA = () => {
    cardATitle.style.color = "rgb(253, 186, 0)";
}
unFadeCardA = () => {
    cardATitle.style.color = "#fbfbfb";
}

const cardBTitle = document.querySelector(".card-contain-b h2");
fadeCardB = () => {
    cardBTitle.style.color = "rgb(253, 186, 0)";
}
unFadeCardB = () => {
    cardBTitle.style.color = "#fbfbfb";
}

const cardCTitle = document.querySelector(".card-contain-c h2");
fadeCardC = () => {
    cardCTitle.style.color = "rgb(253, 186, 0)";
}
unFadeCardC = () => {
    cardCTitle.style.color = "#fbfbfb";
}

const cardDTitle = document.querySelector(".card-contain-d h2");
fadeCardD = () => {
    cardDTitle.style.color = "rgb(253, 186, 0)";
}
unFadeCardD = () => {
    cardDTitle.style.color = "#fbfbfb";
}

