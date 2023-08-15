function teste(){
    var Ano = "2023"
    var Mes = "-04"
    var Dia = "-02"
    var Lista = ["2023-04-02"]
    var Data = Ano + Mes + Dia
    var div = document.getElementById("call")
    if (Data == Lista[0]){
        var Novo = document.createElement("p")
        Novo.textContent = "Cu"
        div.appendChild(Novo)
    }
}