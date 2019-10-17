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








const cardATitle = document.querySelector(".card-contain-a h2");
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

