$("#atualizarLivro").click(function(){
    idLivro = $("#idLivro").val()
    nomeLivro = $("#nomeLivro").val()
    autorLivro = $("#autorLivro").val()
    temaLivro = $("#temaLivro").val()

    var dadosDoLivro = {
        id: idLivro,
        nome: nomeLivro,
        autor: autorLivro,
        tema: temaLivro
    };

    var dadosJson = JSON.stringify(dadosDoLivro);

    $.ajax({
        url: "https://apilivraria.onrender.com/livros",
        type: "PUT",
        contentType: "application/json",
        data: dadosJson,
        success: function(resposta) {
            const toast = document.getElementById('livroAtualizado');
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toast);
            toastBootstrap.show();
          },
          error: function(erro) {
            console.error("Erro na requisição POST:", erro);
          }
    });
})