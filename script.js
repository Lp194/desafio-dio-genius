let order= [];
let clickedOrder = [];
let score = 0;

const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');

//create random numbers
let shuffleOrder = () =>
{
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order)
    {
        let elementColor = createElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//return color
let createElement = (color) =>
{
    if(color == 0)
    {
        return green;
    }
    else if(color == 1)
    {
        return red;
    }
    else if(color == 2)
    {
        return yellow;
    }
    else if(color == 3)
    {
        return blue;
    }
}

//light next color
let lightColor = (element, number) =>
{
    number = number * 500;
    setTimeout(()=>
    {
        element.classList.add('selected');
    },number - 250);
    setTimeout(()=>
    {
      element.classList.remove('selected');  
    });
}

//check button equals generating order
let checkOrder = () =>
{
    for(let i in clickedOrder)
    {
        if(clickedOrder[i] != order[i])
        {
           lose();
           break;
        }
    }    
    if(clickedOrder.length == order.length)
    {
        alert(`Score: ${score}\n You win, next level beginning in fews seconds!`);
        nextLevel();
    }
}

//user click
let click = (color) =>
{
    clickedOrder[clickedOrder.length] = color;
    createElement(color).classList.add('selected');

    setTimeout(() => 
    {
        createElement(color).classList.remove('selected');
        checkOrder();
    },250);

}

//next level
let nextLevel = () =>
{
    score++;
    shuffleOrder();
}

//game over
let lose = () =>
{
    alert(`Score: ${score}\n Game over, try again!`);
    order = [];
    clickedOrder =[];

    newGame();
}

//new game
let newGame = () =>
{
    alert('Game start!');
    score = 0;

    nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

newGame();