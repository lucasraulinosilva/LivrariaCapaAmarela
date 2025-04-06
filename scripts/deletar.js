$("#deletarLivro").click(function(){
    idLivro = $("#idLivro").val()

    $.ajax({
        url: "https://apilivraria.onrender.com/livros/" + idLivro,
        type: "DELETE",
        success: function(resposta) {
            const toast = document.getElementById('livroDeletado');
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toast);
            toastBootstrap.show();
          },
          error: function(erro) {
            console.error("Erro na requisição DELETE:", erro);
          }
    });
})