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
// Crea la sopa de letras con el tamaño que ingresa el usuario
    function create(height, width) {
        var puzzle = wordfind.newPuzzle(words, {
            height: height,
            width:  width,
            orientations: ['horizontal', 'vertical'],
            fillBlanks: true,
            preferOverlap: true
        });

    // envío la sopa de letras "puzzle" a la libreria arraytotable para pintar la tabla en el html
        var table = arrayToTable(puzzle, {
            thead: true,
            attrs: {class: 'table'}
        })
        //  se envia al html
        $('.letter-soup').append(table);
    }

    // crea la sopa según la librería wordfind, solamnete recibe las palabras que define arriba
    function create_soup() {
        var gamePuzzle = wordfindgame.create(words, '#puzzle-container', '#puzzle-words');
        $("#solveBTN").click(function(){
            // Solve the puzzle !
            var result = wordfindgame.solve(gamePuzzle, words);
            // para el tiempo
            parar();
        });
    }

    // Toda la Funcion del reloj
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
    //  corre el tiempo
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
//  Ejecut ale envío del formulario
$(function() {
    $( "form" ).submit(function( event ) {
        event.preventDefault();
        //  capturo tamaños
        height =  parseInt($(".form-heigth").val()),
        width =  parseInt($(".form-width").val()),
        // muestra el bienvenido
        $('.player').show();
        // muestro nombre y fecha
        $('.player-name').text($(".form-name").val() + ' Fecha de juego:' + new Date());
        // muestro caja donde irá la sopa
        $('.letter-soup').show();
        //  arranca el tiempo
        inicio();
        //  crea la sopa
        create(height, width);

    });

    // funcion de creación de la sopa
    $( ".random" ).on('click', function( event ) {
        event.preventDefault();
        // muestra el bienvenido
        $('.player').show();
        // captura el nombre si viene
        var name = $(".form-name").val();
        //  valida si pone el nom,bre o pone anonimo
        if (name) {
            $('.player-name').text($(".form-name").val() + ' Fecha de juego:' + new Date());
        } else {
            $('.player-name').text('Jugador anónimo  Fecha de juego:' + new Date());
        }
        //  muestra la caja donde irá la sopa
        $('.soup').show();
        //  arranca el tiempo
        inicio();
        //  crea la sopa
        create_soup();

        //  para el reloj si se completa la sopa
        $("#puzzle-container button").on('mouseup', function() {
            setTimeout(function(){
                if ($("#puzzle-container button").first().hasClass( "complete" )) {
                    parar();
                }
            }, 1000);
        });

    });

});