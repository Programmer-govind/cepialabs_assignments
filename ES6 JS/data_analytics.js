const users = [
    { id: 1, name: "Amit", country: "India", premium: true },
    { id: 2, name: "John", country: "USA", premium: false },
    { id: 3, name: "Riya", country: "India", premium: true },
    { id: 4, country: "Germany", premium: false }, // missing name intentionally
    { id: 5, name: "Neha", country: "India", premium: false },
];

const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1000 },
    { id: 2, name: "E-book", category: "Digital", price: 15 },
    { id: 3, category: "Fashion", price: 200 }, // missing name
    { id: 4, name: "Headphones", category: "Electronics", price: 120 },
    { id: 5, name: "Course", category: "Digital", price: 50 },
];

const orders = [
    { orderId: 1, userId: 1, productId: 1, quantity: 2 },
    { orderId: 2, userId: 2, productId: 2, quantity: 1 },
    { orderId: 3, userId: 1, productId: 4, quantity: 3 },
    { orderId: 4, userId: 5, productId: 5, quantity: 4 },
    { orderId: 5, userId: 3, productId: 3, quantity: 2 },
    { orderId: 6, userId: 9, productId: 2, quantity: 1 }, // invalid user
];


// This data is intentionally imperfect — some users and products are missing names, and some orders are invalid. You must clean and process it before generating analytics

// Step-2
// ----------------

// Compute using .reduce():

// 1. Total revenue.

const validOrders = orders.filter(order => users.some(user => user.id === order.userId));

const totalRevenue = validOrders.map(order => products[order.productId - 1].price * order.quantity).reduce((accumulator, currentPrice) => {

    return accumulator + currentPrice;
}, 0);

console.log(totalRevenue);



// 2. Total items sold.

const totalSales = validOrders.reduce((accumulator, currentOrder) => {

    return accumulator + currentOrder.quantity;
}, 0);

console.log(totalSales);


// 3. Revenue by country.

const revenueByCountry = validOrders.reduce((accumulator, order) => {
    const user = users.find(u => u.id === order.userId);
    const product = products[order.productId - 1];
    const revenue = product.price * order.quantity;
    accumulator[user.country] = (accumulator[user.country] || 0) + revenue;
    return accumulator;
}, {});
console.log(revenueByCountry);

// 4. Top spending user.

const userSpend = validOrders.reduce((acc, order) => {
    const product = products[order.productId - 1];
    const spend = product.price * order.quantity;
    acc[order.userId] = (acc[order.userId] || 0) + spend;
    return acc;
}, {});

const topSpendingUserId = Object.keys(userSpend).reduce((a, b) => userSpend[a] > userSpend[b] ? a : b);
const topSpendingUser = users.find(user => user.id == topSpendingUserId);
console.log(topSpendingUser);

// 5. Most sold product.

const productQuantities = validOrders.reduce((accumulator, order) => {
    accumulator[order.productId] = (accumulator[order.productId] || 0) + order.quantity;
    return accumulator;
}, {});

const mostSoldProductId = Object.keys(productQuantities).reduce((a, b) => productQuantities[a] > productQuantities[b] ? a : b);
const mostSoldProduct = products.find(product => product.id == mostSoldProductId);
console.log(mostSoldProduct);


// 6. Average order value.

const averageOrderValue = totalRevenue / validOrders.length;
console.log(averageOrderValue);


// Step-3
// ____
// Use .map() to return a new array of objects containing:

// 1. The product name (if missing, show "Unknown"),
// 2. The category,
// 3. The price including 10% GST (price * 1.1).

const productNames = products.map(product => ({
    name: product.name ? product.name : 'Unknown',
    category: product.category,
    gstPrice: (product.price * 1.1).toFixed(2)
}));
console.log(productNames);