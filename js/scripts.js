    /* simple scripts file for Themes.guide Bootstrap 4 theme templates */

    // init Bootstrap tooltips & popovers
    $("[data-toggle=popover]").popover();
    $("[data-toggle=tooltip]").tooltip();
    
    
   
const uri = 'https://mydotnetapi.herokuapp.com/api/cars';
const weather='api/WeatherForecast';
let cars = [];

function searchbymake(){
    console.log("Here");
    var carmake= document.getElementById("text").value;
  
   const results = cars.filter(car => car.make.includes(carmake));
    console.log(results);
   if(carmake==='')
   {
    getCars();
   }
    _displayItems(results);
  }
  function getCars() {
   
    fetch(uri)
    .then(response => response.json())
      .then(data => _displayItems(data))
      .catch(error => console.error('Unable to get items.', error));
  }

  
function _displayCount(itemCount) {
    const name = (itemCount === 1) ? 'Car' : 'Cars';
  
    document.getElementById('count').innerText = `${itemCount} ${name}`;
  }
  
  function _displayItems(data) {
     const tBody = document.getElementById('cars');
    tBody.innerHTML = '';
    console.log(data.length);
    _displayCount(data.length);
  
    const button = document.createElement('button');
  
    data.forEach(car => {
     
        let tr = tBody.insertRow();
      
      let td1 = tr.insertCell(0);
      let id = document.createTextNode(car.id);
      td1.appendChild(id);
  
      let td2 = tr.insertCell(1);
      let make = document.createTextNode(car.make);
      td2.appendChild(make);
  
      let td3 = tr.insertCell(2);
      let model = document.createTextNode(car.model);
      td3.appendChild(model);
  
      let td4 = tr.insertCell(3);
      let price = document.createTextNode("€"+car.price);
      td4.appendChild(price);
  
      let td5 = tr.insertCell(4);
      let Year= document.createTextNode(car.year);
      td5.appendChild(Year);
     
    });
  
    cars = data;
  }