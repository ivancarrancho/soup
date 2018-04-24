var username = '';

var words = ['cows', 'tracks', 'arrived', 'located', 'sir', 'seat',
   'division', 'effect', 'underline', 'view', 'annual',
   'anniversary', 'centennial', 'millennium', 'perennial',
   'artisan', 'apprentice', 'meteorologist', 'blizzard', 'tornado',
   'intensify','speed','count','consonant','someone',
   'sail','rolled','bear','wonder','smiled','angle', 'absent',
   'decadent', 'excellent', 'frequent', 'impatient', 'cell',
   'cytoplasm', 'organelle', 'diffusion', 'osmosis',
   'respiration'
];


var height = 0;
var width = 0;
var allOrientations = ['horizontal','horizontalBack','vertical','verticalUp',
                       'diagonal','diagonalUp','diagonalBack','diagonalUpBack'];

    function create(height, width) {
        var gamePuzzle = wordfindgame.create(
            words,
            '#puzzle-container',
            '#puzzle-words'
        );


        $("#solveBTN").click(function(){
            var result = wordfindgame.solve(gamePuzzle, words);
            parar();
        });

        // var words = ['cow'];
        // var puzzle = wordfind.newPuzzle(words, {
        //     // Set dimensions of the puzzle
        //     height: 3,
        //     width:  3,
        //     // or enable all with => orientations: wordfind.validOrientations,
        //     orientations: ['horizontal', 'vertical'],
        //     // Set a random character the empty spaces
        //     fillBlanks: true,
        //     preferOverlap: false
        // });

        // console.log(puzzle);

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
        $('.player-name').text($(".form-name").val());
        $('.soup').show();
        inicio();
        create(height, width);

    });
});