function randomIntFromInterval(min, max) { // min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min);
  }
function roll(times) {
	console.clear()
	console.time("total")
	document.getElementById("output").innerHTML = ""
	for (let i = 1; i <= times ; i++) {
		console.time("day" + i)
		var listoftotals = []
		for (let o = 1; o <= 3; o++) {
			var person1roll = randomIntFromInterval(1,20)
			var person2roll = randomIntFromInterval(1,20)
			
			if(person1roll == 20) {
				person1roll = "<b>" + (person1roll + Number(document.getElementById("vagt" + o + "1Perception").value)) + "</b>"
			} else {
				person1roll += Number(document.getElementById("vagt" + o + "1Perception").value)
			}
			if(person2roll == 20) {
				person2roll = "<b>" + (person2roll + Number(document.getElementById("vagt" + o + "2Perception").value)) + "</b>"
			} else {
				person2roll += Number(document.getElementById("vagt" + o + "1Perception").value)
			}
			//console.log("dag " + i + "vagt " + o + " person 2 modifier: " + Number(document.getElementById("vagt" + o + "2Perception").value))

			listoftotals.push("(" + person1roll + ", " + person2roll +  ")")
		}
		document.getElementById("output").innerHTML += "<p> Dag " + i + ": " + listoftotals[0] + ", " + listoftotals[1] + ", " + listoftotals[2] + "</p>"
		console.timeEnd("day" + i)
	}
	console.timeEnd("total")
}