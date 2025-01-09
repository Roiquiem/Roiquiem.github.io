const paragraph = document.getElementById('basicParagraph');
const originalText = paragraph.textContent;
const maxLength = 120; 

function wrapTextAtWordBoundaries(text, maxLength) {
    const words = text.split(' ');
    let line = '';
    let wrappedText = '';
  
    for (const word of words) {
      if (line.length + word.length <= maxLength) {
        line += word + ' ';
      } else {
        wrappedText += line.trim() + '<br>';
        line = word + ' '; 
      }
    }
  
    if (line.trim() !== '') {
      wrappedText += line.trim();
    }
  
    return wrappedText;
  }

// function wrapText() {
//     const originalText = paragraph.textContent;
//     let wrappedText = "";

//     for (let i = 0; i < originalText.length; i += maxLength) {
//         wrappedText += originalText.substring(i, i + maxLength) + "<br>";
//     }

//     paragraph.innerHTML = wrappedText;
// }

const wrappedText = wrapTextAtWordBoundaries(originalText, maxLength);
paragraph.innerHTML = wrappedText;

// window.addEventListener('load', wrapText);