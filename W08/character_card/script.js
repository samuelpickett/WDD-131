const character = {
    name: "Snortleblat - Samuel Pickett",
    class: "Swamp Beat Diplomat",
    level: 5,
    health: 100,
    image: 'https://andejuli.github.io/img/snortleblat.png',
    attacked: function() {
        if (this.health >= 20) {
            this.level -= 1;
            this.health -= 20;
        } else {
            alert('Character Died');
        }
        },
    levelUp: function() {
        this.level += 1;
        this.health += 20;
        },
    greet: function(){
        console.log("hello")
    }
    };
const name = document.querySelector(".name");
const image = document.querySelector(".image");
const character_class = document.getElementById("class");
const level = document.getElementById("level");
const health = document.getElementById("health");
const attack = document.getElementById("attacked");
const increase_level = document.getElementById("levelup");

name.innerText = character.name;
image.src = character.image;
character_class.innerText = character.class;
level.innerText = character.level;
health.innerText = character.health;

function update(){
    level.innerText = character.level;
    health.innerText = character.health;
}




attack.addEventListener("click", function(){character.attacked(), update()});
increase_level.addEventListener("click", function() {character.levelUp(), update()})