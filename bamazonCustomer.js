var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'claire2316',
  database : 'Bamazon_db'
});

connection.connect();

function ask() {
	connection.query("SELECT * FROM products", function(err, result) {
		console.log("\n");
		for (var i=0; i< result.length; i++) {
			console.log("ID: " + result[i].item_id + " " + result[i].product_name + "  Price: $" + result[i].price + "  In Stock: " + result[i].stock_quantity);
		}
	});

	inquirer.prompt ([
		{
			name: "itemId",
			message: "\nEnter the ID of the item you would like to order:"
		},
		{
			name: "quantity",
			message: "Number of items: "
		}
	])
	.then(function(answers) {
	 	//query the db and get the item requested by user
		connection.query("SELECT * FROM products where ?",
			{
				item_id: answers.itemId
			},
		 	function(err, result) {
				if (err) throw(err);
				if (result[0].stock_quantity - answers.quantity < 0) {
					console.log("\nInsufficient quantity!\n");
					ask();
				}
				else {
					//calculate new quantity
					var quantity = result[0].stock_quantity - answers.quantity;			
					showCost(answers.itemId, answers.quantity, result[0].price, result[0].product_sales);
					updateDB(answers.itemId, quantity);
					
				}
			}
		);
	});
}

function updateDB (ix, quantity) {
	connection.query("UPDATE products SET ? WHERE ?",
		[
			{
				stock_quantity: quantity
			},
			{
				item_id: ix
			}
		],
		function(err) {
			if(err) {
				console.log(err);
			}
			else {
				console.log("item quantity updated.\n");
				ask();
			}
		}
	);
}

function showCost(ix, quant, price, sales) {
	var purchase = quant * price;
	console.log("\nThe total cost of your purchase will be: $" + purchase + "\n");
}

ask();
 


