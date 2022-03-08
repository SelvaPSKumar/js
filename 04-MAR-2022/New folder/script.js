// Login Form Modal

$(document).ready(function () {
  $("#myModal").modal('show');
  $(".btn").click(function () {
    $("#myModal").modal('hide');
  });
});

// Login Form Modal

// Login Auth

function fetchAuth() {
  // (A) URL & CREDENTIALS
  var url = "https://salixv3qa.radiusdirect.net/coreapi/clientAdminLogin",
    credentials = btoa("email:password");

  // (B) FETCH WITH HTTP AUTH
  fetch(url, {
    headers: {
      "Authorization": `Basic ${credentials}`
    }
  })

    // (C) SERVER RESPONSE
    .then((result) => {
      if (result.status != 200) { throw new Error("Bad Server Response"); }
      return result.text();
    })
    .then((response) => {
      document.getElementById("demoShow").innerHTML = response;
    })

    // (D) HANDLE ERRORS (OPTIONAL)
    .catch((error) => { console.log(error); });
}
// Login Auth

// Sidebar

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
sidebarBtn.onclick = function () {
  sidebar.classList.toggle("active");
  if (sidebar.classList.contains("active")) {
    sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else
    sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
}

// Sidebar

// Table Show GET,Edit & Delete

const tablebody = document.querySelector("#tbody");
const url = "https://salixv3qa.radiusdirect.net/coreapi/v2/notesTasksCatList?category_type=notes";

var Notes = document.getElementById("notes");
var dateTym = document.getElementById("datTym");
var idNum = document.getElementById("idN");

var list = new Array;

const getTable = (datas) => {
  if (datas.length > 0) {
    var temp = "";
    datas.forEach(itemData => {
      temp += "<tr data-id=${itemData.id}>";
      temp += "<td>" + itemData.notes + "</td>";
      temp += "<td>" + itemData.datTym + "</td>";
      temp += "<td>" + itemData.idN + "</td>";
      temp += "<td><button type='button' class='btn btn-success btn-sm' data-action='edit'  data-id='" + itemData.id + "'>Edit</button><button type='button' class='btn btn-danger btn-sm ms-1' data-action='delete' data-id='" + itemData.id + "'>Dlt</button></td>";

    });
    tablebody.innerHTML = temp;
  }

}

function showTable() {
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic ZW1haWw6cGFzc3dvcmQ="
    }
  })
    .then(res => {
      res.json()
        .then(data => {
          list = data.data;
          console.log("response1", list);
          getTable(data.data);
        })
    })
}

window.addEventListener("load", (event) => {
  event.preventDefault();
  showTable();
});

tablebody.addEventListener("click", function (evnt) {


  var con = evnt.target;
  var func = con.dataset.action;
  var idnN = con.dataset.id;
  if (action === "delete") {
    console.log("delete", IdnN);

    fetch(`${url}/${IdnN}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic ZW1haWw6cGFzc3dvcmQ="
      }
    })
      .then((data) => {
        console.log(data);
        showTable();
      })
  }

  var elem = evt.target;
  var action = elem.dataset.action;
  var dataId = elem.dataset.id;
  if (action === "edit") {
    console.log("edit", dataId);

    let objec = list.find(dataslist => dataslist.id == dataId);
    console.log("list Array1", objec);

    window.location.href = "update.html?notes=" + objec.notes + "&" + "datTym=" + objec.datTym + "&" + "idN=" + objec.idN;
    console.log("list Array", list)
  }
});

// Table Show GET,Edit & Delete

// Table Post

window.addEventListener('load', (event) => {

  const addBtn = document.querySelector("#subBtn");

  var Notes = document.getElementById("notes");
  var dateTym = document.getElementById("datTym");
  var idNum = document.getElementById("idN");


  addBtn.addEventListener("click", (e) => {
    console.log("notes", Notes.value)
    console.log("datTym", dateTym.value)
    console.log("idN", idNum.value)

    e.preventDefault();

    fetch("https://salixv3qa.radiusdirect.net/coreapi/v2/notesCreate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic ZW1haWw6cGFzc3dvcmQ="
      },
      body: JSON.stringify({
        notes: Notes.value,
        datTym: dateTym.value,
        idN: idNum.value,
      })
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data);

      })
  });

});

// Table Post