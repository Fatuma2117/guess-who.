console.log('Here are all the available people:', people);
$(document).ready(readyNow);

function readyNow() {
    for (let user of people) {
       $('body').append(`<img data-nameMatch=${user.name} src="https://github.com/${user.githubUsername}.png?size=250" alt="Profile image of Chris">`)
    }
    renderRandomName();
    $('img').on('click', clickImage)
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
console.log(randomNumber(0 ,6));
console.log(people[randomNumber(0,6)].name);

let generatedName = people[randomNumber(0,6)].name;

function renderRandomName(){
    $('#displayedName').append(`${generatedName}`);
}

function clickImage(){
    console.log($(this).data());
    console.log(generatedName);
    if ($(this).data().name === generatedName){
        console.log('correct');
    }
}