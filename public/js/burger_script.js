console.log("burger_script.jsloaded");
document.querySelector("header button").addEventListener("click", makeBurger);
getBurgers();
async function getBurgers() {
    const res = await fetch("/api/burgers");
    const json = await res.json();
    console.log(json);
    displayDevoured(json);
    displayUndevoured(json);
}

function displayDevoured(json){
    let html = "";
    for(const burger of json){
        if (burger.devoured) {
            html+=`<li>${burger.burger_name}</li>`;
        } 
    }
    document.querySelector("main section:nth-of-type(2) ul").innerHTML = html;
}
function displayUndevoured(json){
    let html = "";
    for(const burger of json){
        if (!burger.devoured) {
            html+=`<li>${burger.burger_name} <button data-id="${burger.id}">Eat this Burger</button></li>`;
        } 
    }
    document.querySelector("main section:nth-of-type(1) ul").innerHTML = html;
    for (let button of document.querySelectorAll("main section:nth-of-type(1) button")){
        button.addEventListener("click", devouredBurger);
    }
}

async function devouredBurger(event) {
    const id = event.target.dataset.id;
    const res = await fetch("/api/burgers", {
        method: "PUT",
        headers: {
            "Accept":"application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({id})
    });
    const json = await res.json();
    console.log(json);
    getBurgers();          
}

async function makeBurger(){
    const input = document.querySelector("header input");
    const name = input.value.trim();
    if(name){
        input.value = "";
        const res = await fetch("/api/burgers", {
            method: "POST",
            headers: {
                "Accept":"application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name})
        });
        const json = await res.json();
        console.log(json);
        getBurgers();
    }     
}