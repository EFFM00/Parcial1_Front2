/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt("Ingresa tu nombre");
  let edad = prompt("Ingresa tu año de nacimiento");
  datosPersona.edad = 2022 - edad;
  datosPersona.ciudad = prompt("Ingresa tu ciudad de residencia");
  let interesJs = confirm("Clickea ''Aceptar'' si te interesaría aprender Javascript");
  
  if(interesJs == true)  {
    datosPersona.interesPorJs = " Sí";
  } else {
    datosPersona.interesPorJs = " No";
  }
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */

  let arrayDatos = Object.values(datosPersona);
  console.log(arrayDatos);

  let h3 = document.querySelectorAll("h3");
    for (let i = 0; i < arrayDatos.length; i++) {
    h3[i].innerText += ` ${arrayDatos[i]}`;
  }

}
//¿Cómo puedo traerme los hijos de un elemento padre? Ejemplo: traerme el div cards y meter en un array a los hijos


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  for(let i = 0; i < listado.length; i++) {
    
    let fila = document.getElementById("fila");
    let tarjeta = document.createElement("div");
    fila.appendChild(tarjeta);
    tarjeta.classList.add("caja");
    
    let imgMateria = document.createElement("img");
    imgMateria.setAttribute("src", listado[i].imgUrl);
    imgMateria.setAttribute("alt", listado[i].lenguajes);
    tarjeta.appendChild(imgMateria);
    
    let pTitulo = document.createElement("p");
    let tituloMateria = document.createTextNode(listado[i].lenguajes);  
    tarjeta.appendChild(pTitulo);
    pTitulo.appendChild(tituloMateria);
    pTitulo.classList.add("lenguajes");

    let pBimestre = document.createElement("p");
    let bimestre = document.createTextNode(`Bimestre: ${listado[i].bimestre}`);
    tarjeta
    tarjeta.appendChild(pBimestre);
    pBimestre.appendChild(bimestre);
    pBimestre.classList.add("bimestre");
  }

  materiasBtn.removeEventListener("click", recorrerListadoYRenderizarTarjetas);

}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  let divContenedor = document.getElementById("sitio");
  divContenedor.classList.toggle("dark");
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

