/*
<!-- components -->
<script src="/scripts/components.js"></script>
<link rel="stylesheet" href="/styles/components.css"></link>

*/

document.getElementById("navBar").innerHTML  = `
<div class="navContainer bg-orange py-1 ">
<nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
        <a class="mx-1 navbar-brand en-mulearn" href="/index.html">μLEARN</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0 ">

              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/index.html">Home</a>
              </li>
              
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/p/joinus.html">Join Us</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/p/muGuide.html">Getting Started</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/p/tasks.html">All Tasks</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="https://learn.mulearn.org/">Interest Groups</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/p/execom.html">Execom</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/p/ranks.html">Leaderboard</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/p/e/events.html">Events</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/p/faq.html">FAQ</a>
              </li>

            </ul>
        </div>
    </div>
</nav>
</div>
`

document.getElementById("Footer").innerHTML = `
    <!-- Footer -->
    <footer class="w-100 text-center text-white">
    <div class="container p-4">
    </div>
    <div class="text-center p-3 bg-dark" >
        <p class="alert alert-light px-1">
              <a class="btn btn-light  border-0 btn-floating m-1 instagram" href="https://www.instagram.com/mulearn.mac" role="button"  style="
              background: url(/assets/img/index/instagram.png);
              background-size: contain;
              background-position: center;
              width: 30px;
              height: 30px;
              "></a>
              Developed and Managed By,
              <span class="en-iceberg text-violet">
              Team <span class="en-mulearn">μLearn</span> @ MAC
              </span>  
        </p>
        <p class=" small text-center mt-2">
          <a href="https://mulearn.org/termsandconditions" class="text-decoration-none text-info">Terms And Conditions</a>
        <span class="px-1">|</span>
          <a href="https://mulearn.org/privacypolicy" class="text-decoration-none link-greenyellow">Privacy Policy</a>
    </p>
    </div>
    
    </footer>
    <!-- Footer -->
`
