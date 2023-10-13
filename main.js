const p=fetch('https://goweather.herokuapp.com/weather/indiya')
p.then((value1)=>{
    console.log(value1.status) 
    console.log(value1.ok) 
return value1.json()
}).then((value)=>{
console.log(value)
})