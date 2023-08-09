$(document).ready(function(){
    var characters = [
        {name:"Albus Dumbledore", role:"staff", house:"Gryffindor", gender:"m", alignment:"good"},
        {name:"Nymphadora Tonks", role:"", house:"Hufflepuff", gender:"f", alignment:"good"},
        {name:"Ron Weasley", role:"student", house:"Gryffindor", gender:"m", alignment:"good"},
        {name:"Ginny Weasley", role:"student", house:"Gryffindor", gender:"f", alignment:"good"},
        {name:"Hermione Granger", role:"student", house:"Gryffindor", gender:"f", alignment:"good"},
        {name:"Mad-eye Moody", role:"staff", house:"", gender:"m", alignment:"good"},
        {name:"Prof McGonagall", role:"staff", house:"Gryffindor", gender:"f", alignment:"good"},
        {name:"Harry Potter", role:"student", house:"Gryffindor", gender:"m", alignment:"good"},
        {name:"Draco Malfoy", role:"student", house:"Slytherin", gender:"m", alignment:"evil"},
        {name:"Hagrid", role:"staff", house:"Gryffindor", gender:"m", alignment:"good"},
        {name:"Luna Lovegood", role:"student", house:"Ravenclaw", gender:"f", alignment:"good"},
        {name:"Voldemort", role:"", house:"Slytherin", gender:"m", alignment:"evil"},
        {name:"Bellatrix Lestrange", role:"", house:"Slytherin", gender:"f", alignment:"evil"},
        {name:"Severus Snape", role:"staff", house:"Slytherin", gender:"m", alignment:"unknown"}
    ];

    var uniqueHouses = [];
    var $table = $('table');
    var $tbody = $table.find('tbody');
    var $resetButton = $('#resetButton');

    characters.forEach(function(character) {
        if (uniqueHouses.indexOf(character.house) === -1) {
            uniqueHouses.push(character.house);
            $('#buttons').append($('<button>').text(character.house).attr('data-house', character.house));
        }

        var $row = $('<tr>').attr('data-house', character.house);
        $row.append($('<td>').text(character.name));
        $row.append($('<td>').text(character.role));
        $row.append($('<td>').text(character.house));
        $row.append($('<td>').text(character.gender));
        $row.append($('<td>').text(character.alignment));
        $tbody.append($row);
    });

    $resetButton.click(function() {
        $tbody.find('tr').show();
        $tbody.find('tr').removeClass('odd even');
        $tbody.find('tr:visible:odd').addClass('odd');
        $tbody.find('tr:visible:even').addClass('even');
    });

    $('#buttons button').click(function() {
        var house = $(this).attr('data-house');
        $tbody.find('tr').hide();
        $tbody.find('tr[data-house="' + house + '"]').show();
        $tbody.find('tr:visible').removeClass('odd even');
        $tbody.find('tr:visible:odd').addClass('odd');
        $tbody.find('tr:visible:even').addClass('even');
    });

    $tbody.find('tr:visible:odd').addClass('odd');
    $tbody.find('tr:visible:even').addClass('even');
});
