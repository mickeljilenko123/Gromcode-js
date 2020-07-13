/* Этот код менять не нужно */
const defaultUserName = 'anonymus';
const userName = 'John';
const anotherUser = null;
const isAdmin = false;
const message = 'text';
const anotherMessage = 'text as well';
const isLoggedIn = Boolean(userName);

/* В коде ниже нужно использовать правильные операторы после знака присваивания */
const activeUser = anotherUser || defaultUserName;
console.log(activeUser);
const hasAccess = isAdmin || isLoggedIn;
console.log(hasAccess);
const isTruthy = message !== anotherMessage;
console.log(isTruthy);
const isFalsy = !isLoggedIn;
console.log(isFalsy);
const isNotTrue = typeof String(message) == 'number';
console.log(isNotTrue);
const isTrue = typeof Boolean(message) == 'boolean';
console.log(isTrue);