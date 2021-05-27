
let patientsRoomOne = [];
let patientsRoomTwo=[];
let patientsRoomThree=[];
let patientsRoomFour=[];
let patientsRoomFive=[];
let patientsRoomSix=[];
let patientLine=["Juliet Breeze","Cheryl Bertrand","Hunter Breeze","Ava Breeze","Chelsea Gomez","Alexis Smith","Taylor Terrell","Mark Gryder", "Bill McGrath", "Jeremy Behling"];
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

$('.line').click(function () {
    $(this).toggleClass('lineClicked');
    $(this).toggleClass('line');
});

$('#lineRoomOne').click(function()
{
	let clicked=$('.lineClicked').toArray();
	for (i = 0; i< clicked.length; i++) {
		patientsRoomOne.push(clicked[i].innerHTML);
		patientLine.splice(patientLine.indexOf(clicked[i].innerHTML), 1)}

		one.innerHTML = '<ul>' + patientsRoomOne.map(function (patient) {
			return '<li>' + patient+ '</li>';
		}).join('') + '</ul>';

		patientLines.innerHTML = '<ol>' + patientLine.map(function (patient) {
			return '<li class= "line" id="line">' + patient+ '</li>';
		}).join('') + '</ol>';
});