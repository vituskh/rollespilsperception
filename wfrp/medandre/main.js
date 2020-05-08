function randomIntFromInterval(min, max) { // min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min);
  }
function roll(times) {
	const vitusPerception = document.getElementById("vitusPerception").value
	const vagt1Perception = document.getElementById("vagt1Perception").value
	const vagt2Perception = document.getElementById("vagt2Perception").value
	const vagt3Perception = document.getElementById("vagt3Perception").value
	var vagtPerception
	document.getElementById("output").innerHTML = ""
	for (let i = 1; i <= times ; i++) {
		var listoftotals = []
		var vitusRerolled = false
		for (let o = 1; o <= 3; o++) {
			//setup
			var total = ""
			if (o == 1) {
				vagtPerception = vagt1Perception
			} else if (o == 2) {
				vagtPerception = vagt2Perception
			} else if (o == 3) {
				vagtPerception = vagt3Perception
			}
			var vagtRoll = randomIntFromInterval(1, 100)
			var vitusRoll = randomIntFromInterval(1, 100)
			
			//reroll
			if(getSuccesser(vagtRoll, vagtPerception) <= 0 || vagtRoll > 94) {
				vagtRoll = randomIntFromInterval(1, 100)
				vagtRerolled = true;
			}
			if((vitusRoll > 94 || (o == 3 && getSuccesser(vitusRoll, vitusPerception) <= 0)) && !vitusRerolled) {
				vitusroll1 = vitusRoll
				vitusRoll = randomIntFromInterval(1, 100)
				vitusRerolled = true;
			}


			//udregning
			if(getSuccesser(vagtRoll, vagtPerception) <= 0) {
				endVagtSuccesser = 0
			} else {
				endVagtSuccesser = getSuccesser(vagtRoll, vagtPerception)
			}
			if(getSuccesser(vitusRoll, vitusPerception) <= 0) {
				endVitusSuccesser = 0
			} else {
				endVitusSuccesser = getSuccesser(vitusRoll, vitusPerception)
			}
			if(endVitusSuccesser == 0 && endVagtSuccesser == 0) {
				total += "<b>(begge falder i søvn)</b>"
			} else {
				total += (endVitusSuccesser + endVagtSuccesser)
			}

			//critical fail
			if (vagtRoll > 94) {
				total += "<b>(vagt slog " + vagtRoll + ")</b>"
			}
			if (vitusRoll > 94) {
				total += "<b>(vitus slog " + vitusRoll + ")</b>"
				console.log({o, vitusRoll, vitusroll1})
			}
			
			listoftotals.push(total)
		}
		document.getElementById("output").innerHTML += "<p> Dag " + i + ": " + listoftotals[0] + ", " + listoftotals[1] + ", " + listoftotals[2] + "</p>"
	}
}

function getSuccesser(theroll, rollunder) {
	
	var i = theroll;
	var succeser = 0

	if (theroll != 0 && rollunder < 150 && rollunder > -50 && theroll > -50 && theroll < 150) {
		if (i > rollunder) {
			succeser = succeser - 1	
			while (i - 10 > rollunder) {
				i = i - 10
				succeser = succeser - 1
			}
		} else {
			succeser = succeser + 1
			while (i + 10 <= rollunder) {
				i = i + 10
				succeser = succeser + 1	
			}
		}
		
	} else {
		succeser = "Fejl: ikke crash"
	}
	
	return succeser
}