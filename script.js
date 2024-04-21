
let btn = document.getElementById("btn");
let nameinput = document.getElementById("name");
let ageinput = document.getElementById("age");
let cityeinput = document.getElementById("city");
let i=0;

let people = [];

let peoplesize = people.length;

btn.onclick = function() {
    if(nameinput.value !="") {
        let person = {
            name:nameinput.value,
            age:ageinput.value,
            city:cityeinput.value
        }
        nameinput.value = "";
        ageinput.value = "";
        cityeinput.value = "";
        people.push(person);
        delete person;
    } else {
        alert("Enter a person");
    }

    
    if (peoplesize!=people.length){
        for(i;i<people.length;i++){
            let card = document.createElement("div");
            card.classList.add("cardstyle");
            let namea = document.createElement("div");
            namea.innerText = "Name: "+ people[i].name;
            card.appendChild(namea);
        
            let agea = document.createElement("div");
            agea.innerText = "Age: "+ people[i].age;
            card.appendChild(agea);
        
            let citya = document.createElement("div");
            citya.innerText = "City: "+ people[i].city;
            card.appendChild(citya);
            document.body.appendChild(card);
        }
    }
}

