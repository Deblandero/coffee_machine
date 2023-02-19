const input = require('sync-input');
let howMuchWaterHas = 400;
let howMuchMilkHas = 540;
let howMuchCoffeeBeansHas = 120;
let howMuchSugarHas = 200;
let cupsNumber = 9;
let moneyHas = 550;
let engine = true;

let action = input("Write action (buy, fill, take, remaining, exit):\n")

let check = (water, milk, coffeeBeans, sugar) => {
	if (howMuchWaterHas && howMuchWaterHas < water) {
		console.log("Sorry, not enough water!")
		return false;
	} else if (howMuchMilkHas && howMuchMilkHas < milk) {
		console.log("Sorry, not enough milk!")
		return false;
	} else if (howMuchCoffeeBeansHas && howMuchCoffeeBeansHas < coffeeBeans) {
		console.log("Sorry, not enough coffee beans!")
		return false;
	} else if (cupsNumber === 0) {
		console.log("Sorry, not enough cups!")
		return false;
	} else if (howMuchSugarHas && howMuchSugarHas < sugar) {
		console.log("Sorry, not enough sugar!")
		return false;
	} else {
		console.log("I have enough resources, making you a coffee!")
		return true;
	}
}

while (action !== "exit" && engine === true) {
	switch (action) {
		case "buy":
			let choose = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:\n")
			let sugarNeeded = input("Do you want sugar ? 1 - 1 spoon, 2 - 2 spoons, 3 - 3 spoons: \n")
			let waterNeeded = 0;
			let milkNeeded = 0;
			let coffeeBeansNeeded = 0;
			let cost = 0;
			let cups = 0;
			switch (choose) {
				case '1':
					waterNeeded = check(250, false, 16) ? 250 : 0;
					coffeeBeansNeeded = check(250, false, 16) ? 16 : 0;
					sugarNeeded = check(250, false, 16, sugarNeeded) ? sugarNeeded : 0;
					cost = check(250, false, 16) ? 4 : 0
					cups = check(250, false, 16) ? 1 : 0
					break
				case '2':
					waterNeeded = check(350, 75, 20) ? 350 : 0;
					milkNeeded = check(350, 75, 20) ? 75 : 0;
					coffeeBeansNeeded = check(350, 75, 20) ? 20 : 0;
					sugarNeeded = check(350, 75, 20, sugarNeeded) ? sugarNeeded : 0;
					cost = check(350, 75, 20) ? 7 : 0
					cups = check(350, 75, 20) ? 1 : 0
					break
				case '3':
					waterNeeded = check(200, 100, 12) ? 200 : 0;
					milkNeeded = check(200, 100, 12) ? 100 : 0;
					coffeeBeansNeeded = check(200, 100, 12) ? 12 : 0;
					sugarNeeded = check(200, 100, 12, sugarNeeded) ? sugarNeeded : 0;
					cost = check(200, 100, 12) ? 6 : 0
					cups = check(200, 100, 12) ? 1 : 0
					break
				case 'back':
					break
			}
			howMuchWaterHas = howMuchWaterHas - waterNeeded;
			howMuchMilkHas = howMuchMilkHas - milkNeeded;
			howMuchCoffeeBeansHas = howMuchCoffeeBeansHas - coffeeBeansNeeded;
			moneyHas = moneyHas + cost;
			cupsNumber = cupsNumber - cups;
			break;
		case "fill":
			let waterToAdd = input("Write how many ml of water you want to add:\n");
			let milkToAdd = input("Write how many ml of milk you want to add:\n");
			let coffeeBeansToAdd = input("Write how many grams of coffee beans you want to add:\n");
			let cupToAdd = input("Write how many disposable cups you want to add:\n")
			howMuchWaterHas = howMuchWaterHas + parseInt(waterToAdd);
			howMuchMilkHas = howMuchMilkHas + parseInt(milkToAdd);
			howMuchCoffeeBeansHas = howMuchCoffeeBeansHas + parseInt(coffeeBeansToAdd);
			cupsNumber = cupsNumber + parseInt(cupToAdd);
			break
		case "take":
			console.log("I gave you $" + moneyHas);
			moneyHas = 0;
			break;
		case "remaining":
			console.log("\n" +
				"The coffee machine has:\n" +
				howMuchWaterHas + " ml of water\n" +
				howMuchMilkHas + " ml of milk\n" +
				howMuchCoffeeBeansHas + " g of coffee beans\n" +
				cupsNumber + " disposable cups\n" +
				"$" + moneyHas + " of money\n");
			break;
		case "exit":
			console.log("off")
			engine = false;
			break
	}
	action = input("Write action (buy, fill, take, remaining, exit):\n")
}
