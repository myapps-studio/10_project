var os = require('os');

function secondConv() {
    var input = os.uptime();

    var hours = (input / 60 / 60);
    hours = Math.floor(hours);
    var minutes = (input / 60) - (hours * 60);
    minutes = Math.floor(minutes);
    
    var seconds = input - (hours * 3600) - (minutes * 60);
    var time = String(hours) + 'godz.' + String(minutes) + 'min.' + String(seconds) + 'sek.';

    return time;
    /* console.log(String(hours), 'godz.', String(minutes), 'min.', String(seconds), 'sek.'); */
};

exports.print = secondConv;