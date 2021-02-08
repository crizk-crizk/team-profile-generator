const fs = require("fs");
const createHTML = require("create-html");


// TODO: Create a function to generate cards based on how many engineers/interns user enters
function makeEmployeeCards(data) {
  const cards = {
    engineers: "",
    interns: "",
  };
  data.engineers.forEach((element) => {
    cards.engineers += `<!-- START Engineer Card -->
          <div class="col-lg-3 col-md-4 col-sm-3">
            <div
              class="shadow d-flex justify-content-center align-items-center p-3 bg-dark rounded-lg flex-column mb-3"
            >
              <div class="perrson-img">
                <img
                  src="team-imgs/profile-pic-placeholder.png"
                  class="img-fluid rounded-circle"
                  alt="profile shot"
                />
              </div>
              <div class="person-name my-2">
                <h3 class="text-white">${element.name}</h3>
              </div>
              <div class="info">
                <h6 class="text-white">Engineer</h6>
              </div>
              <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action list-group-item-dark">ID:&nbsp;${element.id}</a>
                <a href="mailto:${element.email}" class="list-group-item list-group-item-action list-group-item-dark"><i
                class="fas fa-envelope-square p-2"
                aria-hidden="true"
              ></i>${element.email}</a>
                <a href="http://github.com/${element.gitHub}" class="list-group-item list-group-item-action list-group-item-dark"><i class="fab fa-github p-2" aria-hidden="true"></i>${element.gitHub}</a>
              </div>
            </div>
          </div>
          <!-- END Engineer Card -->`;
  });
  data.interns.forEach((element) => {
    cards.interns += `<!-- START Intern Card -->
          <div class="col-lg-3 col-md-4 col-sm-3">
            <div
              class="shadow d-flex justify-content-center align-items-center p-3 bg-dark rounded-lg flex-column mb-3"
            >
              <div class="perrson-img">
                <img
                  src="team-imgs/profile-pic-placeholder.png"
                  class="img-fluid rounded-circle"
                  alt="profile shot"
                />
              </div>
              <div class="person-name my-2">
                <h3 class="text-white">${element.name}</h3>
              </div>
              <div class="info">
                <h6 class="text-white">Intern</h6>
              </div>
              <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action list-group-item-dark">ID:&nbsp;${element.id}</a>
                <a href="mailto:${element.email}" class="list-group-item list-group-item-action list-group-item-dark"><i
                class="fas fa-envelope-square p-2"
                aria-hidden="true"
              ></i>${element.email}</a>
                <a href="#" class="list-group-item list-group-item-action list-group-item-dark"><i class="fab fa-github p-2" aria-hidden="true"></i>School:&nbsp;${element.school}</a>
              </div>
            </div>
          </div>
          <!-- END Intern Card -->`;
  });
  return cards;
}

// TODO: Create a function to write HTML file
function generateHtml(data) {
  const cards = makeEmployeeCards(data);
  const html = createHTML({
    title: "Our Team",
    script: "index.js",
    head: `<meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- Bootstrap -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
      crossorigin="anonymous"
    />
    <!-- Font Awesome -->
    <script
      src="https://kit.fontawesome.com/b3b4c520a2.js"
      crossorigin="anonymous"
    ></script>
    <!-- CSS -->
    <link rel="stylesheet" type="text/css" href="style.css" />
    <style>
    body {
        background-color: rgb(164, 135, 169);
      }
      
      .social-icons > a {
        text-decoration: none;
      }
    </style>      
    <title>Professional Team</title>
    `,
    body: `<section class="container">
    <!-- 1 -->
    <div class="row">
      <!-- 2 -->
      <div class="col-ms-12">
        <!-- 3 -->
        <h1 class="text-white text-center my-5">Our Super Team</h1>
  
        <div class="row justify-content-center align-items-center">
          <!-- START #1 Card -->
          <div class="col-lg-3 col-md-4 col-sm-3">
            <div
              class="shadow d-flex justify-content-center align-items-center p-3 bg-dark rounded-lg flex-column mb-3"
            >
              <div class="person-img">
                <img
                  src="team-imgs/profile-pic-placeholder.png"
                  class="img-fluid rounded-circle"
                  alt="profile shot"
                />
              </div>
              <div class="person-name my-2">
                <h3 class="text-white">${data.manager.name}</h3>
              </div>
              <div class="info">
                <h6 class="text-white">Manager</h6>
              </div>
              <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action list-group-item-dark">ID:&nbsp;${
                  data.manager.id
                }</a>
                <a href="mailto:${
                  data.manager.email
                }" class="list-group-item list-group-item-action list-group-item-dark"><i
                class="fas fa-envelope-square p-2"
                aria-hidden="true"
              ></i>${data.manager.email}</a>
                <a href="#" class="list-group-item list-group-item-action list-group-item-dark">${
                  data.manager.officeNumber
                }</a>
              </div>
            </div>
          </div>
          <!-- END #1 Card -->
          ${cards.engineers}
          ${cards.interns}
        </div>
        <!--.row wrapping all cards -->
      </div>
      <!-- 3 col-ms-12-->
    </div>
    <!-- 2 .row-->
  </section>
  <!-- 1 .container-->
  
  <!-- Option 1: Bootstrap Bundle with Popper -->
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
    crossorigin="anonymous"
  ></script>
  `,
  });

  fs.writeFile("index.html", html, function (err) {
    if (err) console.log(err);
  });
}

module.exports = generateHtml;
