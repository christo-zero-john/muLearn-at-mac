
var accordion = document.getElementById("accordion");

fetch("https://opensheet.elk.sh/1ROUxDLf3nZ_gAJjjjcO5yRgeeRGgncSCGUgCxBWBWVo/faq")
.then(res => res.json())
.then((questions)=>{
    accordion.innerHTML = "";
    for(x in questions){
        accordion.innerHTML += `
            <div class="accordion-item">
                <h2 class="accordion-header" id="heading${x}">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${x}" aria-expanded="true" aria-controls="collapse${x}">
                    ${questions[x].question}
                </button>
                </h2>
                <div id="collapse${x}" class="accordion-collapse collapse show" aria-labelledby="heading${x}" data-bs-parent="#accordion">
                    <p class="accordion-body">
                        ${questions[x].answer}
                    </p>
                </div>
            </div>
        `
    }
})