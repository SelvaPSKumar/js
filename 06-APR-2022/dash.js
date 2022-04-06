      // Sidebar Function Start
  
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
  
    // Fetch Category List Start GET
    const character = document.getElementById('character');

    character.addEventListener('change', () => {
      fetch(`https://salixv3qa.radiusdirect.net/coreapi/v2/notesTasksCatList?category_type=notes/${character.value}`)
        .then(res => res.json())
        // .then(res =>{
        //   $('#tbody').html(`
        //   <th>${res.id}</th>
        //   <th>${res.notes}</th>
        //   <th>${res.addedBy}</th>
        //   <th>${res.createdAt}</th>
        //   `)
        // })
        .catch(err => console.error(err))
    })
    // Fetch Category List End GET

    // Fetch Meeting ID Load Start

    

    // Fetch Meeting ID Load End

    // Table Show to List Note GET Start
      
    // Table Show to List Note GET End
      
    // Table Post to Create Notes Start
  
    function subFunction() {
      const newDatId = {
        "meeting": document.getElementById("createdAt1").value,
        "category_id": document.getElementById("cate_id").value,
        "note_desc": document.getElementById("notesId").value,
        "updated_from": document.getElementById("updateFrom").value
    }
    console.log("newDatId :", newDatId);
  
    let methods = {
      method: 'POST',
      headers: {
          'Content-Type':
              'application/json;charset=utf-8',
             "Authorization":"Bearer"+" "+localStorage.getItem('token'),
      },
      body: JSON.stringify(newDatId)
  }
  
       let addData = fetch(
    "https://salixv3qa.radiusdirect.net/coreapi/v2/notesCreate",
    methods);
    addData.then(res =>
    res.json()).then(response => {
        console.log('Response : ', response)
        if (response && response.apiStatus) {
          document.getElementById("createdAt1").value = '',
          document.getElementById("cate_id").value = '',
          document.getElementById("notesId").value = '',
          document.getElementById("updateFrom").value = ''
          showTable(),
          alert(response.result)
        } else {
          alert(response.result)
        }
    })
    }
    // Table Post to Create Notes Start End
    
    // Delete Notes Start 
  
    const apiUrl = "https://salixv3qa.radiusdirect.net/coreapi/v2/notesDelete"
    
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
      });
      // Delete Notes End 
  
      // Edit Notes Start
  
      function editFunction() {
  
        
  
        const rowDatId = {
          "id": document.getElementById("createdAt1").value,
          "category_id": document.getElementById("cate_id").value,
          "note_desc": document.getElementById("notesId").value,
      }
      console.log("rowDatId :", rowDatId);
    
      let editMethod = {
        method: 'POST',
        headers: {
            'Content-Type':'application/json;charset=utf-8',
               "Authorization":"Bearer"+" "+localStorage.getItem('token'),
        },
        body: JSON.stringify(rowDatId)
    }
    
         let editData = fetch(
      "https://salixv3qa.radiusdirect.net/coreapi/v2/notesUpdate",
      editMethod);
      editData.then(res =>
      res.json()).then(response => {
          console.log('Response : ', response)
          if (response && response.apiStatus) {
            alert(result.result)
          } else {
              alert(response.result)
          }
      })
      }
    // Edit Notes End
  
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
  
    // Logout Function
  
  //   jQuery(document).ready(function() {
  
  //     Parse.$ = jQuery;
  //     Parse.initialize("...", "...");
  
  //     $('.form-logout').on('submit', function (e) {
  //         // Prevent Default Submit Event
  //         e.preventDefault();
  
  //         console.log("Performing submit");
  
  //         //logout current user
  //         if ( Parse.User.current() ) {
  //             Parse.User.logOut();
  
  //             // check if really logged out
  //             if (Parse.User.current())
  //                 console.log("Failed to log out!");
  //         }
  
  //         // do redirect
  //         //window.location.replace("Sign_In.html");
  //         // or
  //         window.location.href = "/Sign_In.html";
  //     });
  // });
  
    // Logout Function
    
    //  Pagination 
    
    // Pagination End