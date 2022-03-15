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
  // Sidebar Function End
  
  // Table Show GET,Edit & Delete
  
  const tableBody = document.querySelector("#tbody");
  const url = "https://salixv3qa.radiusdirect.net/coreapi/v2/notesTasksCatList?category_type=notes";
  
  var Notes = document.getElementById("notes");
  var dataTym = document.getElementById("datTym");
  var idNum = document.getElementById("idN");
  
  var list = new Array;
  
  const getTable = (Datas) => {
    if (Datas.length > 0) {
      var template = "";
      Datas.forEach(itemData => {
        template += "<tr data-id=${itemData.id}>";
        template += "<td>" + itemData.notes + "</td>";
        template += "<td>" + itemData.datTym + "</td>";
        template += "<td>" + itemData.idN + "</td>";
        template += "<td><button type='button' class='btn btn-success btn-sm' data-funAct='edit'  data-id='" + itemData.id + "'>Edit</button><button type='button' class='btn btn-danger btn-sm ms-1' data-funAct='delete' data-id='" + itemData.id + "'>Delete</button></td>";
  
      });
      tableBody.innerHTML = template;
    }
  
  }
  
  function showTable() {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('token')
      }
    })
      .then(res => {
        res.json()
          .then(data => {
            list = data.result;
            console.log("response1", data);
            getTable(list);
          })
      })
  }
  
  window.addEventListener("load", (event) => {
    event.preventDefault();
    showTable();
  });
  
  tableBody.addEventListener("click", function (evnt) {
  
  
    var element = evnt.target;
    var funAct = element.dataset.funAct;
    var datId = element.dataset.id;
    if (funAct === "delete") {
      console.log("delete", datId);
  
      fetch(`${url}/${datId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Basic ZW1haWw6YWRtaW5AdjNxYXJkLmNvbSxwYXNzd29yZDpyYWRpdXMxMjM="
        }
      })
        .then((data) => {
          console.log(data);
          showTable();
        })
    }
  
    var element = evnt.target;
    var funAct = element.dataset.funAct;
    var datId = element.dataset.id;
    if (funAct === "edit") {
      console.log("edit", datId);
  
      let obj = list.find(userslist => userslist.id == datId);
      console.log("list Array1", obj);
  
      window.location.href = "update.html?notes=" + obj.notes + "&" + "datTym=" + obj.datTym + "&" + "idN=" + obj.idN;
      console.log("list Array", list)
    }
  });
  // Table Show GET,Edit & Delete Function End
  
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
  // Table Post Function End

  // Login Form Modal

// $(document).ready(function () {
//     $("#myModal").modal('show');
//     $(".btn").click(function () {
//       $("#myModal").modal('hide');
//     });
//   });
  // Login Form Modal Funciton End
  
  // Login Auth
  // const ApiUrl = "https://salixv3qa.radiusdirect.net/coreapi/clientAdminLogin"
  // async function fetchAuthen() {
  //   const response = await fetch(ApiUrl, {
  //     method: 'post',
  //     headers: new Headers({
  //       'Authorization': 'Basic ' + btoa(email + ":" + password),
  //       'Content-Type': 'application/json'
  //     }),
  //     body: JSON.stringify({
  //       "email": "admin@v3qard.com",
  //       "Password": "radius123"
  //     })
  //   });
  //   const posts = await response.json();
  // }

// let email = 'admin@v3qard.com';
// let password = 'radius123';
// let url1 = `https://salixv3qa.radiusdirect.net/coreapi/clientAdminLogin/${email}/${password}`
// let authString = `${email}:${password}`
// let headers = new Headers();
// headers.set('Authorization', 'Basic ' + btoa(authString))
// fetch(url1,{method: 'POST', headers: headers})
//     .then(function (response) {
//         console.log (response)
//         return response
//     });
  
  // function fetchAuth() {
  //   // (A) URL & CREDENTIALS
  //   const ApiUrl = "https://salixv3qa.radiusdirect.net/coreapi/clientAdminLogin",
  //     credentials = btoa("email:password");
  
  //   // (B) FETCH WITH HTTP AUTH
  //   fetch(ApiUrl, {
  //     method:"POST",
  //     headers: {
  //       "Authorization": `Basic ${credentials}`
  //     }
  //   })
  
  //     // (C) SERVER RESPONSE
  //     .then((result) => {
  //       if (result.status != 200) { throw new Error("Bad Server Response"); }
  //       return result.text();
  //     })
  //     .then((response) => {
  //       document.getElementById("demoShow").innerHTML = response;
  //     })
  
  //     // (D) HANDLE ERRORS (OPTIONAL)
  //     .catch((error) => { console.log(error); });
  // }
  // // Login Auth Function End
  
  // Show Password Function
  
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
  // Show Password Function End