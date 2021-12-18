/* You can only have one Background file and this will 
keep running in background listeaning for stuff. */
console.log("Background is running");
/* This will call function buttinClicked when we click 
on extenstion button in browser menu */
chrome.action.onClicked.addListener(buttonClicked);

// fuction that will be called.
function buttonClicked() {
  console.log("Button Clicked");
}
