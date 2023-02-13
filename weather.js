let weather ={
    "apikey":"ab70dd6bc49d94eaec6b514bd1b70ed5",
    fetchWeather:function(){
        fetch("https://api.openweathermap.org/data/2.5/weather?q={udupi}&appid={ab70dd6bc49d94eaec6b514bd1b70ed5}"
        ).then((Response)=>Response.json())
        .then((data)) =>console.log(data));

    }
}