$(document).ready(function() {

    var friends = ['Reiner', 'Bertholdt', 'Annie', 'Zeke', 'Pieck']
    var locations = ['Shiganshina', 'Trost', 'Stohess', 'Ragako', 'the Utgard Castle', 'Orvud', 'the Underground', 'Liberio', 'Ehrmich', 'the Reiss Chapel']
    var weapons = ['ODM gear', 'AP ODM gear', 'a signal flare', 'a Thunder Spear', 'an Attack Titan punch', 'a Warhammer Titan bolt', 'an Armored Titan stomp', 'a Colossal Titan explosion', 'a Jaw Titan chomp', 'a Female Titan kick', 'a Founder Titan scream', 'a Cart Titan cannon', 'a Beast Titan rock blast', 'a rifle', 'the Flying Boat', 'a horse', 'a potato', 'pure titans', 'a knife', 'a titan injection']

    for (var i = 1; i < 101; i++) {
        accuse(i);
    }    

    function accuse (i) {
            
        var friend = friends[(i % friends.length)];
        var weapon = weapons[(i % weapons.length)];
        var location = locations[(i % locations.length)];
        var accusationAlert = 'Accusation ' + i + ': I accuse ' + friend + ', with ' + weapon + ' in ' + location + '!';
        var accusation = ('<h3 id="' + i + '">Accusation ' + i + '<h3>')
        
        $('body').append(accusation)

        $('#' + i).on('click', function(){
            alert(accusationAlert);
        });

    };

})