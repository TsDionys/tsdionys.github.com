// console.log("Hola desde un archivo feo de javascript");
// Representación del dom en JS
// let links = document.querySelectorAll("a");

// links.forEach(function(link) {
//   console.log(link);
// });

// console.log(links);

// let celdas = document.querySelectorAll("td");
// celdas.forEach(function(td) {
//   td.addEventListener("click", function() {
//     console.log(this);
//   });
// });

let links = document.querySelectorAll(".close");

links.forEach(function(link) {
  link.addEventListener("click", function(ev) {
    ev.preventDefault();
    return false;
  });
});
