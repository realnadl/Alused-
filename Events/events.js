//sundmus on brauseri teade tegevuse kohta mis toimub veebilehel.
//sundmused voivad olla naitaks hiireklopsude lkaviatuuris vajatused 
//lehe laadimine voi vorimi esitamine

const clickbutton = document.getElementById("click-button");
const clickResult = document.getElementById("click-result");
const targetResult = document.getElementById("target-result");

let click = 0;
function countClicks(event) {
    click++;
    clickResult.textContent = "klopsus:" + click;
    targetResult.textContent = "type: " + event.type + 
    ", target: " + event.target.tagName +
    ", currentTarget: " + event.currentTarget.tagName;
}
clickbutton.addEventListener("click", countClicks);