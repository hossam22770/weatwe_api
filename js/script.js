let week=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let month=['Jan.','Feb.','Mar.','Apr.','May','Jun.','Jul.','Aug.','Sep.','Oct.','Nov.','Dec.']
let search=document.getElementById('search');
let searchbtn=document.getElementById('searchbtn');
let city=document.getElementById('city');
let currentTem=document.getElementById('curr-tem');
let condition=document.getElementById('condition');
let currImg=document.getElementById('currImg');
let currday=document.getElementById('currTIM');
let currentdate=document.getElementById('currdat');
let nextday1=document.getElementById('nextday1');
let nextday2=document.getElementById('nextday2');
let nexdayT=document.getElementById('nexdayT');
let mnextt=document.getElementById('mnextt');
let nextdaycon=document.getElementById('nextdaycon');
let nextdayicon= document.getElementById('nextdayicon');
let nexnextday=document.getElementById('nexnextday');
let nexnextdayl=document.getElementById('nexnextdayl');
let nextdaycon2= document.getElementById('nextdaycon2');
let nextdayicon2=document.getElementById('nextdayicon2');
(async function()
{
    let x=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=bd35922b37334216a6f143143213004&q=cairo&days=7`)
    let y=await x.json();
    city.innerHTML=`${y.location.name}`;
    currentTem.innerHTML=`${y.current.temp_c}  c`;
    condition.innerHTML=`${y.current.condition.text}`;
    currImg.src=`http://${y.current.condition.icon}`;
    nexdayT.innerHTML=`${y.forecast.forecastday[1].day.maxtemp_c}  c`;
    mnextt.innerHTML=`${y.forecast.forecastday[1].day.mintemp_c}  c`;
    nextdaycon.innerHTML=`${y.forecast.forecastday[1].day.condition.text}`;
    let src1=`http://${y.forecast.forecastday[1].day.condition.icon}`;
    console.log(src1);
    nextdayicon.src =src1;
    nexnextday.innerHTML=`${y.forecast.forecastday[2].day.maxtemp_c}  c`;
    nexnextdayl.innerHTML=`${y.forecast.forecastday[2].day.mintemp_c}  c`;
    nextdaycon2.innerHTML=`${y.forecast.forecastday[2].day.condition.text}`;
    let src2=`http://${y.forecast.forecastday[2].day.condition.icon}`;
    nextdayicon2.src =src2;

  

})();
searchbtn.addEventListener('click',function()
{
 gitdata();
})
search.addEventListener('keyup',function()
{
    if ((search.value).length ==3)
    {
        let get=search.value;
        gitdata(get);
    }
})
   

async function gitdata(c)
{
    let x=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=bd35922b37334216a6f143143213004&q=${c}&days=7`)
    let y=await x.json();
   
    city.innerHTML=`${y.location.name}`;
    currentTem.innerHTML=`${y.current.temp_c}   c`;
    condition.innerHTML=`${y.current.condition.text}`;
    currImg.src=`http://${y.current.condition.icon}`;
    nexdayT.innerHTML=`${y.forecast.forecastday[1].day.maxtemp_c}  c`;
    mnextt.innerHTML=`${y.forecast.forecastday[1].day.mintemp_c}  c`;
    nextdaycon.innerHTML=`${y.forecast.forecastday[1].day.condition.text}`;
    let src1=`http://${y.forecast.forecastday[1].day.condition.icon}`;
    console.log(src1);
    nextdayicon.src =src1;
    nexnextday.innerHTML=`${y.forecast.forecastday[2].day.maxtemp_c}  c`;
    nexnextdayl.innerHTML=`${y.forecast.forecastday[2].day.mintemp_c}  c`;
    nextdaycon2.innerHTML=`${y.forecast.forecastday[2].day.condition.text}`;
    let src2=`http://${y.forecast.forecastday[2].day.condition.icon}`;
    nextdayicon2.src =src2;
    
}
(function date()
{
    let d= new Date;
    currday.innerHTML=` ${ week[d.getUTCDay()]}`;
    currentdate.innerHTML=`${d.getUTCDate()} ${month[d.getMonth()]}`;
    if(d.getUTCDay()==6)
    {
        nextday1.innerHTML=`${week[0]}`;
    }
    else
    {
        nextday1.innerHTML=`${week[d.getUTCDay()+1]}`;
    }
    if(d.getUTCDay()==5)
    {
        nextday2.innerHTML=`${week[0]}`;
        
    }
    else
    {
        nextday2.innerHTML=`${week[d.getUTCDay()+2]}`;
        
    }
})();