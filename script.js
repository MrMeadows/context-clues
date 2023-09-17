$(document).ready(function() {
    for (var i = 1; i < 101; i++) {
        var accusation = ('<h3 id="' + i + '">Accusation ' + i + '<h3>')
        $('body').append(accusation)
        $('#'+i).on('click', alertMSG)
    }

    function alertMSG() {
        alert('Accusation ' + String(this.id) + ': I accuse ' + 'friend' + ', with the ' + 'weapon' + ' in the ' + 'location')
    }


    /*function alertMsg(friend, weapon, location) {

        String(this.id) LOOK HERE AHHH
        I think this is a better solution than what Matt Morgan suggested in Gravity

    }*/

    //friends[i],weapons[i],locations[i]

})