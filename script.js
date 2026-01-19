//your JS code here. If required.

let btn=document.querySelectorAll("button");

for(let b of btn)
{
	b.addEventListener("click",playSound)	
}

function playSound(e) {
	let t=e.target.id.slice(3)-1;
	let arr=[1,2,3,4,5,6];
	
	
	
}
