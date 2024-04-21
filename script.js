
let btn = document.getElementById("btn");
let nameinput = document.getElementById("name");
let ageinput = document.getElementById("age");
let cityeinput = document.getElementById("city");


// let Ahmed = {
//     name: "Ahmed",
//     age: 20,
//     city: "Eljadida"
// }

// let Ali = {
//     name: "Ali",
//     age: 30,
//     city: "Casablanca"
// }

// let Salma = {
//     name: "Salma",
//     age: 100,
//     city: "Sidi Bennour"
// }

// let Mohcine = {
//     name:"Mohcine",
//     age:100000,
//     city:"Sidi Bennour"
// }

// let Otmane = {
//     name:"Otmane",
//     age:10050,
//     city:"Sidi Bennour"
// }

let people = [];


btn.onclick = function() {
    let person = {
        name:nameinput.value,
        age:ageinput.value,
        city:cityeinput.value
    }

    people.push(person);

    delete person;
    
    for(let i=0;i<people.length;i++){
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


