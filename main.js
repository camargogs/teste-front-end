function Usuario( name, cpf, phone, email){
    this.name = name;
    this.cpf = cpf;
    this.phone = phone;
    this.email = email;
}

var users = JSON.parse(localStorage.getItem("usuarios"));

if(users.length<=3 ){
    var user = [
        {
          "name": "My name 1",
          "cpf": "04080757247",
          "phone": "11987654321",
          "email": "myemail1@test.com.br"
        },
        {
          "name": "My name 2",
          "cpf": "77797584192",
          "phone": "11987654321",
          "email": "myemail2@test.com.br"
        },
        {
          "name": "My name 3",
          "cpf": "45486737688",
          "phone": "11987654321",
          "email": "myemail3@test.com.br"
        }
    ]
    localStorage.setItem("usuarios", JSON.stringify(user));
}

function submeteu(){

    document.getElementById("loader").style.display = "block";
    document.getElementById("submit_button").style.display = "none";

    var users = JSON.parse(localStorage.getItem("usuarios"));


   
var nome = document.forms["form"]["input_nome"].value; 
var email = document.forms["form"]["input_email"].value;
var cpf = document.forms["form"]["input_cpf"].value;
var telefone = document.forms["form"]["input_telefone"].value;

var user1 = new Usuario(nome, cpf, telefone, email);

var users = JSON.parse(localStorage.getItem("usuarios"));

users.push(user1);
localStorage.setItem("usuarios", JSON.stringify(users));
}

function deletar(r){
    var i = r.parentNode.rowIndex;
    var users = JSON.parse(localStorage.getItem("usuarios"));
    console.log(users[i-2]);
    users.splice(i-2, 1);
    localStorage.setItem("usuarios", JSON.stringify(users));
    document.getElementById("contato_table").deleteRow(i);
}
function contatos(){
    var usu = JSON.parse(localStorage.getItem("usuarios"));
        for(var i=0; i<usu.length; i++){
            var tr = document.createElement('TR');
            tr.innerHTML = '<input id= "btn_del" type ="button" onclick="deletar(this)" value="Deletar">';
            for(var a =0; a<1 ; a++){
                var td = document.createElement('TD');
                td.innerHTML = usu[i].name;
                tr.appendChild(td);
                var td = document.createElement('TD');
                td.innerHTML = usu[i].email;
                tr.appendChild(td);
                var td = document.createElement('TD');
                td.innerHTML = usu[i].cpf;
                tr.appendChild(td);
                var td = document.createElement('TD');
                td.innerHTML = usu[i].phone;
                tr.appendChild(td);
            }  
           document.getElementById("contato_table").appendChild(tr);
        }
}



