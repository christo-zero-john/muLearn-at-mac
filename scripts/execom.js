// script.js
$(document).ready(function () {
  // Bootstrap initialization
  $('[data-toggle="modal"]').on("mouseenter", function () {
    $(this).modal("show");
  });

  // Card rotation effect
  $(".card-inner")
    .on("mouseenter", function () {
      $(this).find(".card-front, .card-back").addClass("rotate");
    })
    .on("mouseleave", function () {
      $(this).find(".card-front, .card-back").removeClass("rotate");
    });

  // Add your Custom JavaScript code here
});

var execomDiv = document.getElementById("execomDiv");

var spreadsheet_id = "1ROUxDLf3nZ_gAJjjjcO5yRgeeRGgncSCGUgCxBWBWVo"; //mulearn data google spreadsheet id

fetch(`https://opensheet.elk.sh/${spreadsheet_id}/execom`)
  .then((res) => res.json())
  .then((data) => {
    printExecom(data);
  });

function printExecom(data) {
  console.log(data);

  execomDiv.innerHTML = "";
  // for(x=0; x<2; x++){
  //     execomDiv.innerHTML += `
  //     <div class="col-11 mx-auto col-md-3 mx-md-2 mt-3">
  //     <div class="card">
  //         <div class="card-inner">
  //             <div class="card-front">
  //                 <img src="${data[x].image}" class="card-img-top" alt="${data[x].title}">
  //                 <p class="title pt-2 fs-4 text-danger text-center">${data[x].title}</p>
  //             </div>
  //             <div class="card-back">
  //                 <p class="title pt-2 text-center text-greenyellow fs-3">${data[x].title}</p>
  //                 <p class="card-text name fs-5 text-info fs-5">${data[x].name}</p>
  //                 <p class="description">
  //                 ${data[x].description}
  //                 </p>
  //                 <div class="social-icons text-nowrap text-center">

  //                     <a href="https://www.github.com/in/${data[x].mulearn}"><img src="/assets/img/mulearn.png" alt="MuLearn" class="socialIcon btn col-3 m-0"></a>
  //                     <a href="https://www.linkedin.com/in/${data[x].linkedin}"><img src="/assets/img/linkedin.png" alt="LinkedIn" class="socialIcon btn col-3 m-0"></a>
  //                     <a href="https://www.github.com/in/${data[x].github}"><img src="/assets/img/github.png" alt="GitHub" class="socialIcon btn col-3 m-0"></a>
  //                     <a href="https://www.instagram.com/${data[x].instagram}/"><img src="/assets/img/instagram.png" alt="Instagram" class="socialIcon btn col-3 m-0"></a>
  //                 </div>
  //             </div>
  //         </div>
  //     </div>
  // `
  // }

  for (x = 0; x < data.length; x++) {
    if (data[x].status == "active") {
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
                        <a href="https://app.mulearn.org/profile/${data[x].muid}"><img src="/assets/img/mulearn.png" alt="MuLearn" class="socialIcon btn col-3 m-0"></a>
                        <a href="https://www.linkedin.com/in/${data[x].linkedin}"><img src="/assets/img/linkedin.png" alt="LinkedIn" class="socialIcon btn col-3 m-0"></a>
                        <a href="https://www.github.com/in/${data[x].github}"><img src="/assets/img/github.png" alt="GitHub" class="socialIcon btn col-3 m-0"></a>
                        <a href="https://www.instagram.com/${data[x].instagram}/"><img src="/assets/img/instagram.png" alt="Instagram" class="socialIcon btn col-3 m-0"></a>
                    </div>
                </div>
            </div>
        </div>
    `;
    }

    else{
        execomDiv.innerHTML += `
        <div class="col-11 mx-auto col-md-4 mx-md-2 mt-3">
        <div class="card">
            <div class="card-inner">
                <div class="card-front">
                    <img src="/assets/img/coreTeam/open-position.jpg" class="card-img-top" alt="${data[x].title}">
                    <p class="title pt-2 fs-4 text-danger text-center">${data[x].title}</p>
                </div>
                <div class="card-back">
                    <p class="title pt-2 text-center text-greenyellow fs-3">${data[x].title}</p>
                    <p class="card-text name fs-5 text-info fs-5">We are missing a ${data[x].title}</p>
                    <p class="empty-role-description">
                        We are looking for ${data[x].title} to join our execom team. If you are interested contact us via mail, whatsapp or instagram. Dedication towards the community and a mindset to carry out the role is all we ask for. If you think you are not qualified cos you dont know what or how to carry out the role, then that is not a problem. As long as you are ready to learn the skillset, anyone could master anything easily. So without hesitation contact us now. We will help you get on the right track even if you are lacking the skills.
                    </p>
                    <div class="social-icons text-nowrap text-center">                    
                        <a href="mailto:mulearn@mac.edu.in?subject=Application to join MAC execom team as a ${data[x].title}&body=Hi, My name is <YOUR NAME HERE> and I am a <YOUR DEPARTMENT OR COURSE> student at Mar Augusthinose College Ramapuram. I am mailing you to express my interest in joining our campus chapter Execom team as a ${data[x].title}. My contact information is: <YOUR PHONE NUMBER, NAME, AND CLASS>. <Optional: Tell us about yourself>"><img src="/assets/img/mail.png" alt="MuLearn" class="socialIcon btn col-3 m-0"></a>
                        <a href="https://wa.me/+919495806285?text=Hi, My name is <YOUR NAME HERE> and I am a <YOUR DEPARTMENT OR COURSE> student at Mar Augusthinose College Ramapuram. I am contacting you to express my interest in joining our campus chapter Execom team as a ${data[x].title}. My contact information is: <YOUR MAIL ID, NAME, AND CLASS>. <Optional: Tell us about yourself>"><img src="/assets/img/whatsapp.svg" alt="whatsapp" class="socialIcon btn col-3 m-0"></a>
                        <a href="https://www.instagram.com/mulearn.mac/"><img src="/assets/img/instagram.png" alt="Instagram" class="socialIcon btn col-3 m-0"></a>
                    </div>
                </div>
            </div>
        </div>
    `
    }
  }
}
