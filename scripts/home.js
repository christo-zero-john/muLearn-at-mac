
// Function to smoothly increment numbers
function animateNumbers(target, elementId) {
    let start = 0;
    let duration = 3000; // Animation duration in milliseconds
    let increment = target / (duration / 16); // Adjust the increment for smooth animation
  
    function updateCount() {
        start += increment;
        const roundedValue = Math.round(start);
        document.getElementById(elementId).innerText = roundedValue + '+';
  
        if (start < target) {
            requestAnimationFrame(updateCount);
        } else {
            document.getElementById(elementId).innerText = target + '+';
        }
    }
    updateCount();
}

// Initial update with animations
animateNumbers(100, 'registeredCount');
animateNumbers(80, 'activeCount');
animateNumbers(185000, 'karmaCount');
animateNumbers(1, 'enablersCount');
    
// Function to close all answers
function closeAllAnswers() {
    const allAnswers = document.querySelectorAll('.answer');
    allAnswers.forEach(answer => {
      answer.style.display = 'none';
    });
  }
  
  // Function to toggle the visibility of the answer
  function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    
    // If the answer is already open, close it
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      // Close all other answers
      closeAllAnswers();
      // Open the clicked answer
      answer.style.display = 'block';
    }
  }
  
  // Attach click event to all FAQ items
  document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item h3');
    faqItems.forEach(item => {
      item.addEventListener('click', function () {
        toggleAnswer(this);
      });
    });
  });
  
  
  
