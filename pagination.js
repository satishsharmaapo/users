/*
	1 - Loop Through Array & Access each value
  2 - Create Table Rows & append to table
*/
function paginationData()
{
	fetch('http://localhost:3000/users/')
     .then((response) => response.json())
	 .then((json) => {
		 console.log(json);
         var json_data=json;
		  
		 var state = {
			 'querySet': json_data,
			 'page': 1,
			 'rows': 5,
			 'window': 5,
		 }
		 
		 buildTable()
		 
		 function pagination(querySet, page, rows) {		 
			 var trimStart = (page - 1) * rows
			 var trimEnd = trimStart + rows
		 
			 var trimmedData = querySet.slice(trimStart, trimEnd)
		 
			 var pages = Math.round(querySet.length / rows);
		 
			 return {
				 'querySet': trimmedData,
				 'pages': pages,
			 }
		 }
		 
		 function pageButtons(pages) {
			 var wrapper = document.getElementById("pagination-wrapper")
		 
			 wrapper.innerHTML = ''
			 console.log('Pages:', pages)
		 
			 var maxLeft = (state.page - Math.floor(state.window / 2))
			 var maxRight = (state.page + Math.floor(state.window / 2))
		 
			 if (maxLeft < 1) {
				 maxLeft = 1
				 maxRight = state.window
			 }
		 
			 if (maxRight > pages) {
				 maxLeft = pages - (state.window - 1)
				 
				 if (maxLeft < 1){
					 maxLeft = 1
				 }
				 maxRight = pages
			 }
			 	 
			 for (var page = maxLeft; page <= maxRight; page++) {
				 wrapper.innerHTML += `<button value=${page} class="page btn btn-sm">${page}</button>`
			 }
		 
			 if (state.page != 1) {
				 wrapper.innerHTML = `<button value=${1} class="page btn btn-sm">&#171; First</button>` + wrapper.innerHTML
			 }
		 
			 if (state.page != pages) {
				 wrapper.innerHTML += `<button value=${pages} class="page btn btn-sm">Last &#187;</button>`
			 }
		 
			 $('.page').on('click', function() {
				 $('#userdata').empty()
		 
				 state.page = Number($(this).val())
		 
				 buildTable()
			 })		 
		 }	 		 
		 function buildTable() {
			 var table = $('#userdata')
		 
			 var data = pagination(state.querySet, state.page, state.rows)
			 var myList = data.querySet
			 var row;
			 var header1=`<thead>
			 <tr>
				 <th><input type="checkbox" name="CheckAll" id="checkAll" /></th>
				 <th>User id</th>
				 <th>username</th>
				 <th>Email</th>
			 </tr>
		 </thead><tbody>`;
			table.append(header1)
			
			 for (var i = 1 in myList) {
				 //Keep in mind we are using "Template Litterals to create rows"
				   row =  `<tr>
				            <td><input type='checkbox' value='true' class='checkbox1' id=${myList[i].id} name=${myList[i].id} /></td>
						   <td>${myList[i].id}</td>
						   <td>${myList[i].username}</td>
						   <td>${myList[i].emailid}</td></tr>
						   `
				 table.append(row)
			 }
			 table.append('</tbody>')
			  
			 pageButtons(data.pages)
		 }
	})
}
