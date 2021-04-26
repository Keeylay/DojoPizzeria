function random(x) {
    return Math.floor(Math.random()*x)
}
// (random(this.crusttype.lenth))

function PizzaOven (crusttype, saucetype, cheese, toppings) {
var pizza = {}
    pizza.crust = crusttype;
    pizza.sause = saucetype;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza
}    

var pizza1 = PizzaOven ("Deep Dish", "Traditional", ["Mozzarella"], ["Pepperoni", "Sausage"])
    console.log(pizza1);

var pizza2 = PizzaOven ("Hand Tossed", "Marinara", ["Mozzarella", "Feta"], ["Mushrooms", "Olives", "Onions"])
    console.log(pizza2);

var pizza3 = PizzaOven ("Hand Tossed", "Marinara", "Parmisan", ["Pepperoni", "Onions"])
    console.log(pizza3);

var pizza4 = PizzaOven ("Thin Crust", "BBQ", ["Mozzarella", "Parmisan"], ["Mushrooms", "Sausage", "Onions"])
    console.log(pizza4);

var pizza = {
    crusttype: ["Deep Dish", "Hand Tossed", "Thin Crust"],
    saucetype: ["Traditional", "Marinara", "BBQ"],
    cheese: ["Mozzarella", "Feta", "Parmisan"],
    toppings: ["Sausage", "Pepperoni", "Mushrooms", "Olives", "Onions", "Tomatoes"],
    
    makepizza: function ThePizzaOven() {
        var n = [];
        n.push(this.crusttype[random(this.crusttype.length)])
        n.push(this.saucetype[random(this.saucetype.length)])
        var chez = []
        for(i=0; i < this.cheese.length; i++) {
            var addcheese = random(2);
            if (addcheese == 1) {
                n.push(this.cheese[i])
            }
        }
        
        var top = []
        for(i=0; i < this.toppings.length; i++) {
            var addtopping = random(2);
            if (addtopping == 1) {
                n.push(this.toppings[i])
            }
        }

        var chez = n;
        var top = n;

        return n
        // return(this.crusttype[0] + " " + this.saucetype[0] + " " +  this.cheese[0] + " " +  this.toppings[0]);
    }
    };


var x = pizza.makepizza();
console.log(x);
