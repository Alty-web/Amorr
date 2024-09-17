function logar() {
    var login = document.getElementById("login").value
    var senha = document.getElementById("senha").value

    if (login === "Ana Beatriz" && senha === "190623") {
        window.location.href = 'sla/sla.html'
    } else {
        document.getElementById('mensagem').textContent = '[ERRO] Usuario ou senha incorreto.'
        document.getElementById('mensagem').style.color = 'red'
    }
}

document.getElementById('butao').addEventListener('click', logar)