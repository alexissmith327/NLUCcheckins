
let patientsRoomOne = [];
let patientsRoomTwo=[];
let patientsRoomThree=[];
let patientsRoomFour=[];
let patientsRoomFive=[];
let patientsRoomSix=[];
let patientLine=["Juliet Breeze","Cheryl Bertrand","Hunter Breeze","Ava Breeze","Chelsea Gomez","Alexis Smith","Taylor Terrell","Mark Gryder", "Bill McGrath", "Jeremy Behling"];

let appts=["Bob Smith", "Haley Foster","Rafik Sandford","Alexis Smith"]

var checkedOut=[];

//Room One
var one = document.querySelector('#roomOne');
one.innerHTML = '<ul>' + patientsRoomOne.map(function (patient) {
	return '<li>' + patient+ '</li>';
}).join('') + '</ul>';

//Room Two
var two = document.querySelector('#roomTwo');
two.innerHTML = '<ul>' + patientsRoomTwo.map(function (patient) {
	return '<li>' + patient+ '</li>';
}).join('') + '</ul>';

//Room Three
var three = document.querySelector('#roomThree');
three.innerHTML = '<ul>' + patientsRoomThree.map(function (patient) {
	return '<li>' + patient+ '</li>';
}).join('') + '</ul>';

//Room Four
var four = document.querySelector('#roomFour');
four.innerHTML = '<ul>' + patientsRoomFour.map(function (patient) {
	return '<li>' + patient+ '</li>';
}).join('') + '</ul>';

//Room Five
var five = document.querySelector('#roomFive');
five.innerHTML = '<ul>' + patientsRoomFive.map(function (patient) {
	return '<li>' + patient+ '</li>';
}).join('') + '</ul>';

//Room Six
var six = document.querySelector('#roomSix');
six.innerHTML = '<ul>' + patientsRoomSix.map(function (patient) {
	return '<li>' + patient+ '</li>';
}).join('') + '</ul>';

//Checked Out
var out = document.querySelector('#checkedOut');
out.innerHTML = '<ul>' + checkedOut.map(function (patient) {
	return '<li>' + patient+ '</li>';
}).join('') + '</ul>';

//Line
var patientLines = document.querySelector('#linePatients');
patientLines.innerHTML = '<ol>' + patientLine.map(function (patient) {
	return '<li class= "line" id="line">' + patient+ '</li>';
}).join('') + '</ol>';

//Appointments
var apptLine=document.querySelector('#appts');
apptLine.innerHTML='<ol>' + appts.map(function (patient) {
		return '<li class= "appts" id="appts">' + patient+ '</li>';
	}).join('') + '</ol>';


$('#checkoutRoomOne').click(function()
{
	checkedOut=patientsRoomOne.concat(checkedOut);
	patientsRoomOne=[];
	roomOne.innerHTML = patientsRoomOne.map(i => `<li>${i}</li>`).join('');
	out.innerHTML = checkedOut.map(i => `<li>${i}</li>`).join('');
	$("#checkoutRoomOne").hide();
});

$('#checkoutRoomTwo').click(function()
{
	checkedOut=patientsRoomTwo.concat(checkedOut);
	patientsRoomTwo=[];
	roomTwo.innerHTML = patientsRoomTwo.map(i => `<li>${i}</li>`).join('');
	out.innerHTML = checkedOut.map(i => `<li>${i}</li>`).join('');
	$("#checkoutRoomTwo").hide();
});

$('#checkoutRoomThree').click(function()
{
	checkedOut=patientsRoomThree.concat(checkedOut);
	patientsRoomThree=[];
	roomThree.innerHTML = patientsRoomThree.map(i => `<li>${i}</li>`).join('');
	out.innerHTML = checkedOut.map(i => `<li>${i}</li>`).join('');
	$("#checkoutRoomThree").hide();
});

$('#checkoutRoomFour').click(function()
{
	checkedOut=patientsRoomFour.concat(checkedOut);
	patientsRoomFour=[];
	roomFour.innerHTML = patientsRoomFour.map(i => `<li>${i}</li>`).join('');
	out.innerHTML = checkedOut.map(i => `<li>${i}</li>`).join('');
	$("#checkoutRoomFour").hide();
});

$('#checkoutRoomFive').click(function()
{
	checkedOut=patientsRoomFive.concat(checkedOut);
	patientsRoomFive=[];
	roomFive.innerHTML = patientsRoomFive.map(i => `<li>${i}</li>`).join('');
	out.innerHTML = checkedOut.map(i => `<li>${i}</li>`).join('');
	$("#checkoutRoomFive").hide();
});

$('#checkoutRoomSix').click(function()
{
	checkedOut=patientsRoomSix.concat(checkedOut);
	patientsRoomSix=[];
	roomSix.innerHTML = patientsRoomSix.map(i => `<li>${i}</li>`).join('');
	out.innerHTML = checkedOut.map(i => `<li>${i}</li>`).join('');
	$("#checkoutRoomSix").hide();
});

//Toggle clicked vs unclicked Walk-ins 
$('.line').click(function () {
    $(this).toggleClass('lineClicked');
    $(this).toggleClass('line');
});

//Check Walk-Ins into Room One 

$('#lineRoomOne').click(function()
{
	let clickedOne=$('.lineClicked').toArray();
	for (i = 0; i< clickedOne.length; i++) {
		patientsRoomOne.push(clickedOne[i].innerHTML);
		patientLine.splice(patientLine.indexOf(clickedOne[i].innerHTML), 1)}

		one.innerHTML = '<ul>' + patientsRoomOne.map(function (patient) {
			return '<li>' + patient+ '</li>';
		}).join('') + '</ul>';

		patientLines.innerHTML = '<ol>' + patientLine.map(function (patient) {
			return '<li class= "line" id="line">' + patient+ '</li>';
		}).join('') + '</ol>';

		$("#checkoutRoomOne").show(); 

		$('.line').click(function () {
			$(this).toggleClass('lineClicked');
			$(this).toggleClass('line');
		});
});

//Check Walk-Ins into Room Two 

$('#lineRoomTwo').click(function()
{
	let clickedTwo=$('.lineClicked').toArray();
	for (i = 0; i< clickedTwo.length; i++) {
		patientsRoomTwo.push(clickedTwo[i].innerHTML);
		patientLine.splice(patientLine.indexOf(clickedTwo[i].innerHTML), 1)}

		two.innerHTML = '<ul>' + patientsRoomTwo.map(function (patient) {
			return '<li>' + patient+ '</li>';
		}).join('') + '</ul>';

		patientLines.innerHTML = '<ol>' + patientLine.map(function (patient) {
			return '<li class= "line" id="line">' + patient+ '</li>';
		}).join('') + '</ol>';

		$("#checkoutRoomTwo").show(); 

		$('.line').click(function () {
			$(this).toggleClass('lineClicked');
			$(this).toggleClass('line');
		});
});

//Check Walk-Ins into Room Three

$('#lineRoomThree').click(function()
{
	let clickedThree=$('.lineClicked').toArray();
	for (i = 0; i< clickedThree.length; i++) {
		patientsRoomThree.push(clickedThree[i].innerHTML);
		patientLine.splice(patientLine.indexOf(clickedThree[i].innerHTML), 1)}

		three.innerHTML = '<ul>' + patientsRoomThree.map(function (patient) {
			return '<li>' + patient+ '</li>';
		}).join('') + '</ul>';

		patientLines.innerHTML = '<ol>' + patientLine.map(function (patient) {
			return '<li class= "line" id="line">' + patient+ '</li>';
		}).join('') + '</ol>';

		$("#checkoutRoomThree").show(); 

		$('.line').click(function () {
			$(this).toggleClass('lineClicked');
			$(this).toggleClass('line');
		});
});

//Check Walk-Ins into Room Four

$('#lineRoomFour').click(function()
{
	let clickedFour=$('.lineClicked').toArray();
	for (i = 0; i< clickedFour.length; i++) {
		patientsRoomFour.push(clickedFour[i].innerHTML);
		patientLine.splice(patientLine.indexOf(clickedFour[i].innerHTML), 1)}

		four.innerHTML = '<ul>' + patientsRoomFour.map(function (patient) {
			return '<li>' + patient+ '</li>';
		}).join('') + '</ul>';

		patientLines.innerHTML = '<ol>' + patientLine.map(function (patient) {
			return '<li class= "line" id="line">' + patient+ '</li>';
		}).join('') + '</ol>';

		$("#checkoutRoomFour").show(); 

		$('.line').click(function () {
			$(this).toggleClass('lineClicked');
			$(this).toggleClass('line');
		});
});

//Check Walk-Ins into Room Five

$('#lineRoomFive').click(function()
{
	let clickedFive=$('.lineClicked').toArray();
	for (i = 0; i< clickedFive.length; i++) {
		patientsRoomFive.push(clickedFive[i].innerHTML);
		patientLine.splice(patientLine.indexOf(clickedFive[i].innerHTML), 1)}

		five.innerHTML = '<ul>' + patientsRoomFive.map(function (patient) {
			return '<li>' + patient+ '</li>';
		}).join('') + '</ul>';

		patientLines.innerHTML = '<ol>' + patientLine.map(function (patient) {
			return '<li class= "line" id="line">' + patient+ '</li>';
		}).join('') + '</ol>';

		$("#checkoutRoomFive").show(); 

		$('.line').click(function () {
			$(this).toggleClass('lineClicked');
			$(this).toggleClass('line');
		});
});

//Check Walk-Ins into Room Six

$('#lineRoomSix').click(function()
{
	let clickedSix=$('.lineClicked').toArray();
	for (i = 0; i< clickedSix.length; i++) 
	{
		patientsRoomSix.push(clickedSix[i].innerHTML);
		patientLine.splice(patientLine.indexOf(clickedSix[i].innerHTML), 1)
	}

		six.innerHTML = '<ul>' + patientsRoomSix.map(function (patient) {
			return '<li>' + patient+ '</li>';
		}).join('') + '</ul>';

		patientLines.innerHTML = '<ol>' + patientLine.map(function (patient) {
			return '<li class= "line" id="line">' + patient+ '</li>';
		}).join('') + '</ol>';

		$("#checkoutRoomSix").show(); 

		$('.line').click(function () {
			$(this).toggleClass('lineClicked');
			$(this).toggleClass('line');
		});
});


//Appts

//Toggle clicked vs unclicked Appts
$('.appts').click(function () {
    $(this).toggleClass('apptsClicked');
    $(this).toggleClass('appts');
});

//Check Appts into Room One 

$('#apptsRoomOne').click(function()
{
	let clickedOneAppts=$('.apptsClicked').toArray();
	for (i = 0; i< clickedOneAppts.length; i++) {
			patientsRoomOne.push(clickedOneAppts[i].innerHTML);
			appts.splice(appts.indexOf(clickedOneAppts[i].innerHTML), 1)}
	
		one.innerHTML = '<ul>' + patientsRoomOne.map(function (patient) {
			return '<li>' + patient+ '</li>';
		}).join('') + '</ul>';

		apptLine.innerHTML='<ol>' + appts.map(function (patient) {
			return '<li class= "appts" id="appts">' + patient+ '</li>';
		}).join('') + '</ol>';
	
		$("#checkoutRoomOne").show(); 

		$('.appts').click(function () {
			$(this).toggleClass('apptsClicked');
			$(this).toggleClass('appts');
});
});

//Check Appts into Room Two 

$('#apptsRoomTwo').click(function()
{
	let clickedTwoAppts=$('.apptsClicked').toArray();
	for (i = 0; i< clickedTwoAppts.length; i++) {
		patientsRoomTwo.push(clickedTwoAppts[i].innerHTML);
		appts.splice(appts.indexOf(clickedTwoAppts[i].innerHTML), 1)}

		two.innerHTML = '<ul>' + patientsRoomTwo.map(function (patient) {
			return '<li>' + patient+ '</li>';
		}).join('') + '</ul>';

		apptLine.innerHTML='<ol>' + appts.map(function (patient) {
			return '<li class= "appts" id="appts">' + patient+ '</li>';
		}).join('') + '</ol>';

		$("#checkoutRoomTwo").show(); 

		$('.appts').click(function () {
			$(this).toggleClass('apptsClicked');
			$(this).toggleClass('appts');
		
});
});

//Check Appts into Room Three

$('#apptsRoomThree').click(function()
{
	let clickedThreeAppts=$('.apptsClicked').toArray();
	for (i = 0; i< clickedThreeAppts.length; i++) {
		patientsRoomThree.push(clickedThreeAppts[i].innerHTML);
		appts.splice(appts.indexOf(clickedThreeAppts[i].innerHTML), 1)}


		three.innerHTML = '<ul>' + patientsRoomThree.map(function (patient) {
			return '<li>' + patient+ '</li>';
		}).join('') + '</ul>';

		apptLine.innerHTML='<ol>' + appts.map(function (patient) {
			return '<li class= "appts" id="appts">' + patient+ '</li>';
		}).join('') + '</ol>';

		$("#checkoutRoomThree").show(); 

		$('.appts').click(function () {
			$(this).toggleClass('apptsClicked');
			$(this).toggleClass('appts');
	
});
});

//Check Appts into Room Four

$('#apptsRoomFour').click(function()
{
	let clickedFourAppts=$('.apptsClicked').toArray();
	for (i = 0; i< clickedFourAppts.length; i++) {
		patientsRoomFour.push(clickedFourAppts[i].innerHTML);
		appts.splice(appts.indexOf(clickedFourAppts[i].innerHTML), 1)}

		four.innerHTML = '<ul>' + patientsRoomFour.map(function (patient) {
			return '<li>' + patient+ '</li>';
		}).join('') + '</ul>';

		apptLine.innerHTML='<ol>' + appts.map(function (patient) {
			return '<li class= "appts" id="appts">' + patient+ '</li>';
		}).join('') + '</ol>';

		$("#checkoutRoomFour").show(); 

		$('.appts').click(function () {
			$(this).toggleClass('apptsClicked');
			$(this).toggleClass('appts');
});
});

//Check Appts into Room Five

$('#apptsRoomFive').click(function()
{
	let clickedFiveAppts=$('.apptsClicked').toArray();
	for (i = 0; i< clickedFiveAppts.length; i++) {
		patientsRoomFive.push(clickedFiveAppts[i].innerHTML);
		appts.splice(appts.indexOf(clickedFiveAppts[i].innerHTML), 1)}

		five.innerHTML = '<ul>' + patientsRoomFive.map(function (patient) {
			return '<li>' + patient+ '</li>';
		}).join('') + '</ul>';

		apptLine.innerHTML='<ol>' + appts.map(function (patient) {
			return '<li class= "appts" id="appts">' + patient+ '</li>';
		}).join('') + '</ol>';

		$("#checkoutRoomFive").show(); 

		$('.appts').click(function () {
			$(this).toggleClass('apptsClicked');
			$(this).toggleClass('appts');
		
});
});

//Check Appts into Room Six

$('#apptsRoomSix').click(function()
{
	let clickedSixAppts=$('.apptsClicked').toArray();
	for (i = 0; i< clickedSixAppts.length; i++) {
		patientsRoomSix.push(clickedSixAppts[i].innerHTML);
		appts.splice(appts.indexOf(clickedSixAppts[i].innerHTML), 1)}

		six.innerHTML = '<ul>' + patientsRoomSix.map(function (patient) {
			return '<li>' + patient+ '</li>';
		}).join('') + '</ul>';

		apptLine.innerHTML='<ol>' + appts.map(function (patient) {
			return '<li class= "appts" id="appts">' + patient+ '</li>';
		}).join('') + '</ol>';

		$("#checkoutRoomSix").show(); 

		$('.appts').click(function () {
			$(this).toggleClass('apptsClicked');
			$(this).toggleClass('appts');

});
});





//Add Patient Modal

$('#addPatient').click(function() {
let patientName=document.getElementById("fullName").value;
patientLine.push(patientName);
patientLines.innerHTML = '<ol>' + patientLine.map(function (patient) {
	return '<li class= "line" id="line">' + patient+ '</li>';
}).join('') + '</ol>';
document.getElementById("fullName").value="";
$('.line').click(function () {
	$(this).toggleClass('lineClicked');
	$(this).toggleClass('line');
});
});