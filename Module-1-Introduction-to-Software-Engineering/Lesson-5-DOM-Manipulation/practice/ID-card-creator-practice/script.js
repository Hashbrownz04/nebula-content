const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const fullName = event.target.fullName.value;
    const idNumber = event.target.IDnumber.value;
    const address = event.target.Address.value;
    const funFact = event.target.funFact.value;

    const idCard = document.createElement('div');
    const info = document.createElement('ul');
    const name = document.createElement('li');
    const id = document.createElement('li');
    const location = document.createElement('li');
    const fact = document.createElement('li');
    const pic = document.createElement('img');

    const bodyElement = document.querySelector('body');

    idCard.appendChild(pic);
    idCard.appendChild(info);

    pic.setAttribute("src", "../ID-card-creator-practice/resources/ProfPic4Teams_2024-03-18 102226.png");


    info.appendChild(name);
    info.appendChild(id);
    info.appendChild(location);
    info.appendChild(fact);

    name.innerText = `NAME: ${fullName}`;
    id.innerText = `ID#: ${idNumber}`;
    location.innerText = `ADDRESS: ${address}`;
    fact.innerText = `FUNFACT: ${funFact}`;
    
    bodyElement.appendChild(idCard);
})