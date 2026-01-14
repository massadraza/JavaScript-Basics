let x = 10;
const y = 20;

// const -> immutable
// let -> mutable

const user = {
    name: "Massad",
    age: 22,
    greet() {
        console.log("Hi");
    }
}

user.greet()

function add(a, b) {
    return a + b
}

const add = (a, b) => a + b; 

const obj = {
    value: 10,
    getValue: function () {
        return this.value
    }
}


