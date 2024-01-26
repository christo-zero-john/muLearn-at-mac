
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
  
function printFaq()
{
    var accordion = document.getElementById('accordion');
    fetch("https://opensheet.elk.sh/1ROUxDLf3nZ_gAJjjjcO5yRgeeRGgncSCGUgCxBWBWVo/faq")
    .then(res => res.json())
    .then((questions)=>{
      console.log(questions);
      accordion.innerHTML = "";
      for(x in questions)
      {
          if(questions[x].priority == 1)
          {
            accordion.innerHTML += `
              <div class="accordion-item">
              <h2 class="accordion-header" id="flush-heading${x}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${x}" aria-expanded="false" aria-controls="flush-collapse${x}">
                ${questions[x].question}
                </button>
              </h2>
              <div id="flush-collapse${x}" class="accordion-collapse collapse" aria-labelledby="flush-heading${x}" data-bs-parent="#accordion">
                <div class="accordion-body">
                  ${questions[x].answer}
                </div>
              </div>
            </div>
          `
          }
      }
      accordion.innerHTML += `
          <div class="d-md-none sticky-bottom accordion-item">
          <h2 class="accordion-header" id="flush-headingX">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseX" aria-expanded="false" aria-controls="flush-collapseX">
              Ask your Doubts
            </button>
          </h2>
          <div id="flush-collapseX" class="accordion-collapse collapse" aria-labelledby="flush-headingX" data-bs-parent="#accordion">
            <div class="accordion-body" >
                <form method="post" action="" class="w-fit mx-auto FormBody" >      
                    <textarea name="entry.1418484372" class="d-block my-2"  name="" id="faqFormSmall" cols="30" rows="3" placeholder="Enter your question / doubt" ></textarea>
                    <button type="button" class="btn btn-primary d-block mx-auto col-5" onclick="submitFaq(document.getElementById('faqFormSmall').value); document.getElementById('faqFormLarge').value = ''">Submit</button>
                </form>
            </div>
          </div>
        </div>
      `
    })
}

printFaq();

const store = new SteinStore("https://api.steinhq.com/v1/storages/6576ec2ac5ad5604ce331408");
function submitFaq(question)
{
  var faqForm = document.getElementsByClassName("FormBody");
  console.log(faqForm);
  // store.append("faq",[{
  //   question: question,
  //   answer:"",
  //   askedBy:"anonymous",
  //   priority:0
  // }])
  // .then(res => {
  //   console.log(res);
  // });
}
  
  
