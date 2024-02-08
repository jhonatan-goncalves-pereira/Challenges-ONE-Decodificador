var btnCriptografa = document.getElementById("btn-criptografa");
var btnDescriptografa = document.getElementById("btn-descriptografa");

var txt = document.getElementById("txt-de-cript");

var decodificador__txtLateral__img = document.getElementsByClassName("decodificador__txtLateral__img")[0];
var decodificador__txtLateral__Titulo = document.getElementsByClassName("decodificador__txtLateral__Titulo")[0];
var decodificador__txtLateral__Txt = document.getElementsByClassName("decodificador__txtLateral__Txt")[0];

var spanCopiado = document.getElementsByClassName("decodificador__txtLateral__spanCopiado")[0];
var btnCopiar = document.getElementsByClassName("decodificador__txtLateral__btnCopiar")[0];



btnCriptografa.addEventListener("click", function() {
  var regex = /^[A-Z\s]+$/;
  var texto = txt.value.trim(); 
  if (!texto || !regex.test(texto)) {
     
      alert("Por favor, insira apenas letras maiúsculas e sem acento.");
      return; 
  }

  decodificador__txtLateral__Titulo.style.display = "none";
  decodificador__txtLateral__img.style.display = "none";
  decodificador__txtLateral__Txt.innerHTML = criptografar(texto);
  decodificador__txtLateral__Txt.style.wordWrap = "break-word";
  btnCopiar.style.display = "block";
});

btnDescriptografa.addEventListener("click", function() {
  decodificador__txtLateral__Txt.innerHTML = descriptografa(descriptografa(txt.value));
  btnCopiar.style.display = "block";
});


function criptografar(text){
  let encryptedText = "";
  for(let i = 0; i < text.length; i++){
    if(text[i] === "E"){
      encryptedText += "enter";
    } else if(text[i] === "I"){
      encryptedText += "imes";
    } else if(text[i] === "A"){
      encryptedText += "ai";
    } else if(text[i] === "O"){
      encryptedText += "ober";
    } else if(text[i] === "U"){
      encryptedText += "ufat";
    } else {
      encryptedText += text[i]; // Mantém caracteres não modificados
    }
  }
  return encryptedText.toUpperCase();
}

function descriptografa(text){
  const decryptionKey = {
    'ENTER': 'E',
    'IMES': 'I',
    'AI': 'A',
    'OBER': 'O',
    'UFAT': 'U'
};

let decrypted = '';
let i = 0;
while (i < text.length) {
    let found = false;
    for (let key in decryptionKey) {
        if (text.startsWith(key, i)) {
            decrypted += decryptionKey[key];
            i += key.length;
            found = true;
            break;
        }
    }
    if (!found) {
        decrypted += text[i];
        i++;
    }
}
return  decrypted.toUpperCase();
}

btnCopiar.addEventListener("click", function() {
  var elementoParaCopiar = decodificador__txtLateral__Txt;
  var tempInput = document.createElement("textarea");
  tempInput.value = elementoParaCopiar.textContent || elementoParaCopiar.innerText;
  document.body.appendChild(tempInput);
 
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
 spanCopiado.style.display = "block";
  setTimeout(function() {
    spanCopiado.style.display = "none";
  }, 1000); 
});
