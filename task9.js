var request = new XMLHttpRequest();

request.open('GET', 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json', true);

request.send();

request.onload = function () {

    var data = JSON.parse(request.response);
    console.log(data);


     // 1.a Get all countries from Asia continent/region using filter function

     let asia = data.filter((item) => item.region === "Asia")
     console.log(asia)

     // 1.b get all the countries witha population lessthan 20lakhs using filter function

     let result = data.filter((item) => item.population < 200000);
     console.log(result);

     // 1.c Print the following details name, capital, flag using forEach function
    
     data.forEach(ele=>console.log(ele.name,ele.capital,ele.flag));

     // 1.d Print the total population of countries using reduce function

     let totalpopulation= data.reduce((acc,item)=>acc+item.population,0);
        console.log(totalpopulation);

     //1.e Print the country which uses US Dollars as currency.

        let countires=data.filter((x)=>{
            for(let i in x.currencies) {
                if(x.currencies[i].code==="USD")
                return true;
            }
        });
        console.log(countires);
}


