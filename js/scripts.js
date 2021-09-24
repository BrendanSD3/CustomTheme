    /* simple scripts file for Themes.guide Bootstrap 4 theme templates */

    // init Bootstrap tooltips & popovers
    $("[data-toggle=popover]").popover();
    $("[data-toggle=tooltip]").tooltip();
    
  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});
const uri = 'https://cors-anywhere.herokuapp.com/https://mydotnetapi.herokuapp.com/api/cars';
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
    var element = document.getElementById('spinner');
    element.classList.add('show');
    element.classList.remove('hidden');
    
    fetch(uri)
    .then(response => response.json())
      .then(data => _displayItems(data))
      .catch(error => console.error('Unable to get items.', error));
  }

  
function _displayCount(itemCount) {
    const name = (itemCount === 1) ? 'Car' : 'Cars';
  if (itemCount<1)
  {
    const tBody = document.getElementById('cars');
    tBody.innerHTML="<td class='text-center' colspan='3'><h2>No Results Please Search again</h2></td>";
  }
    document.getElementById('count').innerText = `${itemCount} ${name}`;
  }
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function showspinner(){
  setTimeout(function() {
    var element = document.getElementById('spinner');
    element.classList += " hidden";
  }, 1000);
}


  function _displayItems(data) {
     const tBody = document.getElementById('cars');
    tBody.innerHTML = '';
    showspinner();
   // document.getElementById("spinner").style.display="block";
    


    console.log(data.length);
    _displayCount(data.length);
  
    const button = document.createElement('button');
  
    data.forEach(car => {
     
        let tr = tBody.insertRow();
      
     
  
      let td2 = tr.insertCell(0);
      let make = document.createTextNode(car.make);
      td2.appendChild(make);
  
      let td3 = tr.insertCell(1);
      let model = document.createTextNode(car.model);
      td3.appendChild(model);
  
      let td4 = tr.insertCell(2);
      let x= numberWithCommas(car.price);
      let price = document.createTextNode("€"+x);
      td4.appendChild(price);
  
      let td5 = tr.insertCell(3);
      let Year= document.createTextNode(car.year);
      td5.appendChild(Year);
      //tBody.style.display="table";
    
    });
   
    cars = data;

  }
