// Tarefa Final WEB - Pedro Vilares


// LIGHT/DARK THEME


let btnTema = document.getElementById("btnTema");

btnTema.addEventListener("click", function () {
    let body = document.body;

  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    
    btnTema.innerHTML = '<i class="bi bi-moon-stars-fill"></i> Dark Mode';
  } else {
    body.classList.add("dark-mode");
    btnTema.innerHTML = '<i class="bi bi-sun-fill"></i> Light Mode';
  }
});



// SWAP PROFILE IMAGE


let btnTrocarImagem = document.getElementById("btnTrocarImagem");
let fotoPerfil = document.getElementById("fotoPerfil");

// All images in one array (All Avatars!)
let imagens = [
  "https://static.wikia.nocookie.net/avatar/images/d/de/Pavi.png/revision/latest?cb=20250724184840",
  "https://static.wikia.nocookie.net/avatar/images/3/31/Korra_smiling.png/revision/latest?cb=20200907192928",
  "https://static.wikia.nocookie.net/avatar/images/a/ae/Aang_at_Jasmine_Dragon.png/revision/latest?cb=20250504214141",
  "https://static.wikia.nocookie.net/avatar/images/f/f6/Roku.png/revision/latest?cb=20220323130414",
  "https://static.wikia.nocookie.net/avatar/images/3/39/Kyoshi.png/revision/latest?cb=20230729120809",
  "https://static.wikia.nocookie.net/avatar/images/d/d1/Kuruk.png/revision/latest?cb=20081225191014",
  "https://static.wikia.nocookie.net/avatar/images/c/c6/Yangchen_cover_image.png/revision/latest?cb=20220324195813",
  "https://static.wikia.nocookie.net/avatar/images/9/92/Szeto.png/revision/latest?cb=20200721012517",
  "https://static.wikia.nocookie.net/avatar/images/5/51/Wan.png/revision/latest?cb=20130720233908",
];

// Image tracker (Initiates the first image at index 0, which is the first image pulled from the Photos folder- see HTML)
let imagemAtual = 0;

btnTrocarImagem.addEventListener("click", function () {
  // Moves to the next image
  imagemAtual = imagemAtual + 1;

  // If we've gone past the last image, loop back to the start
  if (imagemAtual >= imagens.length) {
    imagemAtual = 0;
  }

  fotoPerfil.src = imagens[imagemAtual];
});


// ADD HOBBY


let btnAdicionarHobby = document.getElementById("btnAdicionarHobby");
let listaHobbies = document.getElementById("listaHobbies");

btnAdicionarHobby.addEventListener("click", function () {
  let hobby = prompt("Add your new hobby?");

  if (hobby !== null && hobby !== "") {
    let novoItem = document.createElement("li");
    novoItem.innerText = hobby;
    listaHobbies.appendChild(novoItem);
  }
});



// PROFILE PERSONALIZATION FORM


let btnAtualizarPerfil = document.getElementById("btnAtualizarPerfil");

btnAtualizarPerfil.addEventListener("click", function (event) {
  event.preventDefault();

  let inputNome  = document.getElementById("inputNome").value;
  let inputFrase = document.getElementById("inputFrase").value;
  let inputCor   = document.getElementById("inputCor").value;
  let inputFoto  = document.getElementById("inputFoto").value;

  // Update name
  if (inputNome !== "") {
    document.getElementById("nomePerfil").innerText = inputNome;
  }

  // Update greeting phrase
  if (inputFrase !== "") {
    document.getElementById("frasePerfil").innerText = inputFrase;
  }

  // Apply favourite colour to the profile card background
  document.getElementById("cartaoPerfil").style.backgroundColor = inputCor + "42";
 

  // Update photo
  if (inputFoto !== "") {
    document.getElementById("fotoPerfil").src = inputFoto;
  }


  // Update counter (localStorage)
  let contagemAtual = parseInt(localStorage.getItem("counter") || "0");
  contagemAtual = contagemAtual + 1;
  localStorage.setItem("counter", contagemAtual);
  document.getElementById("contadorAtualizacoes").innerText = contagemAtual;
});

// Load saved counter when the page opens
let contadorGuardado = localStorage.getItem("counter") || "0";
document.getElementById("contadorAtualizacoes").innerText = contadorGuardado;



// API — CHUCK NORRIS JOKES


let btnCarregarCitacao = document.getElementById("btnCarregarCitacao");
let caixaCitacao       = document.getElementById("caixaCitacao");
let textoCitacao       = document.getElementById("textoCitacao");
let autorCitacao       = document.getElementById("autorCitacao");

btnCarregarCitacao.addEventListener("click", function () {
  btnCarregarCitacao.innerText = "Loading...";
  btnCarregarCitacao.disabled = true;

  fetch("https://api.chucknorris.io/jokes/random")
    .then(function (resposta) {
      return resposta.json();
    })
    .then(function (dados) {
      textoCitacao.innerText = '"' + dados.value + '"';
      autorCitacao.innerText = "🪦 Chuck Norris 🥋";
      caixaCitacao.style.display = "block";

      // It only runs after the API responds
      btnCarregarCitacao.innerHTML = '<i class="bi bi-chat-quote"></i> Tell me a joke';
      btnCarregarCitacao.disabled = false;
    })
});



// ENTER KEY — ALERT


document.addEventListener("keydown", function (event) {
  let tagAtiva = document.activeElement.tagName;

  // Only fires if the user is not typing in a field
  if (event.key === "Enter" && tagAtiva !== "INPUT" && tagAtiva !== "TEXTAREA" && tagAtiva !== "BUTTON") {
    alert("Tem a certeza que acabou o exercício?");
  }
});



// RANDOM COLOUR ON HOBBIES SECTION


let btnCorAleatoria = document.getElementById("btnCorAleatoria");
let secaoPerfil = document.getElementById("cartaoPerfil");

btnCorAleatoria.addEventListener("click", function(){
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  let cor = `rgb(${r}, ${g}, ${b})`;

  secaoPerfil.style.backgroundColor= cor;

});



// RESET — RESTORE INITIAL STATE


let btnReset = document.getElementById("btnReset").addEventListener("click", function () {
 
  // Reseting profile
  document.getElementById("nomePerfil").innerText = "Pedro Vilares"; // Reseting name
  document.getElementById("frasePerfil").innerText = "Data Analyst & Low-Code Developer Student"; // Reseting phrase
  document.getElementById("cartaoPerfil").style.backgroundColor = ""; // Reseting background color
  document.getElementById("fotoPerfil").src = "/ProjectPROGWEB/Photos/Pedro_Vilares.jpg"; // Reseting profile photo to inicial photo

  // Reseting form
  document.getElementById("inputNome").value  = ""; // Reseting inputs (Name)
  document.getElementById("inputFrase").value = ""; // Reseting inputs (Greeting)
  document.getElementById("inputCor").value   = "#0800ff"; // Reseting inputs (Color)
  document.getElementById("inputFoto").value  = ""; // Reseting inputs (URL Photo)
  
  // Reseting hobbies
  document.getElementById("listaHobbies").innerHTML =
      '<li><i class="bi bi-egg-fried"></i> Cooking</li>' +
      '<li><i class="bi bi-puzzle"></i> Chess</li>' +
      '<li><i class="bi bi-controller"></i> Gaming (PC)</li>' +
      '<li><i class="bi bi-book"></i> Reading</li>' +
      '<li><i class="bi bi-film"></i> Movies/Shows</li>';
 
  
  // Reseting counter to inicial state
  localStorage.setItem("counter", "0");
  document.getElementById("contadorAtualizacoes").innerText = 0;

});
