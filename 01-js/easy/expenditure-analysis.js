/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categories = [];
  const expense = [];
  for (transaction of transactions) {
    if (categories.indexOf(transaction.category) == -1) {
      newCategory = transaction.category;
      categories.push(newCategory);
    }
  }
  //console.log(categories);
  for (category of categories) {
    let totalSpent = 0;
    for (transaction of transactions) {
      if (transaction.category == category) {
        totalSpent = totalSpent + transaction.price;
      }
    }
    newObj = { category: category, totalSpent: totalSpent };
    expense.push(newObj);
  }
  return expense;
}
const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 2,
    timestamp: 1656076800000,
    price: 5,
    category: "Transportation",
    itemName: "Bus ticket",
  },
  {
    id: 3,
    timestamp: 1656076800000,
    price: 15,
    category: "Food",
    itemName: "Groceries",
  },
];

const totalSpentByCategory = calculateTotalSpentByCategory(transactions);
console.log(totalSpentByCategory);
module.exports = calculateTotalSpentByCategory;
