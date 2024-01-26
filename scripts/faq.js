
var accordion = document.getElementById("accordion");

fetch("https://opensheet.elk.sh/1ROUxDLf3nZ_gAJjjjcO5yRgeeRGgncSCGUgCxBWBWVo/faq")
.then(res => res.json())
.then((questions)=>{
    accordion.innerHTML = "";
    for(x in questions){
        accordion.innerHTML += `
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    ${questions[x].question}
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion">
                    <p class="accordion-body">
                        ${questions[x].answer}
                    </p>
                </div>
            </div>
        `
    }
})