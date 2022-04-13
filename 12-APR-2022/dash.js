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

const tBody = document.querySelector("#sel");
const url = "https://salixv3qa.radiusdirect.net/coreapi/v2/notesTasksCatList?category_type=notes";

var Notes = document.getElementById("category_title");

var list = new Array;

const getTable1 = (Datas) => {
  if (Datas.length > 0) {
    var template = "";
    Datas.forEach(itemData => {
      template += "<select>";
      template += "<option data-id=${itemData.id}>" + " " + "</option>";
      template += "<option>" + itemData.category_title + "</option>";
    });
    tBody.innerHTML = template;
  }

}

function fetchLoad() {
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
          getTable1(list);
        })
    })
}

window.addEventListener("load", (event) => {
  event.preventDefault();
  fetchLoad();
});
// Fetch Category List End GET

// Fetch Meeting ID Load Start

// const tabBody = document.querySelector("#tbody");

// var CategoryId = document.getElementById("id");
// var Notes = document.getElementById("note_desc");
// var added = document.getElementById("addedBy");
// var created = document.getElementById("createdAt");

// var list = new Array;

// const getTable = (Datas) => {
//   if (Datas.length > 0) {
//     var template = "";
//     Datas.forEach(itemData => {
//       template += "<tr data-id=${itemData.id}>";
//       template += "<td>" + itemData.id + "</td>";
//       template += "<td>" + itemData.note_desc + "</td>";
//       template += "<td>" + itemData.addedBy + "</td>";
//       template += "<td>" + itemData.createdAt + "</td>";
//       template += "<td><button type='button' data-bs-toggle='modal' data-bs-target='#myModal' class='btn btn-primary btn-sm' id='editBtn' data-action='edit' data-id='' + itemData.id + ''>Edit</button><button type='button' class='btn btn-danger btn-sm ms-1' data-action='delete' data-id='" + itemData.id + "'>Dlte</button></td>";

//     });
//     tabBody.innerHTML = template;
//   }

// }

// function fetchData() {
//   // Selecting the input element and get its value
//   var inputVal = document.getElementById("myInput").value;
//   var selected = document.getElementById("sel").value;

//   // Displaying the value
//   alert(inputVal);
  
//   let query = "?meeting=" + Meeting + "&category_id=" + CategoryId + "&page=" + 1 + "&limit=" + 100;

//   //var town ='garstang';
//   var town = inputVal + selected;

//   var url = "https://salixv3qa.radiusdirect.net/coreapi/v2/noteslist";

//   var requestOptions = {
//     method: 'GET',
//     headers: {
//             "Content-Type": "application/json",
//             "Authorization": localStorage.getItem('token')
//           },
//           body: JSON.stringify(user)
//   };

//   fetch(url + query + '/' + town, requestOptions)
//     .then(response => response.text())
//     // .then(result => console.log(result))
//     .then(result => tabBody.innerHTML = (result))
//     .catch(error => console.log('error', error));  

//     if (town !== response.apiStatus) {
//       fetchData(list);
//     } else {
//       alert("Please Check this!")
//     }
// }

// const tabBody = document.querySelector("#tbody");
// const url1 = "https://salixv3qa.radiusdirect.net/coreapi/v2/noteslist";

// var CategoryId = document.getElementById("id");
// var Notes = document.getElementById("note_desc");
// var added = document.getElementById("addedBy");
// var created = document.getElementById("createdAt");

// var list = new Array;

// const getTable = (Datas) => {
//   if (Datas.length > 0) {
//     var template = "";
//     Datas.forEach(itemData => {
//       template += "<tr data-id=${itemData.id}>";
//       template += "<td>" + itemData.id + "</td>";
//       template += "<td>" + itemData.note_desc + "</td>";
//       template += "<td>" + itemData.addedBy + "</td>";
//       template += "<td>" + itemData.createdAt + "</td>";
//       template += "<td><button type='button' data-bs-toggle='modal' data-bs-target='#myModal' class='btn btn-primary btn-sm' id='editBtn' data-action='edit' data-id='' + itemData.id + ''>Edit</button><button type='button' class='btn btn-danger btn-sm ms-1' data-action='delete' data-id='" + itemData.id + "'>Dlte</button></td>";

//     });
//     tabBody.innerHTML = template;
//   }

// }

// function fetchData() {
//   const user = {
//     "meeting": document.getElementById("myInput").value,
//     "selected": document.getElementById("sel").value
// }
//   console.log("User", user);
//     let query = "?meeting=" + Meeting + "&category_id=" + CategoryId + "&page=" + 1 + "&limit=" + 100;
//   fetch(url + query, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": localStorage.getItem('token')
//     },
//     body: JSON.stringify(user)
//   })
//     .then(res => {
//       res.json()
//         .then(data => {
//           list = data.result;
//           console.log("response1", data);
//           if (meeting & selected !== response.apiStatus) {
//             getTable(list);
//           } else {
//             alert("Please Enter Meeting & Selected Value")
//           }
//         })
//     })
// }

// document.getElementById("load").addEventListener("click", (event) => {
//   event.preventDefault();
//   fetchData();
// });

function fetchData() {
  alert("Data is loaded!");
  let query = "?meeting=" + Meeting + "&category_id=" + CategoryId + "&page=" + 1 + "&limit=" + 100;
  let user = document.getElementById("myInput");
  console.log('user : ', user)
  let options = {
      method: 'GET',
      headers: {
          'Content-Type':
              'application/json;charset=utf-8'
      },
      body: JSON.stringify()
  }

  let fetchRes = fetch(
      "https://salixv3qa.radiusdirect.net/coreapi/v2/noteslist" + query,
      options);
  fetchRes.then(res =>
      res.json()).then(response => {
          console.log('Response : ', response)
          if (response && response.apiStatus) {
              localStorage.setItem("token");
          } else {
              alert(response.result)
              document.getElementById("myInput").value = ''
          }
      })
};


// Fetch Meeting ID Load End

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