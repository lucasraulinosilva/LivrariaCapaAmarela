numeroLivros = 0
livros = document.getElementById("livros")

$.get("https://apilivraria.onrender.com/livros", function (data) {
    numeroLivros = data["numberOfElements"]
    for(i = 0; i < numeroLivros; i++) {
        card = document.createElement("div")
        body = document.createElement("div")
        titulo = document.createElement("h5")
        row = document.createElement("div")
        $(row).attr("class", "col-4")
        $(card).attr("class", "card mt-2 mb-2")
        $(body).attr("class", "card-body")
        $(titulo).attr("class", "fw-bold card-title")
        $(titulo).html(data["content"][i]["nome"])
        body.append(titulo)
        $(body).append('<p><tag class="fw-bold">Id: </tag>'+ data["content"][i]["id"] +'</p>')
        $(body).append('<p><tag class="fw-bold">Autor: </tag>'+ data["content"][i]["autor"] +'</p>')
        $(body).append('<p><tag class="fw-bold">Tema: </tag>' + data["content"][i]["tema"] +'</p>')
        card.append(body)
        row.append(card)
        livros.append(row)
    }
});


$(document).ready(function() {
    $("#pesquisarFilme").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#livros .col-4").filter(function() {
            $(this).toggle($(this).text()
            .toLowerCase().indexOf(value) > -1)
        });
    });
});