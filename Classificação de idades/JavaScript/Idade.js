function idade() {
    var resultado;
    var idade = parseInt(document.getElementById("idade").value);
    var nome = document.getElementById("nome").value;
    // console.log(nome);
    // console.log(idade);

    if (idade < 0) {
        res = "(... erro :c - por favor digite uma idade válida!)";
    } else if (idade <= 11) {
        res = "criança";
    } else if (idade <= 20) {
        res = "adolescente";
    } else if (idade < 65) {
        res = "adulto";
    } else if (idade < 110) {
        res = "idoso";
    } else if (idade < 10 ** 200) {
        res = "Matusalém?";
    } else {
        res = "..."
    }

    document.getElementById("resultado").innerHTML = nome + " está classificado como " + res;
}