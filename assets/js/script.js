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
    decodificador__txtLateral__Txt.innerHTML = criptografar(criptografar(txt.value));
    btnCopiar.style.display = "block";
});

btnDescriptografa.addEventListener("click", function() {
  decodificador__txtLateral__Txt.innerHTML = descriptografa(descriptografa(txt.value));
  btnCopiar.style.display = "block";
});

function criptografar(text){
    return text.replace(/e/g, 'enter')
                 .replace(/i/g, 'imes')
                 .replace(/a/g, 'ai')
                 .replace(/o/g, 'ober')
                 .replace(/u/g, 'ufat');
}

function descriptografa(text){
    return text.replace(/enter/g, 'e')
                 .replace(/imes/g, 'i')
                 .replace(/ai/g, 'a')
                 .replace(/ober/g, 'o')
                 .replace(/ufat/g, 'u');
}

