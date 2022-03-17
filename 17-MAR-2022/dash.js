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
  
  // Table Show GET
  
  const tableBody = document.querySelector("#tbody");
  const url = "https://salixv3qa.radiusdirect.net/coreapi/v2/notesTasksCatList?category_type=notes";
  
  var Notes = document.getElementById("category_type");
  var dataTym = document.getElementById("createdAt");
  var idNum = document.getElementById("id");
  
  var list = new Array;
  
  const getTable = (Datas) => {
    if (Datas.length > 0) {
      var template = "";
      Datas.forEach(itemData => {
        template += "<tr data-id=${itemData.id}>";
        template += "<td>" + itemData.category_type + "</td>";
        template += "<td>" + itemData.createdAt + "</td>";
        template += "<td>" + itemData.id + "</td>";
        template += "<td><button type='button' class='btn btn-primary btn-sm' data-funAct='edit'  data-id='" + itemData.id + "'>Edit</button><button type='button' class='btn btn-danger btn-sm ms-1' data-funAct='delete' data-id='" + itemData.id + "'>Delete</button></td>";

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

  
  
  // Table Show GET End

  // Table Post


  window.addEventListener('load', (event) => {

    const addBtn = document.querySelector("#subBtn");

     var note = document.getElementById("category_type");
     var timeDate = document.getElementById("createdAt");
     var idNumber = document.getElementById("id");

     event.preventDefault();
   
 	addBtn.addEventListener("click", (e) => {
      console.log("category_type", note.value)
      console.log("createdAt", timeDate.value)
      console.log("id", idNumber.value)
     
      e.preventDefault();
       
       fetch( "https://salixv3qa.radiusdirect.net/coreapi/v2/notesCreate", {
       	method:"POST",
        headers:{
        "Content-Type":"application/json",
    	  "Authorization":localStorage.setItem('token',response.token)
        },
        body:JSON.stringify({
          category_type:note.value,
          createdAt:timeDate.value,
          id:idNumber.value,
         })
       })
       .then(response => response.json())
       .then((data) => {
        console.log(data);
            
       })
      });
});

//   function fetchSub() {
//     const userForm = {
//         "categoryType": document.getElementById("category_type").value,
//         "createAt": document.getElementById("createdAt").value,
//         "idNum": document.getElementById("id").value
//     }
//     console.log('userForm : ', userForm)
//     let option = {
//         method: 'POST',
//         headers: {
//             'Content-Type':
//                 'application/json;charset=utf-8',
//         },
//         body: JSON.stringify(userForm)
//     }

//     let fetResponse = fetch(
//         "https://salixv3qa.radiusdirect.net/coreapi/v2/notesCreate",
//         option);
//     fetResponse.then(res =>
//         res.json()).then(response => {
//           document.getElementById("subBtn").onclick = function () {
//             console.log('Response : ', response)
//         }
//             if (response && response.apiStatus) {
//                 localStorage.setItem("token", response.token);
//             } else {
//                 alert(response.result)
//                 document.getElementById("category_type").value = ''
//                 document.getElementById("createdAt").value = ''
//                 document.getElementById("id").value = ''
//             }
//         })
// };
  // Table Post End

  // Serch Box Function

  (function() {
    'use strict';
  
    var TableFilter = (function() {
      var Arr = Array.prototype;
      var input;
  
      function onInputEvent(e) {
        input = e.target;
        var table1 = document.getElementsByClassName(input.getAttribute('data-table'));
        Arr.forEach.call(table1, function(table) {
          Arr.forEach.call(table.tBodies, function(tbody) {
            Arr.forEach.call(tbody.rows, filter);
          });
        });
      }
  
      function filter(row) {
        var text = row.textContent.toLowerCase();
        var val = input.value.toLowerCase();
        row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
      }
  
      return {
        init: function() {
          var inputs = document.getElementsByClassName('table-filter');
          Arr.forEach.call(inputs, function(input) {
            input.oninput = onInputEvent;
          });
        }
      };
  
    })();
  
   TableFilter.init();
  })();

 // Serch Box Function End

//  Pagination 



// Pagination End

  // const apiUrl = "https://salixv3qa.radiusdirect.net/coreapi/v2/notesDelete"
  
  // tableBody.addEventListener("click", function (evnt) {
  
  
  //   var element = evnt.target;
  //   var funAct = element.dataset.funAct;
  //   var datId = element.dataset.id;
  //   if (funAct === "delete") {
  //     console.log("delete", datId);
  
  //     fetch(`${apiUrl}/${datId}`, {
  //       method: "DELETE",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Authorization": localStorage.removeItem('token')
  //       }
  //     })
  //       .then((data) => {
  //         console.log(data);
  //         showTable();
  //       })
  //   }
  
  //   var element = evnt.target;
  //   var funAct = element.dataset.funAct;
  //   var datId = element.dataset.id;
  //   if (funAct === "edit") {
  //     console.log("edit", datId);
  
  //     let obj = list.find(userslist => userslist.id == datId);
  //     console.log("list Array1", obj);
  
  //     window.location.href = "update.html?category_type=" + obj.category_type + "&" + "createdAt=" + obj.createdAt + "&" + "id=" + obj.id;
  //     console.log("list Array", list)
  //   }
  // });
  // Table Show GET,Edit & Delete Function End
  
  
  
  // window.addEventListener('load', (event) => {
  
  //   const addBtn = document.querySelector("#subBtn");
  
  //   var Notes = document.getElementById("notes");
  //   var dateTym = document.getElementById("createdAt");
  //   var idNum = document.getElementById("id");
  
  
  //   addBtn.addEventListener("click", (e) => {
  //     console.log("notes", Notes.value)
  //     console.log("createdAt", dateTym.value)
  //     console.log("id", idNum.value)
  
  //     e.preventDefault();
  //     event();
  
  //     fetch("https://salixv3qa.radiusdirect.net/coreapi/v2/notesCreate", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Authorization": localStorage.setItem('token',response.token)
  //       },
  //       body: JSON.stringify({
  //         notes: Notes.value,
  //         createdAt: dateTym.value,
  //         id: idNum.value,
  //       })
  //     })
  //       .then(response => response.json())
  //       .then((data) => {
  //         console.log(data);

  //       })
  //   });
  
  // });
  // Table Post Function End

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