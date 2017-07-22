var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'claire2316',
  database : 'Bamazon_db'
});

connection.connect();

inquirer.prompt ([
	{
		name: "itemId",
		message: "Enter the ID of the item you would like to order: "
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
				console.log("Insufficient quantity!");
			}
			else {
				//calculate new quantity
				var quantity = result[0].stock_quantity - answers.quantity;
				updateDB(answers.itemId, quantity);
				showCost(answers.itemId, answers.quantity, result[0].price, result[0].product_sales);
			}
		}
	);
});

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
				console.log("item quantity updated.");
			}
		}
	);
}

function showCost(ix, quant, price, sales) {
	var purchase = quant * price;
	console.log("The total cost of your purchase will be: $" + purchase);
	updateProductSales(ix, purchase, sales);
}

function updateProductSales(i, addTo, pSales) {
	var newSales = addTo + pSales;
	connection.query("UPDATE products SET ? WHERE ?",
		[
			{
				product_sales: newSales
			},
			{
				item_id: i
			}
		],
		function(err) {
			if(err) throw(err);
		}
	);
}
 


