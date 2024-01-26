// script.js
$(document).ready(function () {
    // Bootstrap initialization
    $('[data-toggle="modal"]').on('mouseenter', function () {
        $(this).modal('show');
    });

    // Card rotation effect
    $('.card-inner').on('mouseenter', function () {
        $(this).find('.card-front, .card-back').addClass('rotate');
    }).on('mouseleave', function () {
        $(this).find('.card-front, .card-back').removeClass('rotate');
    });

    // Add your Custom JavaScript code here
});

var execomDiv = document.getElementById("execomDiv");


var spreadsheet_id = '1ROUxDLf3nZ_gAJjjjcO5yRgeeRGgncSCGUgCxBWBWVo'; //mulearn data google spreadsheet id

fetch(`https://opensheet.elk.sh/${spreadsheet_id}/execom`)
    .then(res => res.json())
    .then((data) => {
        printExecom(data);
    })

function printExecom(data){
    console.log(data);

    execomDiv.innerHTML = "";
    for(x=0; x<2; x++){
        execomDiv.innerHTML += `
        <div class="col-11 mx-auto col-md-3 mx-md-2 mt-3">
        <div class="card">
            <div class="card-inner">
                <div class="card-front">
                    <img src="${data[x].image}" class="card-img-top" alt="${data[x].title}">
                    <p class="title pt-2 fs-4 text-danger text-center">${data[x].title}</p>
                </div>
                <div class="card-back">
                    <p class="title pt-2 text-center text-greenyellow fs-3">${data[x].title}</p>
                    <p class="card-text name fs-5 text-info fs-5">${data[x].name}</p>
                    <p class="description">
                    ${data[x].description}
                    </p>
                    <div class="social-icons text-nowrap text-center">
                    
                        <a href="https://www.github.com/in/${data[x].mulearn}"><img src="/assets/img/mulearn.png" alt="MuLearn" class="socialIcon btn col-3 m-0"></a>
                        <a href="https://www.linkedin.com/in/${data[x].linkedin}"><img src="/assets/img/linkedin.png" alt="LinkedIn" class="socialIcon btn col-3 m-0"></a>
                        <a href="https://www.github.com/in/${data[x].github}"><img src="/assets/img/github.png" alt="GitHub" class="socialIcon btn col-3 m-0"></a>
                        <a href="https://www.instagram.com/${data[x].instagram}/"><img src="/assets/img/instagram.png" alt="Instagram" class="socialIcon btn col-3 m-0"></a>
                    </div>
                </div>
            </div>
        </div>
    `
    }

    for(x=2; x<data.length; x++){
        execomDiv.innerHTML += `
        <div class="col-11 mx-auto col-md-3 mx-md-2 mt-3">
        <div class="card">
            <div class="card-inner">
                <div class="card-front">
                    <img src="${data[x].image}" class="card-img-top" alt="${data[x].title}">
                    <p class="title pt-2 fs-4 text-danger text-center">${data[x].title}</p>
                </div>
                <div class="card-back">
                    <p class="title pt-2 text-center text-greenyellow fs-3">${data[x].title}</p>
                    <p class="card-text name fs-5 text-info fs-5">${data[x].name}</p>
                    <p class="description">
                    ${data[x].description}
                    </p>
                    <div class="social-icons text-nowrap text-center">
                    
                        <a href="https://www.github.com/in/${data[x].mulearn}"><img src="/assets/img/mulearn.png" alt="MuLearn" class="socialIcon btn col-3 m-0"></a>
                        <a href="https://www.linkedin.com/in/${data[x].linkedin}"><img src="/assets/img/linkedin.png" alt="LinkedIn" class="socialIcon btn col-3 m-0"></a>
                        <a href="https://www.github.com/in/${data[x].github}"><img src="/assets/img/github.png" alt="GitHub" class="socialIcon btn col-3 m-0"></a>
                        <a href="https://www.instagram.com/${data[x].instagram}/"><img src="/assets/img/instagram.png" alt="Instagram" class="socialIcon btn col-3 m-0"></a>
                    </div>
                </div>
            </div>
        </div>
    `
    }
}