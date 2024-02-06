var btnCriptografa = document.getElementById("btn-criptografa");
var btnDescriptografa = document.getElementById("btn-descriptografa");

var txt = document.getElementById("txt-de-cript");

var decodificador__txtLateral__img = document.getElementsByClassName("decodificador__txtLateral__img")[0];
var decodificador__txtLateral__Titulo = document.getElementsByClassName("decodificador__txtLateral__Tititulo")[0];
var decodificador__txtLateral__Txt = document.getElementsByClassName("decodificador__txtLateral__Txt")[0];

var spanCopiado = document.getElementsByClassName("decodificador__txtLateral__spanCopiado")[0];
var btnCopiar = document.getElementsByClassName("decodificador__txtLateral__btnCopiar")[0];

btnCopiar.addEventListener("click", function() {
     var elementoParaCopiar = decodificador__txtLateral__Txt;
     var tempInput = document.createElement("textarea");
     tempInput.value = elementoParaCopiar.textContent || elementoParaCopiar.innerText;
     document.body.appendChild(tempInput);

     tempInput.select();
     document.execCommand("copy");
     document.body.removeChild(tempInput);
     alert("Texto copiado!");
     spanCopiado.style.display = "block";
});

btnCriptografa.addEventListener("click", function() {
    decodificador__txtLateral__Txt.innerHTML = criptografar(txt.value);
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
    if(text[i] === "e"){
      encryptedText += "enter";
    } else if(text[i] === "i"){
      encryptedText += "imes";
    } else if(text[i] === "a"){
      encryptedText += "ai";
    } else if(text[i] === "o"){
      encryptedText += "ober";
    } else if(text[i] === "u"){
      encryptedText += "ufat";
    } else {
      encryptedText += text[i]; // Mantém caracteres não modificados
    }
  }
  return encryptedText;
}

function descriptografa(text){
  const decryptionKey = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
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
return decrypted;
}

