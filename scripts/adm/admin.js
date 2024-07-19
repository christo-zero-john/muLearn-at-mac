let adminKey = localStorage.getItem("admin");

if (!adminKey) {
  redirect();
} else {
  fetchAdminKeys();
}

function redirect() {
  window.location.href = "/p/adm/admin-login.html";
}

function fetchAdminKeys() {
  fetch(
    `https://opensheet.elk.sh/1ROUxDLf3nZ_gAJjjjcO5yRgeeRGgncSCGUgCxBWBWVo/execom`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let flag = 0;
      for (x in data) {
        if (data[x].admCreds == adminKey) {
          console.log(`Logged in as admin. Welcome ${data[x].title}`);
             flag = mx_bilerp_1;
        }
      }
      if(flag = 0){
        redirect();
      }
    });
}
