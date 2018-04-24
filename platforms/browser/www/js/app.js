// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is ready
function onDeviceReady() {

}


function promptCallBack(results){
	var buttonIndex = results.buttonIndex;
	var input1 = results.input1;

	if(buttonIndex==1){
		navigator.notification.beep(1);
		alert(input1 + ", did you hear that? That's your alarm telling you to go practice! Remember: It is better to practice 5 minutes each day than to practice 30 minutes a week.");
	}
	else{
		navigator.vibrate(500);
		alert("You want to be the best? Then you'll be back...");
	}
}

var options = ["Tip, please!", "Not today"];
//custom
function onClick(){
	navigator.notification.prompt(
	"If you give us your name, we'll give you a tip of the day. What do you say?",
	promptCallBack,
	"Hi, jamming bro/gal!",
	options,
	"Homie"
	);

	promptCallBack();
}

// function onDeviceReady() {
//     console.log(navigator.vibrate);
//     navigator.vibrate(1000);
// }