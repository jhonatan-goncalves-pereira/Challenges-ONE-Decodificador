const btnCriptografa = document.querySelector("#btn-criptografa");
const btnDescriptografa = document.querySelector("#btn-descriptografa");
const txt = document.querySelector("#txt-de-cript");
const containerAlerta = document.querySelector('.container__alerta');
const alerta = document.querySelector('.alerta-requisitos');
const btnFecharAlerta = document.querySelector('.alerta-requisitos__fechar');
const txtLateralImg = document.querySelector('.decodificador__txtLateral__img');
const txtLateralTitulo = document.querySelector('.decodificador__txtLateral__Titulo');
const txtLateralTxt = document.querySelector('.decodificador__txtLateral__Txt');
const spanCopiado = document.querySelector('.decodificador__txtLateral__spanCopiado');
const btnCopiar = document.querySelector('.decodificador__txtLateral__btnCopiar');

containerAlerta.addEventListener("click", () => {
  containerAlerta.classList.add("containerDisable");
  alerta.classList.remove('mostrando');
});

btnFecharAlerta.addEventListener("click", () => {
  alerta.classList.remove('mostrando');
  containerAlerta.classList.add("containerDisable");
});

btnCriptografa.addEventListener("click", () => {
  const regex = /^[A-Z\s]+$/;
  const texto = txt.value.trim(); 
  if (!texto || !regex.test(texto)) {   
    mostrarAlerta();
    containerAlerta.classList.remove("containerDisable"); 
  } else {
    esconderElementos();
    txtLateralTxt.innerHTML = criptografar(texto);
    btnCopiar.style.display = "block";
  }
});

btnDescriptografa.addEventListener("click", () => {
  const regex = /^[A-Z\s]+$/;
  const texto = txt.value.trim(); 
  if (!texto || !regex.test(texto)) {   
    mostrarAlerta(); 
  } else {
    esconderElementos();
    txtLateralTxt.innerHTML = descriptografar(texto.toUpperCase());
    btnCopiar.style.display = "block";
  }
});

function mostrarAlerta(){
  alerta.classList.add('mostrando');
  containerAlerta.classList.remove("containerDisable");  
}

function esconderElementos() {
  txtLateralTitulo.style.display = "none";
  txtLateralImg.style.display = "none";
  txtLateralTxt.style.wordWrap = "break-word";
}

function criptografar(text){
  const encryptionKey = {
    'E': 'enter',
    'I': 'imes',
    'A': 'ai',
    'O': 'ober',
    'U': 'ufat'
  };

  return text.split('').map(char => encryptionKey[char] || char).join('').toUpperCase();
}

function descriptografar(text) {
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
  return decrypted.toUpperCase();
}


btnCopiar.addEventListener("click", () => {
  const textoParaCopiar = txtLateralTxt.textContent || txtLateralTxt.innerText;
  navigator.clipboard.writeText(textoParaCopiar);
  spanCopiado.style.display = "block";
  setTimeout(() => {
    spanCopiado.style.display = "none";
  }, 1000); 
});
