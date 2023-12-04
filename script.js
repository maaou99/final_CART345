

document.addEventListener('DOMContentLoaded', function () {
    const textOverTextarea = document.getElementById('text-over-textarea');
    const userTextArea = document.getElementById('userText');

     // Add an event listener to the textarea for input changes
     userTextArea.addEventListener('input', function () {
        adjustTextareaHeight();
    });

    // Initial adjustment when the page loads
    adjustTextareaHeight();
 

    // Add an event listener to the textarea
    userTextArea.addEventListener('click', function () {
        textOverTextarea.style.display = 'none';
    });
});

function shuffleText() {
    let userText = document.getElementById("userText").value;
    let words = userText.split(' ');
    for (let i = words.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [words[i], words[j]] = [words[j], words[i]];
    }
    document.getElementById("result").innerText = words.join(' ');
}

function reset() {
    let userText = document.getElementById("userText").value;
    let numWords = document.getElementById("numWords").value;

    let words = userText.split(' ');
    if (numWords >= words.length) {
        document.getElementById("result").innerText = "Error: Number of words to remove exceeds total words.";
        return;
    }



    document.getElementById("result").innerText = words.join(' ');
}

function removeWords(){
    document.getElementById('removeWords').style.visibility = 'visible'
    let userText = document.getElementById("userText").value;
    let numWords = document.getElementById("numWords").value;

    let words = userText.split(' ');
    for (let i = 0; i < numWords; i++) {
    const randomIndex = Math.floor(Math.random() * words.length);
    words.splice(randomIndex, 1);
    }

    document.getElementById("result").innerText = words.join(' ');


    document.getElementById('removeWords').style.visibility = 'hidden'

}

function samplePoem(){
    document.getElementById('result').innerHTML = `
    
    <p>The grave said to the rose:</p>
    <p>“With the tears that dawn sprinkles upon you</p>
    <p>What do you make, flower of love?”</p>
    <p>The rose said to the tomb:</p>
    <p>“What do you make of those who fall</p>
    <p>In your ever-open abyss?”</p>
    <br>
    <p>The rose said, “sombre tomb,</p>
    <p>From these tears I make in the shade</p>
    <p>A fragrance of amber and of honey.”</p>
    <p>The tomb said, “wistful flower,</p>
    <p>From each soul that arrives to me</p>
    <p>I make an angel in heaven.”</p>
    `
    document.getElementById('view-apropos').remove()
    document.getElementById('text-over-textarea').remove()
    document.getElementById('text-manipulation').style.visibility = 'visible'
    document.getElementById('userText').style.display = 'none'
     // Add hover effect to paragraphs inside the result div
     const paragraphs = document.getElementById('result').getElementsByTagName('p');
    
}

function adjustTextareaHeight() {
    const userTextArea = document.getElementById('userText');
    userTextArea.style.height = 'auto'; // Reset the height to auto to recalculate
    userTextArea.style.height = userTextArea.scrollHeight + 'px'; // Set the height based on content
}

function view(){
   let insertText = document.getElementById('userText').value 
   let resultDiv = document.getElementById('result');

   // Replace newline characters with <br> tags
   insertText = insertText.replace(/\n/g, '<br>');

   // Set innerHTML with the user's input text
    
   resultDiv.innerHTML = insertText;
   document.getElementById('view-apropos').remove()
   document.getElementById('text-manipulation').style.visibility = 'visible'
   document.getElementById('userText').style.display = 'none'
}

 
let movedLeft = false
let movedRight = false
function whiteSpace() {
    const resultDiv = document.getElementById('result');
    
    // Add hover effect to lines inside the result div
    const lines = resultDiv.innerHTML.split('<br>');
 
    resultDiv.innerHTML = lines.map(line => `<p onmouseenter="moveLeft(this)">${line}</p>`).join('');

    // Display the result div and hide other elements
    resultDiv.style.display = 'block';
    //document.getElementById('view-apropos').style.display = 'none';
    document.getElementById('text-manipulation').style.display = 'block';
    document.getElementById('userText').style.display = 'none';
}

// Move the line to the left when hovered
function moveLeft(element) {
    if (!movedLeft){
        let randomNumber = Math.floor(Math.random() * (100 - 20 + 1)) + 20;
        element.style.marginLeft = `${randomNumber}px`; // Adjust the value as needed
        movedLeft = true
        movedRight = false
        return
    }

    if(movedLeft && !movedRight){
        let randomNumber = Math.floor(Math.random() * (100 - 20 + 1)) + 20;
        element.style.marginLeft = `${randomNumber}px`;
        movedLeft = false
        movedRight = true
    }

}

function limitTextarea() {
    const textarea = document.getElementById('userText');
    const words = textarea.value.split(/\s+/).length;
    
    if (words > 850) {
       alert('text must be less than 500')
    }
}

