let searchInput=document.getElementById('search')


getweather('lond')
 async function myLocation(){
  try{
    let position=await new Promise((resolve,reject)=>{
      navigator.geolocation.getCurrentPosition(resolve, reject);
    })
    let lat=position.coords.latitude
    let lon=position.coords.longitude
    let coords=`${lat},${lon}`
    localStorage.setItem('location',JSON.stringify(coords))
     return coords;
    }
    catch(error)
    {
      if(localStorage.getItem('location')!=null){
      localStorage.removeItem('location')}
    }
    
  }
(async function() {
  const location = await myLocation(); 
  getweather(location);                
})();

let months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]
let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


let weather

async function getweather(name){
 let w=(await fetch(`https://api.weatherapi.com/v1/forecast.json?key=af46eeb5540542d3a3141641252710&q=${name}&days=3&aqi=yes&alerts=yes`))
weather=await w.json()
console.log(weather)
display()


}

function display(){

    let box=``
    for(let i=0;i<3;i++){
          let d = new Date();
  d.setDate(d.getDate() + i);
  let today = d.getDay();
  let dayNum = d.getDate();
  let month = months[d.getMonth()];

  

        if(i==0){
            box+=`<div class="col-lg-4 p-1">
            <div class="forecast ">
              <div class="header d-flex justify-content-between p-2">
                <p >${days[today]}</p>
                <p >${dayNum} ${month}</p>
              </div>
              <div class="content p-3">
                <p >${weather.location['name']}</p>
                <h1 class=" d-inline-block ">${weather.current['temp_c']} <sup>o</sup>C
                </h1>
                <img src="${"https:" + weather.current.condition['icon']}" class="icon ">
                <span class=" text-info py-2 d-block">${weather.current.condition['text']}</span>
                <div class="icons py-2">
                <img src="images/icon-umberella.png" alt="icon-umberella">  <span class="humidity pe-2"> ${weather.current.humidity +'%'} </span>
                  <img src="images/icon-wind.png" alt="icon-wind"><span class="speed pe-2">${weather.current.wind_kph + 'Km/h'}</span>
                 <img src="images/icon-compass.png" alt="icon-compass"> <span class="dir">${weather.current.wind_dir}</span>
                </div>
              </div>
            </div>
          </div>`
        }
        else{
            box+=`<div class="col-lg-4 p-1 text-center">
            <div class="forecast h-100 ">
              <div class="header d-flex justify-content-between p-2">
                <p >${days[today]}</p>
                <p >${dayNum} ${month}</p>
              </div>
              <div class="content py-4">
                </h2><img src="${"https:" + weather.forecast.forecastday[i].day.condition['icon']}" class="icon">
                <h2 class=" py-2 ">${weather.forecast.forecastday[i].day['maxtemp_c']} <sup>o</sup>C
                <h6>${weather.forecast.forecastday[i].day['mintemp_c']}<sup>o</sup>C</h6>
                
                <span class=" text-info py-2">${weather.forecast.forecastday[i].day.condition['text']}</span>
               
              </div>
            </div>
          </div>`
        }
    }
    document.getElementById('row').innerHTML=box
}


searchInput.addEventListener('input',  function () {
  if (searchInput.value.trim() === '') {
    
     
      if (localStorage.getItem('location') != null) {
        
        getweather(JSON.parse(localStorage.getItem('location')));
      } else {
        getweather('London');
      }
     
  } else {
    
    getweather(searchInput.value);
  }
});
