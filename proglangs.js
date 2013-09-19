var element_unordered_list = document.getElementById("proglangs");
alert(element_unordered_list);


function printToOutputBox(selectobj) {
var e_proglangs = document.getElementById("proglangs");
var e_outputbox = document.getElementById("outputbox");
e_outputbox.innerHTML = "Du har valgt programmeringsspråket " + e_proglangs.		// Forandrer innholdet i outputbox
options[selectobj.selectedIndex].text;

}

function funksjon()
{
alert("Beklager så mye, denne siden er under konstruksjon!");				// Gjør at funksjonen sender et varsel.
