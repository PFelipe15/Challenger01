const listClients = [];
//List Clients é o nosso array que funcionará como database nele será armazenado os dados "age" e "gender" para cada item registrado

function cadClient() {
  const age = document.getElementById("ageId").value;
  const gender = document.getElementById("genderId").value;

  if (age >= 0) {
    listClients.push({
      age: age,
      gender: gender,
    });
    alert("Registrado com sucesso!");
  } else {
    alert("Por favor, digite uma Idade maior que 0!");
  }

  let checkBoxM = document.getElementById("genderIdFilterM");
  let checkBoxF = document.getElementById("genderIdFilterF");
  if (checkBoxM.checked) {
    getClientsM();
  } else {
    return;
  }

  if (checkBoxF.checked) {
    getClientsF();
  } else {
    return;
  }
}

function getClientsM() {
  const out = document.getElementById("outputMas");
  out.innerHTML = "";

  const filter = listClients.filter((item) => item.gender === "M");
  if (filter.length === 0) {
    out.innerHTML = "Não há Registros!";
  }
  let order = document.getElementById("orderId").value;
  const sortedClients = filter.sort((a, b) => {
    if (order === "asc") {
      return a.age > b.age ? 1 : -1;
    }
    return a.age < b.age ? 1 : -1;
  });

  sortedClients.map((item) => {
    out.innerHTML += `<fieldset>
    Idade: ${item.age} <br>
    Genero: ${item.gender} <br> 
    </fieldset> 
    
    `;
  });
}

function getClientsF() {
  const out = document.getElementById("outputFem");
  out.innerHTML = "";

  const filter = listClients.filter((item) => item.gender === "F");
  if (filter.length === 0) {
    out.innerHTML = "Não há Registros!";
  }

  let order = document.getElementById("orderId").value;
  const sortedClients = filter.sort((a, b) => {
    if (order === "asc") {
      return a.age > b.age ? 1 : -1;
    }
    return a.age < b.age ? 1 : -1;
  });
  sortedClients.map((item) => {
    out.innerHTML += `<fieldset>
    Idade: ${item.age}<br>
    Genero: ${item.gender} <br> 
    </fieldset> 
    
    `;
  });
}

function refreshAll(){
  document.location.reload(true);
 
}
