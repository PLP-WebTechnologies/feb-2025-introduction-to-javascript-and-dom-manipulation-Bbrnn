//Select the button and paragraph elements
const button = document.getElementById("changeTextButton");

const paragraph = document.getElementById("text");

//Add an event listener to the button
button.addEventListener("click", function() {
    // Change the paragraph text to the meaning of DOM
    paragraph.textContent = "DOM stands for Document Object Model. It is a programming interface for web documents. It represents the structure of a document as a tree of objects, allowing programming languages to manipulate the content, structure, and style of web pages.";
    // Change the button text to "Learn More"
    button.textContent = "You got it!";
    // Change the button color to blue
    button.style.backgroundColor = "blue";
});

//Event listener for the add text button
addTextButton.addEventListener("click", function() {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "This is a new paragraph added to the DOM.";
    document.body.appendChild(newParagraph);
    // Change the button text to "Added!"
    addTextButton.textContent = "Added!";
    // Change the button color to green 
    addTextButton.style.backgroundColor = "green";
});

//Event listener for the remove text button
removeTextButton.addEventListener("click", function() {
    const paragraphs = document.querySelectorAll("p");
    if (paragraphs.length > 0) {
        paragraphs[paragraphs.length - 1].remove();
    }
    // Change the button text to "Removed!"
    removeTextButton.textContent = "Removed!";
    // Change the button color to red
    removeTextButton.style.backgroundColor = "red";
});

//Image DOM manipulation
const image = document.getElementById("dynamicImage");
const changeImageButton = document.getElementById("changeImageButton");

// Add an event listener to the image
image.addEventListener("click", function () {
    // Change the image source
    image.src = "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png";
    // Change the alt text
    image.alt = "Placeholder Image";
    // Add a border to the image
    image.style.border = "2px solid black";
    // Resize the image
    image.style.width = "150px";
    image.style.height = "150px";
    // Update the button text
    changeImageButton.textContent = "Image Changed!";
});
