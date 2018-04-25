var username = '';

var words = [
    'perro',
    'gato',
    'carro',
    'rio',
    'finca',
    'balon',
    'nacional',
    'atletico',
    'vladimir',
    'copa',
    'campeon',
    'lago',
    'oso',
    'rana',
    'franco',
    'arbol',
    'remo',
    'santander',
    'rama',
    'lara',
    'edificio',
    'casa',
    'bate',
    'pared',
    'cuadro',
    'radamel',
    'pibe',
    'james',
    'puerta',
    'bombillo',
];


var height = 0;
var width = 0;
var allOrientations = ['horizontal','horizontalBack','vertical','verticalUp',
                       'diagonal','diagonalUp','diagonalBack','diagonalUpBack'];

    function create(height, width) {
        var puzzle = wordfind.newPuzzle(words, {
            height: height,
            width:  width,
            orientations: ['horizontal', 'vertical'],
            fillBlanks: true,
            preferOverlap: true
        });

        var table = arrayToTable(puzzle, {
            thead: true,
            attrs: {class: 'table'}
        })

        $('.letter-soup').append(table);
    }

    function create_soup() {
        var gamePuzzle = wordfindgame.create(words, '#puzzle-container', '#puzzle-words');
        $("#solveBTN").click(function(){
            // Solve the puzzle !
            var result = wordfindgame.solve(gamePuzzle, words);
            parar();
        });
    }


    var centesimas = 0;
    var segundos = 0;
    var minutos = 0;
    var horas = 0;
    function inicio () {
        control = setInterval(cronometro,10);
    }
    function parar () {
        clearInterval(control);
    }
    function reinicio () {
        clearInterval(control);
        centesimas = 0;
        segundos = 0;
        minutos = 0;
        horas = 0;
        Centesimas.innerHTML = ":00";
        Segundos.innerHTML = ":00";
        Minutos.innerHTML = ":00";
        Horas.innerHTML = "00";
    }
    function cronometro () {
        if (centesimas < 99) {
            centesimas++;
            if (centesimas < 10) { centesimas = "0"+centesimas }
            Centesimas.innerHTML = ":"+centesimas;
        }
        if (centesimas == 99) {
            centesimas = -1;
        }
        if (centesimas == 0) {
            segundos ++;
            if (segundos < 10) { segundos = "0"+segundos }
            Segundos.innerHTML = ":"+segundos;
        }
        if (segundos == 59) {
            segundos = -1;
        }
        if ( (centesimas == 0)&&(segundos == 0) ) {
            minutos++;
            if (minutos < 10) { minutos = "0"+minutos }
            Minutos.innerHTML = ":"+minutos;
        }
        if (minutos == 59) {
            minutos = -1;
        }
        if ( (centesimas == 0)&&(segundos == 0)&&(minutos == 0) ) {
            horas ++;
            if (horas < 10) { horas = "0"+horas }
            Horas.innerHTML = horas;
        }
    }

$(function() {
    $( "form" ).submit(function( event ) {
        event.preventDefault();
        height =  parseInt($(".form-heigth").val()),
        width =  parseInt($(".form-width").val()),
        $('.player').show();
        $('.player-name').text($(".form-name").val() + ' Fecha de juego:' + new Date());
        $('.letter-soup').show();
        inicio();
        create(height, width);

    });

    $( ".random" ).on('click', function( event ) {
        event.preventDefault();
        $('.player').show();
        var name = $(".form-name").val();
        if (name) {
            $('.player-name').text($(".form-name").val() + ' Fecha de juego:' + new Date());
        } else {
            $('.player-name').text('Jugador anónimo  Fecha de juego:' + new Date());
        }

        $('.soup').show();
        inicio();
        create_soup();

        $("#puzzle-container button").on('mousedown', function() {
            setTimeout(function(){
                if ($("#puzzle-container button").first().hasClass( "complete" )) {
                    parar();
                }
            }, 1000);
        });

    });

});