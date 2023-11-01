const terms = [
    "Marketing",
    "Video Editing",
    "Web Development",
    "Account Managment",
    "Graphic Designing",
    "SEO",
    "Content Creation",
];

const animatedText = document.getElementById('animated-text');
const cursor = document.getElementById('cursor');
let termIndex = 0;
let charIndex = 0;
let isTyping = true;

function animateText() {
    const term = terms[termIndex];
    const currentText = term.substring(0, charIndex);
    animatedText.textContent = currentText;

    if (isTyping) {
        cursor.style.visibility = 'visible';
    } else {
        cursor.style.visibility = 'hidden';
    }

    if (isTyping) {
        if (charIndex < term.length) {
            charIndex++;
            setTimeout(animateText, 50); // Typing: 0.05 seconds delay
        } else {
            isTyping = false;
            setTimeout(animateText, 1500); // Wait for 1.5 seconds after typing
        }
    } else {
        if (charIndex >= 0) {
            cursor.style.visibility = 'visible'; // Show the cursor while backspacing
            charIndex--;
            setTimeout(animateText, 50); // Backspacing: 0.05 seconds delay
        } else {
            cursor.style.visibility = 'hidden'; // Hide the cursor when backspace is complete
            isTyping = true;
            termIndex = (termIndex + 1) % terms.length;
            setTimeout(animateText, 50); // Typing: 0.05 seconds delay
        }
    }
}

animateText(); // Start the animation