class Person {
    constructor(name, flying, chess, fear, total) { //total is the new constructor that takes the math equation = flying + chess - fear
        this.name = name;
        this.flying = flying;
        this.chess = chess;
        this.fear = fear;
        this.total = total;
    }
}
class FriendshipBook {
    constructor() {
        this.bestFriends = [];
    }
    add(name) {
        this.bestFriends.push(name);
    }
    friendshipCalc(flying, chess, fear) {
        const total = parseInt(flying, 10) + parseInt(chess, 10) - parseInt(fear, 10);
        console.log(total);
        return total;
    }
    printNames() { //printing out all of the friends and their data
        for (let i = 0; i < this.bestFriends.length; i++) {
            console.log(this.bestFriends[i]);
        }
    }
}
const friend1 = new Person("Dash", 9, 3, 3, 9);
const friend2 = new Person("Smash", 3, 6, 9, 0);
const book = new FriendshipBook(); 
book.add(friend1);
book.add(friend2);
while (true) {
    let choice = prompt("Interested in becoming Chewbacca's friend?");
    if (choice.toLowerCase() === "yes") {
        const name = prompt("Enter Name: ");
        const flying = prompt("Enter flying skill on a scale of 1-10: ");
        const chess = prompt("Enter chess skill on a scale of 1-10: ");
        const fear = prompt("Enter fear of galactic empire on a scale of 1-10: ");
        const total = book.friendshipCalc(flying, chess, fear); // moved this line of code ABOVE the add on line 36, so now the returned total can be added to the array in the new constructor field
        book.add(new Person(name, parseInt(flying, 10), parseInt(chess, 10), parseInt(fear, 10), total)); // parseInt changes the prompt strings into integers
        // console.log(book);
        book.printNames(); //calling the function to print out each names
        console.log(` is the perfect candidate!`)
    }  else {
        console.log("you're missing out, kid");
        book.printNames();
        break;
    }
}

console.log(book);




