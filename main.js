const input = require('sync-input');

const supplies = [400, 540, 120, 9, 550];

const espresso = {
    water: 250,
    milk: 0,
    coffee: 16,
    price: 4
}
const latte = {
    water: 350,
    milk: 75,
    coffee: 20,
    price: 7
}
const cappuccino = {
    water: 200,
    milk: 100,
    coffee: 12,
    price: 6
}
    function returnResources() {
    console.log("\nThe coffee machine has:\n"+
        supplies[0] + " ml of water\n" +
        supplies[1] + " ml of milk\n" +
        supplies[2]  + " g of coffee beans\n" +
        supplies[3]  + " disposable cups\n" +
        "$" + supplies[4]  + " of money")
}
function takeMoney() {
    console.log(`I give you $${supplies[4]}`);
    supplies[4] = 0;
}
function updateSupplies(coffee) {
    if (supplies[0] - coffee.water < 0) {
        console.log("Sorry, not enough water!");
    } else if (supplies[1] - coffee.milk < 0) {
        console.log("Sorry, not enough milk!");
    } else if (supplies[2] - coffee.coffee < 0) {
        console.log("Sorry, not enough coffee!");
    } else if (supplies[3] - 1 < 0) {
        console.log("Sorry, not enough cups!");
    } else {
        console.log("I have enough resources, making you a coffee!")
        supplies[0] -= coffee.water;
        supplies[1] -= coffee.milk;
        supplies[2] -= coffee.coffee;
        supplies[3] -= 1;
        supplies[4] += coffee.price;
    }
}

const buyCoffee = () => {
    const coffeeType = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:\n");
    switch (coffeeType) {
        case "1":
            updateSupplies(espresso);
            break;
        case "2":
            updateSupplies(latte);
            break;
        case "3":
            updateSupplies(cappuccino);
            break;
        case "back":
            break;
    }
}
function fillMachine() {
    let addWater = Number(input('How much water do you want to add?\n '));
    supplies[0] += addWater;
    let addMilk = Number(input('How much milk do you want to add?\n '));
    supplies[1] += addMilk;
    let addCoffeeBeans = Number(input('How much coffee beans do you want to add?\n '));
    supplies[2] += addCoffeeBeans;
    let addDisposableCups = Number(input('How many disposable cups do you want to add?\n '));
    supplies[3] += addDisposableCups;
}
  let exit = true;
    while (exit) {
        let action = input('Write action (buy, fill, take, remaining, exit): \n');
        switch (action) {
            case "remaining":
                returnResources();
                break;
            case "buy":
                buyCoffee();
                break;
            case "fill":
                fillMachine();
                break;
            case "take":
                takeMoney();
                break;
            case "exit":
                exit = false;
                break;
            default:
        }
    }
