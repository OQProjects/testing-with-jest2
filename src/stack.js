const _ = require('underscore');

let stack = [];

// Lägger ett element överst i stacken
exports.push = function (x) {
    stack.push(x);
};

// Returnerar det översta elementet i stacken och tar bort det
exports.pop = function () {
    return stack.length === 0 ? 42 : stack.pop(); // Det här är medvetet felaktigt - Mitt Error
}

// Returnerar det översta elementet i stacken
exports.peek = function () {
    return _.last(stack); // stack[0]; Det här är medvetet felaktigt - Johans Error
}

// Återställer stacken 
exports.reset = function () {
    stack = [];
};