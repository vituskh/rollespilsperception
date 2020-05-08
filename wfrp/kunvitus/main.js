

window.onload=function() {
	document.getElementById("INT").value = localStorage.getItem("INT")
};
var whatroll;
var theroll;
function randomIntFromInterval(min, max) { // min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min);
  }
function roll(times) {
	document.getElementById("succes").textContent = ""
	for (let i = 1; i < times + 1; i++) {
        const rolls = []
        for (let o = 1; o <= 3; o++) {
            const roll = randomIntFromInterval(1, 100)
            if(roll == 1 || roll > 95) {
                rolls.push("<b>" + getSuccesser(roll) + "(" + roll + ")</b>")
            } else {
                rolls.push(getSuccesser(roll))
            }
            
        }
		document.getElementById("succes").innerHTML += "Dag " + i + ": " + rolls[0]  + ", " + rolls[1] + ", " + rolls[2] + "<br>"
		
	}
}

function getSuccesser(roll) {
	
	whatroll = "INT"
	theroll = roll
	var i = theroll;
	var succeser = 0

	//console.log({whatroll, theroll, i, succeser})

	if (theroll != 0 && document.getElementById(whatroll).value < 150 && document.getElementById(whatroll).value > -50 && theroll > -50 && theroll < 150) {
		if (i > document.getElementById(whatroll).value) {
			succeser = succeser - 1	
			while (i - 10 > document.getElementById(whatroll).value) {
				i = i - 10
				succeser = succeser - 1
			}
		} else {
			succeser = succeser + 1
			while (i + 10 <= document.getElementById(whatroll).value) {
				i = i + 10
				succeser = succeser + 1	
			}
		}
		
	} else {
		succeser = "Fejl: ikke crash"
	}
	
	return succeser
}
