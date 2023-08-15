var MesInicial = new Date().getMonth() + 1
var AnoInicial = new Date().getFullYear()
var lista = ["2023-08-23", "2023-08-24", "2023-08-15"]
var locais = ["Local 1", "Local 2", "Local 3"]
var Horarios = ["9:00", "10:00", "11:00"]
function Criar(Mes, Ano){
    var div = document.getElementById("call")
    var Tab = document.createElement("table");
    Tab.id = "Tabela"
    var Sem = new Date(Ano + "-" + Mes.toString() + "-01").getDay();
    var chaves = {
        1: 31,
        2: 28,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
    };
    var mesextenso = {
        1: "Janeiro",
        2: "Fevereiro",
        3: "Março",
        4: "Abril",
        5: "Maio",
        6: "Junho",
        7: "Julho",
        8: "Agosto",
        9: "Setembro",
        10: "Outubro",
        11: "Novembro",
        12: "Dezembro"
    }
    var semana = {
        0: "Dom",
        1: "Seg",
        2: "Ter",
        3: "Qua",
        4: "Qui",
        5: "Sex",
        6: "Sab",
    }
    var i = 0;
    var cabecalho = document.createElement("tr");
    for (var diaSemana = 0; diaSemana < 7; diaSemana++) {
        var celulaCabecalho = document.createElement("th");
        celulaCabecalho.classList.add("texto")
        celulaCabecalho.textContent = semana[diaSemana];
        cabecalho.appendChild(celulaCabecalho);
    }
    Tab.appendChild(cabecalho);
    var espaco = document.createElement("tr")
    var dia = chaves[Mes];
    var diaqvaiaparece = 1;
    while (dia > diaqvaiaparece) {
        var i = 0;
        while (diaqvaiaparece <= dia && i < 7) {
            while (Sem > 0){                  
                var celula = document.createElement("td");
                celula.textContent = "-"
                celula.classList.add("texto")
                Tab.appendChild(celula);
                i += 1
                Sem -= 1
            }
            if (Mes > 9){
                var MesForm = Mes.toString()
            }
            else{
                var MesForm = "0" + Mes.toString()
            }
            if (diaqvaiaparece > 9){
                var DiaForm = diaqvaiaparece.toString()
            }
            else{
                var DiaForm = "0" + diaqvaiaparece.toString()
            }
            var DataAtual = Ano + "-" + MesForm + "-" + DiaForm
            console.log("DataAtual:", DataAtual);
            console.log("lista:", lista);
            if (lista.includes(DataAtual)){
                var celula = document.createElement("td");
                celula.textContent = diaqvaiaparece;
                celula.setAttribute("DATA", DataAtual)
                celula.addEventListener("mouseover", Mouse)
                celula.classList.add("texto1")
                Tab.appendChild(celula);
                i += 1;
                diaqvaiaparece += 1;
            }
            else {
                var celula = document.createElement("td");
                celula.textContent = diaqvaiaparece;
                celula.classList.add("texto")
                Tab.appendChild(celula);
                i += 1;
                diaqvaiaparece += 1;
            }
        
            }
        
        var espaco = document.createElement("tr")
        Tab.appendChild(espaco)
    }
    var espaco = document.createElement("tr")
    var ano = document.createElement("th")
    ano.textContent = Ano
    ano.classList.add("texto")
    var mess = document.createElement("th")
    mess.textContent = mesextenso[Mes]
    mess.classList.add("texto")
    var i = 0
    Tab.appendChild(espaco)
    Tab.appendChild(espaco)
    Tab.appendChild(ano)
    Tab.appendChild(mess)
    div.appendChild(Tab)
}

function Avn() {
    var Tab = document.getElementById("Tabela");
    Tab.parentNode.removeChild(Tab);
    if (MesInicial === 12) {
        MesInicial = 1;
        AnoInicial += 1;
    } else {
        MesInicial += 1;
    }
    Criar(MesInicial, AnoInicial);
}

function Ant() {
    var Tab = document.getElementById("Tabela");
    Tab.parentNode.removeChild(Tab);
    if (MesInicial === 1) {
        MesInicial = 12;
        AnoInicial -= 1;
    } else {
        MesInicial -= 1;
    }
    Criar(MesInicial, AnoInicial);
}
function Hj() {
    var Tab = document.getElementById("Tabela");
    Tab.parentNode.removeChild(Tab);
    var Mes = new Date().getMonth() + 1
    var Ano = new Date().getFullYear()
    Criar(Mes, Ano);
}
function Mouse(event) {
    var Especifico = event.target;
    var Data = Especifico.getAttribute("DATA");
    var Local = lista.length;
    while (Local >= 0) {
        if (Data === lista[Local]) {
            Especifico.textContent = lista[Local] + " | " + locais[Local] + " " + Horarios[Local];
            Especifico.classList.add("Tamanho")
            Especifico.addEventListener("mouseout", MouseOut)
            break;
        }
        Local -= 1;
    }
}
function MouseOut(event){
    var Especifico = event.target
    var Data = Especifico.getAttribute("DATA");
    var Local = lista.length;
    while (Local >= 0) {
        if (Data === lista[Local]) {
            Dia = lista[Local].split("-")
            Especifico.textContent = Dia[2]
            Especifico.classList.remove("Tamanho")
            Especifico.classList.add("texto1")
            Especifico.addEventListener("mouseover", Mouse)
            break;
        }
        Local -= 1;
    }
}
