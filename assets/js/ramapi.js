//URL Api
const API = "https://swapi.dev/api/people/";

//Obtener los resultados de la API
const getData = (API) => {
  return fetch(API)
    .then((response) => response.json())
    .then((json) => {
      //console.log(json);
      llenarDatos(json.results), paginacion(json.next, json.previous);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
};



//Dibujar cards de personajes
const llenarDatos = (data) => {
  let html = "";
  data.forEach((pj) => {
    html += '<div class="col mt-5">';
    html += '<div class="card" style="width: 18rem;">';
    //html += ` <img src="${pj.name}" class="card-img-top" alt="${pj.name}">`;
    html += '<div class="card-body">';
    html += `<h5 class="card-title">${pj.name}</h5>`;
    html += `<strong><p class="card-text">Height:</strong> ${pj.height}</p>`;
    html += `<strong><p class="card-text">Gender:</strong> ${pj.gender}</p>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
  });
  document.getElementById("datosPersonajes").innerHTML = html;
};

//Paginación
const paginacion = (datanext, dataprevious) => {
  let prevDisabled = "";
  let nextDisabled = "";

  let html = `<li class="page-item ${
    dataprevious == null ? (prevDisabled = "disabled") : (prevDisabled = "")
  }"><a class="page-link" onclick="getData('${dataprevious}')">Previous</a></li> <li class="page-item ${
    datanext == null ? (nextDisabled = "disabled") : (nextDisabled = "")
  }" ><a class="page-link" onclick="getData('${datanext}')">Next</a></li>`;

  document.getElementById("paginacion").innerHTML = html;
};

//se ejecuta la API
getData(API);
