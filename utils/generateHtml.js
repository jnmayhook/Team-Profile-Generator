// TODO: Create a function to generate markdown for README


function managerCard(manager) {
    return `<div class="col">
    <div id="manager" class="card card-cover h-100 overflow-hidden text-white rounded-4 shadow-lg">
      <div class="card-header bg-dark bg-gradient">
        <h2 class="display-6 pt-3 lh-1 fw-bold name">${manager.name}</h2>
        <h3 class="display-6 lh-1 fw-bold title">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-cup icon" viewBox="0 0 16 16">
            <path d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8zM13 2H2v10.5A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5V2z" />
          </svg>Manager
        </h3>
      </div>
      <div class="card-body bg-light bg-gradient text-dark">
        <ul class="d-flex flex-column bg-white list-unstyled">
          <li class="id tp">
            <span class="key">ID:</span> ${manager.id}
          </li>
          <li class="email md">
            <span class="key">Email:</span> <a href="mailto:${manager.email}">${manager.email}</a>
          </li>
          <li class="office-number btm">
            <span class="key">Office number:</span> ${manager.officeNumber}
          </li>
        </ul>
      </div>
    </div>
  </div>`
}

function engineerCard(engineer) {
    return `<div class="col">
    <div id="engineer" class="card card-cover h-100 overflow-hidden text-white rounded-4 shadow-lg">
      <div class="card-header bg-dark bg-gradient">
        <h2 class="display-6 pt-3 lh-1 fw-bold name">${engineer.name}</h2>
        <h3 class="display-6 lh-1 fw-bold title">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-eyeglasses" viewBox="0 0 16 16">
            <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
          </svg>Engineer
        </h3>
      </div>
      <div class="card-body bg-light bg-gradient text-dark">
        <ul class="d-flex flex-column bg-white list-unstyled">
          <li class="id tp">
            <span class="key">ID:</span> ${engineer.id}
          </li>
          <li class="email md">
            <span class="key">Email:</span> <a href="mailto:${engineer.email}">${engineer.email}</a>
          </li>
          <li class="office-number btm">
            <span class="key">GitHub:</span> <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>`
}

function internCard(intern) {
    return `<div class="col">
    <div id="intern" class="card card-cover h-100 overflow-hidden text-white rounded-4 shadow-lg">
      <div class="card-header bg-dark bg-gradient">
        <h2 class="display-6 pt-3 lh-1 fw-bold name"> ${intern.name}</h2>
        <h3 class="display-6 lh-1 fw-bold title">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-mortarboard" viewBox="0 0 16 16">
            <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z"/>
            <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z"/>
          </svg>Intern
        </h3>
      </div>
      <div class="card-body bg-light bg-gradient text-dark">
        <ul class="d-flex flex-column bg-white list-unstyled">
          <li class="id tp">
            <span class="key">ID:</span> ${intern.id}
          </li>
          <li class="email md">
            <span class="key">Email:</span> <a href="mailto:${intern.email}">${intern.email}</a>
          </li>
          <li class="office-number btm">
            <span class="key">School:</span> ${intern.school}
          </li>
        </ul>
      </div>
    </div>
  </div>   `
}

function generatehtml(employee) {
    var cards = "";
    for (var i = 0; i < employee.length; i++ ) {
        if (employee[i].getRole() === "Manager") {
            cards += managerCard(employee[i]);
        }
        if (employee[i].getRole() === "Engineer") {
            cards += engineerCard(employee[i]);
        } 
        if (employee[i].getRole() === "Intern") {
            cards += internCard(employee[i]);
        }
    }
    return `
    <!doctype html>
    <html lang="en">
    
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Team Profile Generator</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
      <link rel="stylesheet" type="text/css" href="./css/style.css" />
    </head>
    
    <body>
      <div class="bg-dark text-secondary px-4 py-5 text-center">
        <div class="py-5">
          <h1 class="display-5 fw-bold text-white">My Team</h1>
        </div>
      </div>
      <div class="container px-4 py-5">
        <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5 justify-content-center">
          ${cards}
           
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossorigin="anonymous"></script>
    </body>
    
    </html>
    
  `;
}

module.exports = generatehtml;
