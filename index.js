var {send, json} = require('micro')
var {router, get, post} = require('microrouter')
var botkit = require('botkit');
var controller = botkit.facebookbot({
    access_token: "EAAGJDJVHZBW8BAJm8fziMaMNDzxpSbEguPeYU4X6QJIKKw0VgLA6yQRdtysZCdQyTSVNXimwUkW71ztqhTJibEexNWYbKTP59FoH2T7VBfzaZAhzZAPAEZAd2FAm989u25V020qAVZBsnzx7vFZAbfV5z8Gq08ugmiQi1N3aMacGgZDZD",
    verify_token: "this is for joe bot",
})

var bot = controller.spawn({});

controller.setupWebserver(3000, function (err, webserver) {  })


controller.on('message_received', function(bot, message){
    console.log("Received message to botkit");
    bot.reply(message, "Message has been received.");
})



const sendMessage = function(req,res){
    var body = json(req).then(function (bodyReturned){
        console.log(JSON.stringify(bodyReturned, null, 4));
        var message
        if(bodyReturned.entry){
            var facebook_message = bodyReturned.entry[0].messaging[0];
            console.log(facebook_message);
            if (facebook_message.message) {
                message = {
                    text: facebook_message.message.text,
                    user: facebook_message.sender.id,
                    channel: facebook_message.sender.id,
                    timestamp: facebook_message.timestamp,
                    seq: facebook_message.message.seq,
                    mid: facebook_message.message.mid,
                }
            }
            bot.reply(message, message.text + message.timestamp)
            console.log("Sending 200");
        }
    })
    return send(res, 200, "Got it!");
}

const sendAMessage = (req,res) => {
    return send(res, 200, req.query["hub.challenge"]);
}

const notFound = function(req,res){
    return send(res, 400, "No route found.")
}

module.exports = router(
    get('/bot', sendAMessage),
    post('/bot', sendMessage)
)