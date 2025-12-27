const form = document.getElementById("searchForm");
form.addEventListener("submit", (event) => {
  event.preventDefault(); 
  const place = document.getElementById("searchInput").value;

  function updatethem(data) {
    // console.log(data);
    const city = document.getElementById("city");
    city.innerHTML = `${data.location.name}`; 

    const temp=document.getElementById('temp');
    temp.innerHTML=`${data.current.temp_c}`

    const humidity=document.getElementById('humidity');
    humidity.innerHTML=`${data.current. humidity}`;

    const wind=document.getElementById('wind');
    wind.innerHTML=`${data.current. wind_kph}`;

    const pressure=document.getElementById('pressure');
    pressure.innerHTML=`${data.current. pressure_in}`;

    const uv=document.getElementById('uv');
    uv.innerHTML=`${data.current.uv}`;
  }
  const prom=fetch(`http://api.weatherapi.com/v1/current.json?key=dd8ac1a24a814310a27135539250509&q=${place}&aqi=yes`);

prom.then((data)=>{
    const pro=data.json();
    pro.then((data)=>{
    updatethem(data);
});
})
  });
