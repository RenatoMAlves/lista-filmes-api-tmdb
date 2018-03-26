$('#ajax').click(function(){
    $("#ajax>i").removeClass("d-none");
    $("#ajax").addClass("disabled");
    $('#ajax').attr("disabled", "true");
    var apiKey = '8e189cbbf1e7c1726cb9d6022880e54b';
    var servidor = 'https://api.themoviedb.org/3/movie/top_rated?api_key='+apiKey+'&language=en-US&page=1';
    $.ajax({
        type: "GET",
        datatype: "json",
        url: servidor,
        success: function(data){
            $("ul>li").remove();
            $.each( data.results, function( key, value ) {
                $('#teste>div').append('<div class="card"><img class="card-img-top p-2" src="https://image.tmdb.org/t/p/w500/'
                +value.poster_path+'" alt="Card image cap"><div class="card-body"><h5 class="card-title">'
                +value.title+'</h5><p class="card-text">'
                +reduzTamanho(value.overview)+'</p><div class="card-footer"><small class="text-muted">Data de Lançamento: '
                +value.release_date+'</small></div></div></div>');
            });
            $("#ajax").removeClass("disabled");
            $("#ajax").removeAttr("disabled");
            $("#ajax>i").addClass("d-none");
        }
    });
}); 

function reduzTamanho(texto){
    texto = texto.substr(0, 50);
    texto = texto+'...';
    return texto;
}