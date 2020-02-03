
// COPY TO CLIPBOARD STUFF
const copyToClipboard = str => {
    const el = document.createElement('textarea');  
    el.value = str;                                 
    el.setAttribute('readonly', '');                
    el.style.position = 'absolute';                 
    el.style.left = '-9999px';                      
    document.body.appendChild(el);                  
    const selected =            
      document.getSelection().rangeCount > 0        
        ? document.getSelection().getRangeAt(0)    
        : false;                                   
    el.select();                                    
    document.execCommand('copy');                   
    document.body.removeChild(el);                  
    if (selected) {                                 
      document.getSelection().removeAllRanges();   
      document.getSelection().addRange(selected);   
    }
};

// Changes text upon click to indicate it has been copied
const emailLink = document.querySelectorAll("#navEmail");
const emailToolTipText = document.querySelectorAll("#toolTipText")
for(var i=0;i<emailLink.length;i++){
    emailLink[i].addEventListener("click", function() {
        copyToClipboard("owenhedwards@gmail.com");
        document.querySelectorAll(".tooltiptext")[0].innerHTML = "Email address has been copied to your clipboard.";
        document.querySelectorAll(".tooltiptext")[1].innerHTML = "Email address has been copied to your clipboard.";
    })
}
// Changes text back to default when user moves mouse away
for(var i=0;i<emailLink.length;i++){
    emailLink[i].addEventListener("mouseout", function() {

        document.querySelectorAll(".tooltiptext")[0].innerHTML = "Click to copy address to clipboard.";
        document.querySelectorAll(".tooltiptext")[1].innerHTML = "Click to copy address to clipboard.";
    })
}
// COPY TO CLIPBOARD STUFF


// SCROLL TO TOP BUTTON
const upArrow = document.getElementById("arrowCircle");
  // When the user clicks on the button, scroll to the top of the document
topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 
// SCROLL TO TOP BUTTON
