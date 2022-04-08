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

const tableBody = document.querySelector("#tbody");
const url1 = "https://salixv3qa.radiusdirect.net/coreapi/v2/noteslist";
const user1 = {
  "meeting": document.getElementById("myInput").value,
  "category_id": document.getElementById("character").value,
  "page": document.getElementById("btn_prev"),
  "limit": document.getElementById("limit")
}

var list = new Array;

const getTable = (Datas) => {
  if (Datas.length > 0) {
    var template = "";
    Datas.forEach(itemData => {
      template += "<tr data-id=${itemData.id}>";
      template += "<td>" + itemData.myInput + "</td>";
      template += "<td>" + itemData.character + "</td>";
      template += "<td>" + itemData.btn_prev + "</td>";
      template += "<td>" + itemData.limit + "</td>";
      template += "<td><button type='button' data-bs-toggle='modal' data-bs-target='#myModal' class='btn btn-primary btn-sm' id='editBtn' onclick='editFunction()' data-action='edit' data-id='' + itemData.id + ''>Edit</button><button type='button' class='btn btn-danger btn-sm ms-1' data-action='delete' data-id='" + itemData.id + "'>Dlte</button></td>";

    });
    tableBody.innerHTML = template;
  }

}

function showTable() {
  fetch(url1, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": localStorage.getItem('token')
    },
    body: JSON.stringify(user1)
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

// load.addEventListener("click", (event) => {
//   event.preventDefault();
//   showTable();
// });

document.getElementById('load').addEventListener('click', function () {
  fetch(url1)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      showTable();
    });
})

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
      "Authorization": "Bearer" + " " + localStorage.getItem('token'),
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

// const apiUrl = "https://salixv3qa.radiusdirect.net/coreapi/v2/notesDelete"

//   tableBody.addEventListener("click", function (evnt) {


//     var element = evnt.target;
//     var action = element.dataset.action;
//     var datId = element.dataset.id;

//     if (action === "delete") {
//       var rowDataId = {
//         "id" : datId
//     }
//       console.log("delete", datId);

//       fetch(`${apiUrl}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": "Bearer"+" "+localStorage.getItem('token')
//         },
//         body:JSON.stringify(rowDataId)
//       })
//         .then((data) => {
//           console.log(data);
//           showTable();
//         })
//     }
//   });
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
      'Content-Type': 'application/json;charset=utf-8',
      "Authorization": "Bearer" + " " + localStorage.getItem('token'),
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

(function () {
  'use strict';

  var TableFilter = (function () {
    var Arr = Array.prototype;
    var input;

    function onInputEvent(e) {
      input = e.target;
      var table1 = document.getElementsByClassName(input.getAttribute('data-table'));
      Arr.forEach.call(table1, function (table) {
        Arr.forEach.call(table.tBodies, function (tbody) {
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
      init: function () {
        var inputs = document.getElementsByClassName('table-filter');
        Arr.forEach.call(inputs, function (input) {
          input.oninput = onInputEvent;
        });
      }
    };

  })();

  TableFilter.init();
})();

// Serch Box Function End

// Logout Function

// Logout Function

//  Pagination Start

// &&

// creating an array for adding numbers in a page
// var countList = new Array();
// //creating an array for adding number of pagess
// var addPageList = new Array();
// var presentPage = 1;
// var countPerEachPage = 10;
// var countOfPages = 0;
// //function for adding how many numbers in total
// // function prepareList() {
// //   for (count = 0; counti < 100; count++)
// //     countList.push(count);
// //   countOfPages = getCountOfPages();
// // }
// //function for creating how many number per each page
// function getCountOfPages() {
//   return Math.ceil(countList.length / countPerEachPage);
// }
// //function for moving to next page
// function getNextPage() {
//   presentPage += 1;
//   loadMyPaginationList();
// }
// //function for moving previous page
// function getPreviousPage() {
//   presentPage -= 1;
//   loadMyPaginationList();
// }
// //function for moving to first page
// function getFirstPage() {
//   presentPage = 1;
//   loadMyPaginationList();
// }
// //function for moving last page
// function getLastPage() {
//   presentPage = countOfPages;
//   loadMyPaginationList();
// }
// //function for creating how to move between the pages
// function loadMyPaginationList() {
//   var start = ((presentPage - 1) * countPerEachPage);
//   var end = start + countPerEachPage;
//   addPageList = countList.slice(start, end);
//   createPageList();
//   validatePageCount();
// }
// //function for adding numbers to each page
// function createPageList() {
//   document.getElementById("countList").innerHTML = "";
//   for (p = 0; p < addPageList.length; p++) {
//     document.getElementById("countList").innerHTML = document.getElementById("countList").innerHTML + addPageList[p] + "<br/>";
//   }
// }
// //function for validating real time condition like if move to last page, last page disabled etc
// function validatePageCount() {
//   document.getElementById("next").disabled = presentPage == countOfPages ? true : false;
//   document.getElementById("previous").disabled = presentPage == 1 ? true : false;
//   document.getElementById("first").disabled = presentPage == 1 ? true : false;
//   document.getElementById("last").disabled = presentPage == countOfPages ? true : false;
// }
// //function for loading pagination functionality
// function loadMyPagination() {
//   // prepareList();
//   loadMyPaginationList();
// }
// window.onload = loadMyPagination;

// Pagination End