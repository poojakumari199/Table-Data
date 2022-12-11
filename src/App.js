import './App.css';
import {useEffect} from 'react';

function App() {

  const tableData = async () => {
    const api_url = 'https://jsonplaceholder.typicode.com/users';
    const response = await fetch(api_url)
    const data = await response.json();
    console.log("pk", data);
 
  if(data.length > 0){
    let temp = [];
     data.forEach((item) => {
       temp += "</tr>";
       temp += "<td>" + item.id + "</td>" ;
       temp += "<td>" + item.name + "</td>";
       temp += "<td>" + item.username + "</td>";
       temp += "<td>" + item.email + "</td>";
       temp += "<td>" + item.address.street + "</td>";
       temp += "<td>" + item.company.name + "</td>";
       });
     document.getElementById("data").innerHTML += temp;

  }
 
  }
useEffect (() => {
  tableData();
})
  return (
    <div className="main">         
     <h1>TABLE</h1>
     <div id="container">
     <table>
       <thead>
       <tr>
       <th>ID</th>
       <th>NAME</th>
       <th>USERNAME</th>
       <th>EMAIL</th>
       <th>ADDRESS</th>
       <th>COMPANY</th>
       </tr>
       </thead>
       <tbody id="data"></tbody>
           </table>
           </div>
    </div>
  );
}

export default App;
