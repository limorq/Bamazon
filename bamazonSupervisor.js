var inquirer = require('inquirer');
var mysql = require('mysql');
require('console.table');

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
		message: "Choose your command:",
		choices: [
			"View products sales by dept",
			"Create a new dept"]
	}
	]).then(function(answers) {
		switch (answers.command) {
			case "View products sales by dept":
				viewDept();
				break;
			case "Create a new dept":
				createDept();
				break;
		}
	});
}

function viewDept() {
	connection.query("DESCRIBE departments",
		function(err,res) {
			if (err) throw(err);
			console.table(res[0], res[1], res[2]);
			Command();
		});
}

function createDept() {
	inquirer.prompt([
		{

		}])
}
Command();