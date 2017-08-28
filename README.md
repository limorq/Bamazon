# Bamazon

This is an Amazon-like storefront using mySQL that will take in orders from customers and deplete stock from the store's inventory. The app has two programs, one for customers and one for managers.

The customer app will show users a list of available products for sale and ask for their choice. Once the user has selected their choice, they will be asked the quantity of their choice. The app will then verify product availabbility and then process the order by updating inventory and showing the user the amount due. 

![customer screenshot](https://github.com/limorq/Bamazon/blob/master/images/Capture1.PNG)

If there is not enough inventory for the customer's order, a message displays informing the customer there is an insufficient quantity and allows them to choose again.

![insuf shot](https://github.com/limorq/Bamazon/blob/master/images/Capture2.PNG)


The manager app will allow managers to view inventory, view low inventory below 5 items, add inventory, and create new products:

![](https://github.com/limorq/Bamazon/blob/master/images/Capture3.jpg)

The view of the entire inventory will display as follows:

![](https://github.com/limorq/Bamazon/blob/master/images/Capture4.PNG)

Low inventory will display all products where the inventory is below 5 items:

![](https://github.com/limorq/Bamazon/blob/master/images/Capture5.PNG)

The manager has an option to add inventory. The database table reveals there are only 4 Gucci Sandals available:

![](https://github.com/limorq/Bamazon/blob/master/images/table1.jpg)

Once the manager selects to add inventory:

![](https://github.com/limorq/Bamazon/blob/master/images/Capture6.jpg)

Then we see the table has been updated in the database:

![](https://github.com/limorq/Bamazon/blob/master/images/table2.jpg)

Finally, the manager can add products:

![](https://github.com/limorq/Bamazon/blob/master/images/Capture7.PNG)
![](https://github.com/limorq/Bamazon/blob/master/images/table3.jpg)


