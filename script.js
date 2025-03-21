function calcularIdade() {
    const birthdate = document.getElementById('datanascimento').value;
    const resultado = document.getElementById('resultado');

    if (!birthdate) {
        resultado.innerHTML = "Por favor, insira uma data de nascimento.";
        return;
    }
    
    const dataNascimento = new Date(birthdate);
    const hoje = new Date();

    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const mesAtual = hoje.getMonth();
    const mesNascimento = dataNascimento.getMonth();

    // Verifica se já fez aniversário esse ano
    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && hoje.getDate() < dataNascimento.getDate())) {
        idade--;
    }

    resultado.innerHTML = `Você tem <strong>${idade}</strong> anos.`;
}
