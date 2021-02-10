var points = 0;
var upgrade = 1;
var rate = 1;
var clickers = 0;
var clickersprice = 1;
var musichidden = true;
setInterval("clear();", 200);
function clear(){
	document.getElementById('points').innerHTML = "You have " + points + " relaxation points";
	document.getElementById('upgrade').innerHTML = "You can relax deeper for " + upgrade + " relaxation points";
	document.getElementById('rate').innerHTML = "You gain " + rate + " relaxation points each time you relax";
	document.getElementById('clickersprice').innerHTML = "Daydreaming takes away " + clickersprice + " relaxation points, but gives you " + clickers + " relaxation points every 10 seconds";
	if (points >= 100){
		document.getElementById('flavor').innerHTML = "You begin to daydream, about those times back then...";
	}
}
function addpoint() {
points += rate;
};

function upgradepoint() {
if (points >= upgrade){
points = points - upgrade;
upgrade = upgrade * 5;
rate++;
}
};

function clickerproduce(){
	if (points >= clickersprice){
points = points - clickersprice;
clickers +=1;
clickersprice = clickersprice * 2;
document.getElementById('clickersinfo').style.display = "block";
setInterval(function produceclick(){ points = points + clickers; document.getElementById("points").innerHTML = "You have " + points + " relaxation points"}, 10000);
	if (clickers == 1){
	document.getElementById('daydream').innerHTML = "Daydream some more...";
}
	}
};
