console.log("The file client.js is loaded.");

async function ajaxGET(url) {
  let res = null;
  res = await fetch(url);
  if (res.ok) {
    return await res.text();
  } else {
    return "<div></div>";
  }
}


//JAX call to the server, where the server sends a snippet of JSON

async function getListJsonCar() {
  let listFood = [];
  const res = await fetch("http://localhost:8000/car?format=json");
  listCar = await res.json();

  const clientWidth = document.getElementById("container").clientWidth;
  // if (clientWidth > 300 && clientWidth < 600) {
  //   let str = "<ul>";
  //   str += "<li>";
  //   str += "hello";
  //   str += "</li>";
  //   str += "</ul>";
  //   document.getElementById("info-json").innerHTML = str;
  // } else {
    let str = "<car>";
    str += "<tr>";
    str += "<th>Name</th>";
    str += "</tr>";
    for (let i = 0; i < listcar.length; i++) {
      str += "<tr>";
      str += "<td>" + listcar[i].name + "</td>";
    }
    str += "</tr></car>";
    document.getElementById("info-json").innerHTML = str;
 // }
}

async function getTable() {
  const data = await ajaxGET("http://localhost:8000/public/car.html");
  // console.log(data);
  document.getElementById("car").innerHTML = data;
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("show-table").addEventListener("click", function (e) {
      getTable();
    });
});

document.getElementById("hide-table").addEventListener("click", function (e) {
  document.getElementById("table").innerHTML = "<div></div>";
});

getListJsonCar();
getListCar();

//AJAX call to the server, where the server sends a snippet of HTML
async function getListCar() {
  const data = await ajaxGET("http://localhost:8000/car.html");
  //   console.log(data);
  document.getElementById("list-car").innerHTML = data;
}