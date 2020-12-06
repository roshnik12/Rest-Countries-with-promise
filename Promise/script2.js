let url = "https://restcountries.eu/rest/v2/all";

function restCountries(url){
    return new Promise((resolved,reject)=> {
        let xhr = new XMLHttpRequest();
        xhr.open("GET",url, true);
        xhr.addEventListener('load',function(){
            if(this.readyState === 4 && this.status === 200) resolved(xhr.responseText);
            else if(this.readyState === 4 && this.status !== 200) reject("Can't fetch the requested data");
        }) 
        xhr.send();
    })
}

restCountries(url)
.then((response) => {countries(JSON.parse(response));})
.catch((error) => console.error(error));