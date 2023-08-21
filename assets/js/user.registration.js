let haveusers = false;

class User {
    constructor(name, email, birthdate, address, phone, cpf) {
        this.name = name;
        this.email = email;
        this.birthdate = birthdate;
        this.address = address;
        this.phone = phone;
        this.cpf = cpf;
        this.age = this.calculateAge();
        this.sign = this.getZodiacSign();
        this.client = this.isPossibleClient()
    }

    calculateAge() {
        const birthDate = document.getElementById("birthdate").value;
        const personYear = new Date(birthDate).getFullYear();
        const todayYear = new Date().getFullYear();
        const personMonth = new Date(birthDate).getMonth() + 1
        const todayMonth = new Date().getMonth() + 1

        const ageYear = todayYear - personYear;

        if (personMonth > todayMonth) {
            return ageYear - 1;
        }
        else {
            return ageYear;
        }
    }

    getZodiacSign() {
        let birthdate = new Date(this.birthdate);
        let day = birthdate.getDate();
        let month = birthdate.getMonth() + 1;
        console.log("Passou pelo getSigno() da class User");

        if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
            return "Capricórnio ♑";
        } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
            return "Aquário ♒";
        } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
            return "Peixes ♓";
        } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
            return "Áries ♈";
        } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
            return "Touro ♉";
        } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
            return "Gêmeos ♊";
        } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
            return "Câncer ♋";
        } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
            return "Leão ♌";
        } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
            return "Virgem ♍";
        } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
            return "Libra ♎";
        } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
            return "Escorpião ♏";
        } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
            return "Sagitário ♐";
        }
    }

    isPossibleClient() {
        if (this.age >= 18 && this.age <= 31) {
            return "Sim"
        }
        else {
            return "Não"
        }
    }
}

class userList {
    constructor() {
        this.users = [];
    }
    addUser(User) {
        this.users.push(User);
    }
}

const listPerson = new userList();

function createUser() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const birthdate = document.getElementById("birthdate").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    const cpf = document.getElementById("cpf").value;

    if(!isAnyInputEmpty()){
sendErrorMsg ("Todos os campos obrigatórios devem ser preenchidos");
    } else if (!valida_cpf(cpf)) {
        sendErrorMsg("CPF inválido")
        document.getElementById("cpf").value = "";
    } else if ()
    
    
    
    
    const person = new User(name, email, birthdate, address, phone, cpf);

    listPerson.addUser(person);
    haveusers = true;

    formatedCPF(cpf)
    cleanFields()
    valida_cpf
};

function showUsers() {
    if (haveusers) {
        document.getElementById("sub-div").classList.remove("hidden");
        document.getElementById("title-page").classList.add("hidden");
        document.getElementById("main-div").classList.add("hidden");
    }
};

function showRegister() {
    document.getElementById("sub-div").classList.add("hidden");
    document.getElementById("title-page").classList.remove("hidden");
    document.getElementById("main-div").classList.remove("hidden");

}

function formatedCPF(cpf) {
    console.log("Passou pela funcao formatedCPF()");

    let cpfArray = cpf.split("");
    let cpfFormated = cpfArray[0] + cpfArray[1] + cpfArray[2]
        + "." + cpfArray[3] + cpfArray[4] + cpfArray[5] + "."
        + cpfArray[6] + cpfArray[7] + cpfArray[8] + "-" + cpfArray[9] + cpfArray[10];
    return cpfFormated;

}

function formatedCellphone(cellphone) {
    console.log("Passou pela funcao formatedCellphone()");

    let cellphoneArray = cellphone.split("");
    let cellphoneFormated = "(" + cellphoneArray[0] + cellphoneArray[1] + ")"
        + " " + cellphoneArray[2] + cellphoneArray[3] + cellphoneArray[4]
        + cellphoneArray[5] + cellphoneArray[6] + "-"
        + cellphoneArray[7] + cellphoneArray[8]
        + cellphoneArray[9] + cellphoneArray[10];
    return cellphoneFormated;
}

function valida_cpf(cpf) {
    console.log("Passou pela funcao valida_cpf()");

    var numeros, digitos, soma, i, resultado, digitos_iguais;
    digitos_iguais = 1;
    if (cpf.length < 11)
        return false;
    for (i = 0; i < cpf.length - 1; i++)
        if (cpf.charAt(i) != cpf.charAt(i + 1)) {
            digitos_iguais = 0;
            break;
        }
    if (!digitos_iguais) {
        numeros = cpf.substring(0, 9);
        digitos = cpf.substring(9);
        soma = 0;
        for (i = 10; i > 1; i--)
            soma += numeros.charAt(10 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;
        numeros = cpf.substring(0, 10);
        soma = 0;
        for (i = 11; i > 1; i--)
            soma += numeros.charAt(11 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return false;
        return true;
    }
    else
        return false;
}

function sendErrorMsg(msg) {
    console.log("Passou pela funcao sendErrorMsg()");

    document.getElementById("error-msg").innerHTML = msg;
    document.getElementById("error-msg").classList.remove("hidden");
    setTimeout(function () {
        document.getElementById("error-msg").classList.add("hidden");
    }, 4000);
}

function cleanFields() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("birthdate").value = "";
    document.getElementById("address").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("cpf").value = "";
}
 function isAnyInputEmpty(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const birthdate = document.getElementById("birthdate").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    const cpf = document.getElementById("cpf").value;

    if(name && email && birthdate && address && phone && cpf){
        return true;
    }
    else {
        return false;
    }

 }


