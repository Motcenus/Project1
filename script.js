
let Ahmed = {
    name: "Ahmed",
    age: 20,
    city: "Eljadida"
}

let Ali = {
    name: "Ali",
    age: 30,
    city: "Casablanca"
}

let Salma = {
    name: "Salma",
    age: 100,
    city: "Sidi Bennour"
}

let Mohcine = {
    name:"Mohcine",
    age:100000,
    city:"Sidi Bennour"
}

let Otmane = {
    name:"Otmane",
    age:10050,
    city:"Sidi Bennour"
}

let people = [Ahmed,Ali,Salma,Mohcine,Otmane];

for(let i=0;i<people.length;i++){
    let card = document.createElement("div");
    card.classList.add("cardstyle");
    let namea = document.createElement("div");
    namea.innerText = people[i].name;
    card.appendChild(namea);

    let agea = document.createElement("div");
    agea.innerText = people[i].age;
    card.appendChild(agea);

    let citya = document.createElement("div");
    citya.innerText = people[i].city;
    card.appendChild(citya);
    document.body.appendChild(card);
}

