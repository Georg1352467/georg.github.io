"use strict";
function rules2() {
	document.querySelector(".section_left").style.display="none";
	document.querySelector(".white_block").style.display="block";
	document.querySelector(".rules3").style.display="none";
	document.querySelector(".rules4").style.display="none";
	document.querySelector(".rules5").style.display="none";
	document.querySelector("#pomodoro-app").style.display="none";
	document.querySelector(".rules6").style.display="none";
	document.querySelector(".rules7").style.display="none";
	document.querySelector(".rules8").style.display="none";

}
function rules1(){
	document.querySelector(".section_left").style.display="block";
	document.querySelector(".white_block").style.display="none";
	document.querySelector(".rules3").style.display="none";
	document.querySelector(".rules4").style.display="none";
	document.querySelector(".rules5").style.display="none";
	document.querySelector("#pomodoro-app").style.display="none";
	document.querySelector(".rules6").style.display="none";
	document.querySelector(".rules7").style.display="none";
	document.querySelector(".rules8").style.display="none";
}
function rules3(){
	document.querySelector(".section_left").style.display="none";
	document.querySelector(".white_block").style.display="none";
	document.querySelector(".rules3").style.display="block";
	document.querySelector(".rules4").style.display="none";
	document.querySelector(".rules5").style.display="none";
	document.querySelector("#pomodoro-app").style.display="none";
	document.querySelector(".rules6").style.display="none";
	document.querySelector(".rules7").style.display="none";
	document.querySelector(".rules8").style.display="none";
}
function rules4()	{
	document.querySelector(".section_left").style.display="none";
	document.querySelector(".white_block").style.display="none";
	document.querySelector(".rules3").style.display="none";
	document.querySelector(".rules4").style.display="block";
	document.querySelector(".rules5").style.display="none";
	document.querySelector("#pomodoro-app").style.display="none";
	document.querySelector(".rules6").style.display="none";
	document.querySelector(".rules7").style.display="none";
	document.querySelector(".rules8").style.display="none";
}
function rules5(){
	document.querySelector(".section_left").style.display="none";
	document.querySelector(".white_block").style.display="none";
	document.querySelector(".rules3").style.display="none";
	document.querySelector(".rules4").style.display="none";
	document.querySelector(".rules5").style.display="block";
	document.querySelector("#pomodoro-app").style.display="none";
	document.querySelector(".rules6").style.display="none";
	document.querySelector(".rules7").style.display="none";
	document.querySelector(".rules8").style.display="none";
}
function rules6(){
	document.querySelector(".section_left").style.display="none";
	document.querySelector(".white_block").style.display="none";
	document.querySelector(".rules3").style.display="none";
	document.querySelector(".rules4").style.display="none";
	document.querySelector(".rules5").style.display="none";
	document.querySelector("#pomodoro-app").style.display="flex";
	document.querySelector(".rules6").style.display="none";
	document.querySelector(".rules7").style.display="none";
	document.querySelector(".rules8").style.display="none";
}
function rules7(){
	document.querySelector(".section_left").style.display="none";
	document.querySelector(".white_block").style.display="none";
	document.querySelector(".rules3").style.display="none";
	document.querySelector(".rules4").style.display="none";
	document.querySelector(".rules5").style.display="none";
	document.querySelector("#pomodoro-app").style.display="none";
	document.querySelector(".rules6").style.display="block";
	document.querySelector(".rules7").style.display="none";
	document.querySelector(".rules8").style.display="none";
}
function rules8(){
	document.querySelector(".section_left").style.display="none";
	document.querySelector(".white_block").style.display="none";
	document.querySelector(".rules3").style.display="none";
	document.querySelector(".rules4").style.display="none";
	document.querySelector(".rules5").style.display="none";
	document.querySelector("#pomodoro-app").style.display="none";
	document.querySelector(".rules6").style.display="none";
	document.querySelector(".rules7").style.display="block";
	document.querySelector(".rules8").style.display="none";
}
function rules9(){
	document.querySelector(".section_left").style.display="none";
	document.querySelector(".white_block").style.display="none";
	document.querySelector(".rules3").style.display="none";
	document.querySelector(".rules4").style.display="none";
	document.querySelector(".rules5").style.display="none";
	document.querySelector("#pomodoro-app").style.display="none";
	document.querySelector(".rules6").style.display="none";
	document.querySelector(".rules7").style.display="none";
	document.querySelector(".rules8").style.display="block";
}
function cli1(){
	document.querySelector(".cli_2_1").style.display="block";
	document.querySelector(".cli_2_2").style.display="none";
	document.querySelector(".cli_2_3").style.display="none";
}
function cli2(){
	document.querySelector(".cli_2_1").style.display="none";
	document.querySelector(".cli_2_2").style.display="block";
	document.querySelector(".cli_2_3").style.display="none";
}
function cli3(){
	document.querySelector(".cli_2_1").style.display="none";
	document.querySelector(".cli_2_2").style.display="none";
	document.querySelector(".cli_2_3").style.display="block";
}
function plus() {
	let num1, num2, num3, num4, relust;

	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);

	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);

	num3 = document.getElementById('n3').value;
	num3 = parseInt(num3);

	num4 = document.getElementById('n4').value;
	num4 = parseInt(num4);


	relust =((10*num1)+(6.25*num2)-(5*num3)-161)*num4;

	document.getElementById('out').innerHTML = relust;
}
function plus2() {
	let num1, num2, num3, num4, relust;

	num1 = document.getElementById('n5').value;
	num1 = parseInt(num1);

	num2 = document.getElementById('n6').value;
	num2 = parseInt(num2);

	num3 = document.getElementById('n7').value;
	num3 = parseInt(num3);

	num4 = document.getElementById('n8').value;
	num4 = parseInt(num4);


	relust =((10*num1)+(6.25*num2)-(5*num3)-161)*num4;

	document.getElementById('out').innerHTML = relust;
}
let pomodoro = {
	started: false,
	minutes: 0,
	seconds: 0,
	fillerHeight: 0,
	fillerIncrement: 0,
	interval: null,
	minutesDom: null,
	secondsDom: null,
	fillerDom: null,
	init: function(){
		let self = this;
		this.minutesDom = document.querySelector("#minutes");
		this.secondsDom = document.querySelector("#seconds");
		this.fillerDom = document.querySelector("#filler");
		this.interval = setInterval(function() {
			self.intervalCallback.apply(self);
		}, 1000);
		document.querySelector("#work").onclick = function(){
			self.startWork.apply(self);
		};
		document.querySelector("#shortBreak").onclick = function(){
			self.startShortBreak.apply(self);
		};
		document.querySelector("#longBreak").onclick = function(){
			self.startLongBreak.apply(self);
		};
		document.querySelector("#stop").onclick = function(){
			self.stopTimer.apply(self);
		};
	},
	resetVariables: function (mins, secs, started){
		this.minutes = mins;
		this.seconds = secs;
		this.started = started;
		this.fillerIncrement = 200 / (this.minutes * 60);
		this.fillerHeight = 0;
	},
	startWork: function(){
		this.resetVariables(25, 0, true);
	},
	startShortBreak: function(){
		this.resetVariables(5, 0, true);
	},
	startLongBreak: function(){
		this.resetVariables(15, 0, true);
	},
	stopTimer: function(){
		this.resetVariables(25, 0, false);
		this.updateDom();
	},
	toDoubleDigit: function(num){
		if (num < 10) {
			return "0" + parseInt(num, 10);
		}
		return num;
	},
	updateDom: function(){
		this.minutesDom.innerHTML = this.toDoubleDigit(this.minutes);
		this.secondsDom.innerHTML = this.toDoubleDigit(this.seconds);
		this.fillerHeight = this.fillerHeight + this.fillerIncrement;
		this.fillerDom.style.height = this.fillerHeight + "px";
	},
	intervalCallback: function(){
		if (!this.started) return false; 
		if (this.seconds == 0) {
			if (this.minutes == 0) {
				this.timerComplete();
				return;
			}
			this.seconds = 59;
			this.minutes --;
		}else{
			this.seconds --;
		}
		this.updateDom();
	},
	timerComplete: function(){
		this.started = false;
		this.fillerHeight = 0;
	}
};
  window.console = window.console || function(t) {};
  if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
  }


