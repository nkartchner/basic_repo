//NINJA MAN GAME

const world = document.getElementById('world');

function generateRandomNumber(multiple){
    let randomNumber = Math.floor(Math.random()*multiple);
    return randomNumber;
}
/*
const classNames = {
    0: 'wall',
    1: 'sushi',
    2: 'blank'
}

function generateMap(){
    let mapArray = [];
    let classNameArray = ["wall", "sushi", "blank"]
    for(let i = 0; i<=9; i++){
        let row = document.createElement("div");
        let innerArray = [];
        row.className = "row";
        for(let o = 0; o<=9; o++){
            let randomNumber = generateRandomNumber(classNameArray.length);
            let element = document.createElement("div");
            if(o == 0 || o == 9 || i == 0 || i == 9){
                element.className = "wall";
            } else {
                element.className = classNameArray[randomNumber];
            }
            innerArray[o] = element.className;
            row.appendChild(element);
        }
        mapArray[i] = innerArray;
        world.appendChild(row);
     }
     console.log(mapArray);
     return mapArray;
}
*/
    function worldMap(array){
        const world = document.getElementById('world');
        const worldNames = {
            0: 'wall',
            1: 'sushi',
            2: 'blank'
        };
        for(i=0; i < array.length; i++){
            let row = document.createElement("div");
            row.className = 'row';
            for(x=0; x < array[i].length; x++){
              //  let index = array[i][x];
                let element = document.createElement("div");
                element.className = worldNames[array[i][x]];
                row.appendChild(element);
            }
            world.appendChild(row);
        }
    }

    function worldArray(){
        let outerArray = [];
        for(row = 0; row<10; row++){
            let innerArray = [];
            for(column = 0; column < 10; column++){
                if(row == 0 || row == 9 || column == 0 || column == 9){
                    innerArray[column] = 0;
                } else {
                    let randomNumber = generateRandomNumber(3);
                    innerArray[column] = randomNumber;
                }
            }
            outerArray[row] = innerArray;
        }
        return outerArray;
    }
    let map = worldArray();
    
    
    
    /*
    let world = [
        [1,1,1,1,1],
        [1,0,2,2,1],
        [1,2,1,2,1],
        [1,2,2,2,1],
        [1,0,2,2,1],
        [1,2,1,2,1],
        [1,2,2,2,1],
        [1,0,2,2,1],
        [1,2,1,2,1],
        [1,2,2,2,1],
        [1,1,1,1,1],
            
    ];
    let worldDict = {
        0: 'blank',
        1: 'wall',
        2: 'sushi'
    }

    function drawWorld(){
        output = "";
        
        for(let row=0; row < world.length; row++){
            output += "<div class = 'row'>"
            for(let x = 0; x < world[row].length; x++){
                //console.log("element ", worldDict[world[row][x]]);
                output += `<div class = "${worldDict[world[row][x]]}"></div>`;
            }
            output += "</div>"
        }
        
        document.getElementById('world').innerHTML = output;
    }
*/
    
    let leftValue = 40;
    let topValue = 40;

let ninja = {
    x: 1,
    y: 1
};

function drawNinjaMan(){
    document.getElementById('ninja').style.top = ninja.y * 40 + 'px';
    document.getElementById('ninja').style.left = ninja.x * 40 + 'px';
    console.log(ninja.x, ninja.y);
        
}

    document.onkeydown = function(e){
        console.log(e);
        if(e.keyCode == 37  || e.keyCode == 65) { // LEFT
            if(map[ninja.y][ninja.x-1] != 0){
                ninja.x--;
            }
        }
        else if (e.keyCode == 39 || e.keyCode == 68) { // RIGHT
            if(map[ninja.y][ninja.x+1] != 0){
                ninja.x++;                
            }
        }
        else if (e.keyCode == 40|| e.keyCode == 83) { // DOWN
            if(map[ninja.y+1][ninja.x] != 0){
                ninja.y++;                
            }
        }
        else if (e.keyCode == 38 || e.keyCode == 87) { // UP
            if(map[ninja.y-1][ninja.x] != 0){
                ninja.y--;
            }
        }
        if(map[ninja.x][ninja.y] == 1){
            map[ninja.x][ninja.y] = 0;
        }
        worldMap(map);
        drawNinjaMan();

};