var bots = require('./server');
var unique_id = '16f11103';

if (bots.some(e => e.botID === unique_id)) {
    bots = bots.filter(function(e) {
    var matchBots = e.botID != unique_id;

    console.log(matchBots);
  });
}

