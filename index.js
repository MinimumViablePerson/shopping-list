// - Use these items and it's respective prices as a starting point: Milk at £1,20, Cocoa at £2,00, Salad at £2,00, Carrots at £2,00, Tomatoes at £2,50, Ready meals at £ 5,00
// - Store this information using the most appropriated data structures we've studied so far ✅
// - Have a prompt to add an item to the list (you can have two prompts for the item and its price) ✅
// - Output a list displaying each item and its price ✅
// - Output the total at the end ✅

// create a shopping list
let shoppingList = [
  ['Milk', 1.2],
  ['Cocoa', 2],
  ['Salad', 2],
  ['Carrots', 2],
  ['Tomatoes', 2.5],
  ['Ready meals', 5],
]

// for (
//   let userWantsToAddItem = confirm('Add an item?'); // initialization
//   userWantsToAddItem === true; // condition
//   userWantsToAddItem = confirm('Add another item?') // final-step
// ) {
//   // get item name and price from the user
//   let itemName = String(prompt('What is the name of the item you want to add?'))
//   let itemPrice = Number(
//     prompt('What is the price of the item you want to add?')
//   )

//   shoppingList.push([itemName, itemPrice])
// }

let userWantsToAddItem = confirm('Add an item?')

while (userWantsToAddItem) {
  let itemName = String(prompt('What is the name of the item you want to add?'))
  let itemPrice = Number(
    prompt('What is the price of the item you want to add?')
  )
  shoppingList.push([itemName, itemPrice])

  userWantsToAddItem = confirm('Add another item?')
}

// display each item and calculate the total
let total = 0
for (let item of shoppingList) {
  let name = item[0]
  let price = item[1]
  total += price
  console.log(`${name}: £${price.toFixed(2)}`)
}

// display total
console.log(`Total: £${total.toFixed(2)}`)

// let itemNames = ['Milk', 'Cocoa', 'Salad', 'Carrots', 'Tomatoes', 'Ready meals']
// let itemPrices = [1.2, 2, 2, 2, 2.5, 5]

// let shoppingList = [
//   { name: 'Milk', price: 1.2 },
//   { name: 'Cocoa', price: 2 },
//   { name: 'Salad', price: 2 },
//   { name: 'Carrots', price: 2 },
//   { name: 'Tomatoes', price: 2.5 },
//   { name: 'Ready meals', price: 5 },
// ]
