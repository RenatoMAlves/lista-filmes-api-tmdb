// function start(){
//     let people;
//     $.getJSON('http://api.open-notify.org/astros.json', function(data) {
//         console.log(data)
//     });
    // loadJSON(function(respon

    // loadJSON(function(response) {
    //     var data = JSON.parse(response);
    //     people = data.people
        
    //     // for(var b in birds){
    //     //     var h2 = document.createElement('h2');
    //     //     var family = document.createTextNode(birds[b].family);
    //     //     h2.appendChild(family);
    //     //     document.body.appendChild(h2);
    //     // }
    // });
// }

$('#json').click(function(){ 
	getPessoas(function(dados) {
        $.each( dados, function( key, value ) {
            $('#teste').append( key + ": " + value + "<br/>" );
        });
	});
});

function getPessoas(callback) {
    var apiKey = '8e189cbbf1e7c1726cb9d6022880e54b';
    var servidor = 'https://api.themoviedb.org/3/movie/latest?api_key='+apiKey+'&language=en-US';

	$.getJSON(servidor, function(data) {
		callback(data);
	});
}

$('#ajax').click(function(){
    var apiKey = '8e189cbbf1e7c1726cb9d6022880e54b';
    var servidor = 'https://api.themoviedb.org/3/movie/latest?api_key='+apiKey+'&language=en-US';
    $.ajax({
        type: "GET",
        datatype: "json",
        url: servidor,
        success: function(data){
            $.each( data, function( key, value ) {
                $('#teste').append( key + ": " + value + "<br/>" );
            });
        }
    });
}); 

// function loadJSON(callback) {   
//     var xobj = new XMLHttpRequest();
//         xobj.overrideMimeType("application/json");
//     xobj.open('GET', 'http://api.open-notify.org/astros.json', true); 
//     xobj.onreadystatechange = function () {
//           if (xobj.readyState == 4 && xobj.status == "200") {
//             // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
//             callback(xobj.responseText);
//           }
//     };
//     xobj.send(null);  
//  }