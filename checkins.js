let patientsRoomOne = ["Alexis","Hunter","Ava"];
let patientsRoomTwo=["Katie", "Juliet", "Scott"];
let patientsRoomThree=["Cheryl", "Bill", "Mark"];
let patientsRoomFour=["Jeremy", "Allyson", "Courtney"];
let patientsRoomFive=["Steven","Kelly", "Martin"];
let patientsRoomSix=["Colene","Amy", "Chelsea"]
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
