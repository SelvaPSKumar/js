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
          template += "<td><button type='button' data-bs-toggle='modal' data-bs-target='#myModal' class='btn btn-primary btn-sm' id='editBtn' data-action='edit' data-category-type='' data-createdAt='' data-id='' + itemData.id + ''>Edit</button>;<button type='button' class='btn btn-danger btn-sm ms-1' data-action='delete' data-id='" + itemData.id + "'>Delete</button></td>";
  
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
  
  //  Edit & Delete Function

  const apiUrl = "https://salixv3qa.radiusdirect.net/coreapi/v2/notesDelete"
  const modal = document.getElementById("exampleModal")
    
    tableBody.addEventListener("click", function (evnt) {
    
    
      var element = evnt.target;
      var action = element.dataset.action;
      var datId = element.dataset.id;

      if (action === "delete") {
        var rowDataId = {
          "id" : datId
      }
        console.log("delete", datId);
    
        fetch(`${apiUrl}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer"+" "+localStorage.getItem('token')
          },
          body:JSON.stringify(rowDataId)
        })
          .then((data) => {
            console.log(data);
            showTable();
          })
      }
    
      var element = evnt.target;
      var action = element.dataset.action;
      var datId = element.dataset.id;
      if (action === "edit") {
        console.log("edit", datId);
    
        let obj = list.find(userslist => userslist.id == datId);
        console.log("list Array1", obj);
    
        "category_type=" + obj.Notes + "&" + "createdAt=" + obj.dataTym + "&" + "id=" + obj.idNum;
        console.log("list Array", list)
      }
    });
    
    // Edit Modal
    

  //   $(function() {
  //     //Take the data from the TR during the event button
  //     $('table').on('click', 'button.editingTRbutton',function (ele) {
  //         //the <tr> variable is use to set the parentNode from "ele
  //         var tr = ele.target.parentNode.parentNode;

  //         //I get the value from the cells (td) using the parentNode (var tr)
  //         var editId = tr.cells[0].textContent;
  //         var categoryType = tr.cells[1].textContent;
  //         var createAtt = tr.cells[2].textContent;
  //         var idNumber = tr.cells[3].textContent;

  //         //Prefill the fields with the gathered information
  //         $('h5.modal-title').html('Edit Admin Data: '+categoryType);
  //         $('#category_type').val(categoryType);
  //         $('#createdAt').val(createAtt);
  //         $('#id').val(idNumber);

  //         //If you need to update the form data and change the button link
  //         $("form#myForm").attr('action', window.location.href+'/update/'+editId);
  //         $("#subBtn").attr('href', window.location.href+'/update/'+editId);
  //     });
  // });

    // 3rd Test
  // window.addEventListener('load', (func) => {
  
  //   const editBtn = document.querySelector("#editBtn");
  
  //    var editNotes = document.getElementById("category_type");
  //    var editTimeDate = document.getElementById("createdAt");
  //    var editIdNumber = document.getElementById("id");
  
  //    func.preventDefault();
   
  //  editBtn.addEventListener("click", (funct) => {
  //     document.getElementById("category_type", editNotes.value)
  //     document.getElementById("createdAt", editTimeDate.value)
  //     document.getElementById("id", editIdNumber.value)
     
  //     funct.preventDefault();
  
  //     fetch( "https://salixv3qa.radiusdirect.net/coreapi/v2/notesUpdate", {
  //          method:"POST",
  //         headers:{
  //         "Content-Type":"application/json",
  //         "Authorization":localStorage.getItem('token',response.token)
  //         },
  //         body:JSON.stringify({
  //           category_type:editNotes.value,
  //           createdAt:editTimeDate.value,
  //           id:editIdNumber.value,
  //          })
  //        })
  //        .then(response => response.json())
  //        .then((data) => {
  //         console.log(data);
              
  //        })
  //       });
  // });
  
  //  Edit & Delete Function End

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
        document.getElementById("tbody").value
            
       })
      });
});

// 2nd Test
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
  
  //  Pagination 
  
  
  
  // Pagination End
  
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