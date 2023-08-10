function calcular() {
    var MediadeHoras = 0
    var semana1 = Number(document.getElementById("Semana1").value)
    var semana2 = Number(document.getElementById("Semana2").value)
    var semana3 = Number(document.getElementById("Semana3").value)
    var semana4 = Number(document.getElementById("Semana4").value)
    var MediadeHoras = ((semana1 + semana2 + semana3 + semana4)/4)
    document.getElementById("resultado").innerHTML = MediadeHoras
    }
    function Voltar(){
        window.location.href = "index.html"
    }