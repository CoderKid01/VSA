var SpeechRecognition = window.webkitSpeechRecognition;
var recognitition = new SpeechRecognition();
function start ()
{
    document.getElementById("textbox").innerHTML = "";
    recognitition.start();
}

recognitition.onresult = function(event)
{
    console.log(event);
    
    var Content = event.results[0][0].transcript;
    
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    
}