// Menú desplegable
const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");

btnMenu.addEventListener("click", function() {
  menu.classList.toggle("mostrar");
});

// Implementación de mapa
function initMap() {
  let coord = {lat: -35.173193,
  lng: -58.2256466}
  let map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: coord
  });

  let marker = new google.maps.Marker({
    position: coord,
    map: map
})
}

