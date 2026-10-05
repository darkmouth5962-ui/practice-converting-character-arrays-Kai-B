let message1 = "!yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam gnidoC"
let message2 = "!ecitcarp htiw retteb teg ll‘uoy ,emit ekaT .tsrif ta drah leef lliw gnitirw edoc tuB"
let message3 = "!elpoep rehto morf tnereffid on era uoy ,elbuort evah uoy fI .lanoisseforp a ekil leef ot evah t'nod uoY"
let message4 = ".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom tcefrep eht rof tiaw t'noD .yadot trats tsuJ"

let messages = [message1, message2, message3, message4];
let reversedMessages = messages.map(message => message.split('').reverse().join(''));
console.log(reversedMessages);

let mymessage1 = "Turn down the speaker.";
let mymessage2 = "Turn up the volume.";
let mymessage3 = "Mute the television.";
let mymessage4 = "Unmute the television.";
let myMessages = [mymessage1, mymessage2, mymessage3, mymessage4];
let reversedMyMessages = myMessages.map(myMessage => myMessage.split('').reverse().join(''));
console.log(reversedMyMessages);