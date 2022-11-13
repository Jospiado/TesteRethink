//receber o seletor do formulário
var cadForm= document.getElementById("cad-usuario-form");

let usuarios = new Array();

function InsertIdArray(){
    let array1 = new Array();
    
    if(localStorage.MYusuarios){
        usuarios= JSON.parse(localStorage.getItem('MYusuarios'));
    }

    for(var i in usuarios){
        var id = parseInt(i)+1;
        var nome = usuarios[i].nome
        var idade = usuarios[i].idade
        array1.push({id, nome , idade })
  
        localStorage.MYusuarios = JSON.stringify(array1);

        }
}

function showItemsSelected(){
    var nome = document.getElementById("procura").value;
    let resultDIV = document.getElementById('resultados');
    resultDIV.innerHTML = "";

    if(localStorage.MYusuarios){
        usuarios= JSON.parse(localStorage.getItem('MYusuarios'));
    }

    for(var i in usuarios){
        if(usuarios[i].nome == nome){
        let p = document.createElement("p");
        let d = document.createElement("p");
        let e = document.createElement("p");

        if(usuarios[i].id != null){
            e.innerHTML = 'Id: '+ usuarios[i].id;
        }
        p.innerHTML = 'Nome: '+ nome;
        d.innerHTML = 'Idade: '+ usuarios[i].idade;
        resultDIV.append(e);
        resultDIV.append(document.createElement("br"))
        resultDIV.append(p);
        resultDIV.append(document.createElement("br"))
        resultDIV.append(d);
  
        }
    }
}
function showItemsAll(){
    let resultDIV = document.getElementById('resultados');
    resultDIV.innerHTML = "";

    if(localStorage.MYusuarios){
        usuarios= JSON.parse(localStorage.getItem('MYusuarios'));
    }

    for(var i in usuarios){
        let p = document.createElement("p");
        let d = document.createElement("p");
        let e = document.createElement("p");


        var nome = usuarios[i].nome
        var tmp = nome.split(" ");
        nome = tmp[0]
        
        if(usuarios[i].id != null){
            e.innerHTML = 'Id: '+ usuarios[i].id;
        }
        p.innerHTML = 'Nome: '+ nome;
        d.innerHTML = 'Idade: '+ usuarios[i].idade;
        resultDIV.append(e);
        resultDIV.append(document.createElement("br"))
        resultDIV.append(p);
        resultDIV.append(document.createElement("br"))
        resultDIV.append(d);
    }
}

function RightAge(){
    let resultDIV = document.getElementById('resultados');
    resultDIV.innerHTML = "";

    if(localStorage.MYusuarios){
        usuarios= JSON.parse(localStorage.getItem('MYusuarios'));
    }

    for(var i in usuarios){
        if(usuarios[i].idade >=18){
        let p = document.createElement("p");
        let d = document.createElement("p");
        let e = document.createElement("p");
        
        var nome = usuarios[i].nome
        var tmp = nome.split(" ");
        nome = tmp[0]

        if(usuarios[i].id != null){
            e.innerHTML = 'Id: '+ usuarios[i].id;
        }
        p.innerHTML = 'Nome: '+ nome;
        d.innerHTML = 'Idade: '+ usuarios[i].idade;
        resultDIV.append(e);
        resultDIV.append(document.createElement("br"))
        resultDIV.append(p);
        resultDIV.append(document.createElement("br"))
        resultDIV.append(d);
        }
    }
}
    
function AverageAge(){
    let resultDIV = document.getElementById('resultados');
    resultDIV.innerHTML = "";

    if(localStorage.MYusuarios){
        usuarios= JSON.parse(localStorage.getItem('MYusuarios'));
    }
    var soma = 0;
    
    for(var i in usuarios){
        soma= soma + parseFloat(usuarios[i].idade);
    }
    
    var quantia = parseFloat(i)+1;
    var media = soma/quantia;

    let p = document.createElement("p");

    p.innerHTML = 'A media de idade de todos os usuários é: '+ media.toFixed(2);
    resultDIV.append(p);
    resultDIV.append(document.createElement("br"))
}


function addItem(){
    if(localStorage.MYusuarios){
        usuarios = JSON.parse(localStorage.getItem('MYusuarios'));
    }

    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    
    usuarios.push({nome,idade})
    
    document.getElementById("nome").value = ''
    document.getElementById("idade").value = ''
    document.getElementById("prof").value = '';
    document.getElementById("email").value = '';
    document.getElementById("tel").value = '';
    document.getElementById("data").value = '';

    localStorage.MYusuarios = JSON.stringify(usuarios);
    
}

//aguardar o usuario clicar no botao cadastrar do formulario
cadForm.addEventListener("submit", (e) => {
    
    e.preventDefault();

    addItem();
});