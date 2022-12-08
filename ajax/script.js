var dados = new FormData();

dados.append('nome', 'Rafael');
dados.append('idade', '30');
dados.append('endereco', 'Perdoes');

$.ajax({
    url: "meuscript.php.php",
    type: "POST",
    data: dados,
    processData: false,
    contentType: false,
    sucess: function(data){
        console.log(data);
    }
}).done(function(data){
    $('#main').text(data);
});