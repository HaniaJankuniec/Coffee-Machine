# Coffee-Machine
This program simulates a coffee machine that can dispense three types of coffee: espresso, latte, and cappuccino. Users can choose to buy a coffee, fill the machine with supplies, take the money in the machine, or check the remaining supplies.

## Installation and Usage

To run the program, you need to have Node.js installed. Clone the repository to your local machine and navigate to the project directory. Then, run the following command to start the program:

Copy code
node index.js
The program will prompt you to enter an action: buy, fill, take, remaining, or exit. Enter the action you want to perform and follow the prompts.

## Input/Output

When you start the program, you will see the following prompt:

vbnet
Copy code
Write action (buy, fill, take, remaining, exit):
Enter one of the actions and press enter. Here are some examples of input/output:

vbnet
Copy code
Write action (buy, fill, take, remaining, exit):
remaining
The coffee machine has:
400 ml of water
540 ml of milk
120 g of coffee beans
9 disposable cups
$550 of money

Write action (buy, fill, take, remaining, exit):
buy
What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:
2
I have enough resources, making you a coffee!

Write action (buy, fill, take, remaining, exit):
fill
How much water do you want to add?
 2000
How much milk do you want to add?
 500
How much coffee beans do you want to add?
 100
How many disposable cups do you want to add?
 20

Write action (buy, fill, take, remaining, exit):
take
I give you $7

Write action (buy, fill, take, remaining, exit):
exit

## Resources

This program uses the sync-input library to read user input synchronously.

## Contribution Guidelines

This project is not open source, but feel free to fork it and modify it for your own use. If you find any issues, please report them to the original author.



