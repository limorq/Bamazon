var inquirer = require('inquirer');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'claire2316',
  database : 'Bamazon_db'
});
connection.connect();
//command option function
function Command() {
//List menu options
	inquirer.prompt ([
	{
		name: "command",
		type: "list",
		message: "\nChoose your command:",
		choices: [
			"View products for sale",
			"View low inventory",
			"Add inventory",
			"Create a new product"]
	}
	]).then(function(answers) {
		switch (answers.command) {
			case "View products for sale":
				viewProducts();
				break;
			case "View low inventory":
				viewLowInventory();
				break;
			case "Add inventory":
				addInventory();
				break;
			case "Create a new product":
				createNewProduct();
				break;
		}
	});
}
function viewProducts() {
	connection.query("SELECT * FROM products",
		function(err, results) {
				for (var j=0; j<results.length; j++) {
				console.log("Item ID:" + results[j].item_id + 
					"\nPoduct Name:" + results[j].product_name + "\nDept:" + results[j].dept_name + "\nPrice: $" +results[j].price + "\nStock Quantity:" + results[j].stock_quantity + "\n");
				}
				Command();
		}
	);	
}
function viewLowInventory() {
	connection.query("SELECT * FROM products WHERE stock_quantity < 5",
		function(err, res) {
			for (var j=0; j<res.length; j++) {
				console.log("\nItem: " + res[j].product_name + "\nInventory: " + res[j].stock_quantity + "\n");
			}
			Command();
		}
	);	
}
function addInventory() {
	inquirer.prompt([
		{
			name: "item",
			message: "Which item id would you like to increase the inventory?"
		},
		{
			name: "number",
			message: "How many?"
		}
	]).then(function(answer) {
		connection.query("UPDATE products SET ? WHERE ?",
			[
				{
					stock_quantity: answer.number
				},
				{
					product_name: answer.item
				}
			],
			function(err, res) {
				if (err) throw(err);
				console.log("\n" + answer.item + " has been updated.\n");
				Command();
			}
		);
	});	
}
function createNewProduct() {
	inquirer.prompt(
		[
			{
				name: "newProduct",
				message: "What is the name of the new product?"
			},
			{
				name: "dept",
				message: "What deptartment is this new item?"
			},
			{
				name: "number",
				message: "How many/quantity?"
			},
			{
				name: "price",
				message: "What is the price for each unit?"
			}
		]).then(function(answers) {

			connection.query("INSERT INTO products SET ?",
					{
						product_name: answers.newProduct,
						dept_name: answers.dept,
						stock_quantity: answers.number,
						price: answers.price
					},
				function(err, res) {
				 	if (err) throw(err);
					console.log("\n" + answers.newProduct + " has been added.");
					Command();
				}
			);
		});		
}
Command();
