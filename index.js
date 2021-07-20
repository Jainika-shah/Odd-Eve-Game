// Getting the random nos. for the dice img
diceNo = Math.floor((Math.random())*6)+1

// Setting the img using the random no. generated
document.querySelector('.img1').setAttribute("src",`images/dice${diceNo}.png`);

// same for second img
diceNo2 = Math.floor((Math.random())*6)+1
document.querySelector('.img2').setAttribute("src",`images/dice${diceNo2}.png`);

// Click roll btn functionality:
rollBtn = document.querySelector('.roll-btn');
rollBtn.addEventListener('click', function() {
    window.location.reload()
})

// validating
if((diceNo + diceNo2) % 2==0){
    document.querySelector('.result').textContent = "That's an eve";
}else{
    document.querySelector('.result').textContent = "That's an odd";
}
