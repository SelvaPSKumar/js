// Login Form Modal

$(document).ready(function () {
  $("#myModal").modal('show');
  $(".btn").click(function () {
    $("#myModal").modal('hide');
  });
});
// Login Form Modal End

// Login Auth

function fetchAuth() {
  // (A) URL & CREDENTIALS
  var url = "https://salixv3qa.radiusdirect.net/coreapi/clientAdminLogin",
    credentials = btoa("email:password");

  // (B) FETCH WITH HTTP AUTH
  fetch(url, {
    method:"POST",
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
// Login Auth End

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
// Sidebar End

// Table Show GET,Edit & Delete

const tableBody = document.querySelector("#tbody");
const url = "https://salixv3qa.radiusdirect.net/coreapi/v2/notesTasksCatList?category_type=notes";

var Notes = document.getElementById("notes");
var dataTym = document.getElementById("datTym");
var idNum = document.getElementById("idN");

var list = new Array;

const getTable = (Datas) => {
  if (Datas.length > 0) {
    var temp = "";
    Datas.forEach(itemData => {
      temp += "<tr data-id=${itemData.id}>";
      temp += "<td>" + itemData.notes + "</td>";
      temp += "<td>" + itemData.datTym + "</td>";
      temp += "<td>" + itemData.idN + "</td>";
      temp += "<td><button type='button' class='btn btn-outline-success btn-sm' data-action='edit'  data-id='" + itemData.id + "'>Edit</button><button type='button' class='btn btn-outline-danger btn-sm ms-1' data-action='delete' data-id='" + itemData.id + "'>Delete</button></td>";

    });
    tableBody.innerHTML = temp;
  }

}


function showTable() {
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic aWROOnBhc3N3b3Jk"
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

tableBody.addEventListener("click", function (evnt) {


  var element = evnt.target;
  var action = element.dataset.action;
  var userId = element.dataset.id;
  if (action === "delete") {
    console.log("delete", userId);

    fetch(`${url}/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic aWROOnBhc3N3b3Jk"
      }
    })
      .then((data) => {
        console.log(data);
        showTable();
      })
  }

  var element = evnt.target;
  var action = element.dataset.action;
  var userId = element.dataset.id;
  if (action === "edit") {
    console.log("edit", userId);

    let obj = list.find(userslist => userslist.id == userId);
    console.log("list Array1", obj);

    window.location.href = "update.html?notes=" + obj.notes + "&" + "datTym=" + obj.datTym + "&" + "idN=" + obj.idN;
    console.log("list Array", list)
  }
});
// Table Show GET,Edit & Delete End

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
        "Authorization": "Basic aWROOnBhc3N3b3Jk"
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
// Table Post End

// Show Password Func

// const passwordInput = document.getElementById('password');
// const togglePasswordButton = document.getElementById('toggle-password');

// togglePasswordButton.addEventListener('click', togglePassword);

// function togglePassword() {
//   if (passwordInput.type === 'password') {
//     passwordInput.type = 'text';
//     togglePasswordButton.textContent = 'Hide password';
//     togglePasswordButton.setAttribute('aria-label',
//       'Hide password.');
//   } else {
//     passwordInput.type = 'password';
//     togglePasswordButton.textContent = 'Show password';
//     togglePasswordButton.setAttribute('aria-label',
//       'Show password as plain text. ' +
//       'Warning: this will display your password on the screen.');
//   }
// }
// Show Password Func End