// content script is the code that executes after website has finished loading.
// matches in content_script tells extenstion on which urls to run you can also
// use wild cards to modify
// We can have multiple content

console.log("Chrome extension ready to go ? ");

let paragraphs = document.getElementsByTagName("p");

// Changes the background color of all paragraphs on a page.
for (elt of paragraphs) {
  elt.style["background-color"] = "#FF00FF";
}
