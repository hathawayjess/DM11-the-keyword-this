//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      //The purpose of the this keyword is to eliminate ambiguity. It also allows you to reuse functions
      //and methods in different contexts.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      //1) By default, 'this' refers to the global object.
      //2) When a function is called as a property on a parent object, 'this' refers to the parent object inside that function
      //3) When a function is called with the 'new' operator, 'this' refers to the newly created object inside that function
      //4) When a function is called using 'call' or 'apply', 'this' refers to the first argument passed to 'call' or 'apply'.
      //   If the first argument is null or not an object, 'this' refers to the global object

  // 3) What is the difference between call and apply?

      //Answer -- A for Array, C for comma
      //.call and .apply will call a function with the given this value (passed in as an argument).
      //Call requires parameters to be listed explicitly, while apply lets you invoke the function with parameters as an array.


  // 4) What does .bind do?

      //Answer
      //.bind creates a new function that, when called, has its 'this' keyword set to the provided value.
      //It essentially ties 'this' to the specified context.


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. 
  //*Don't use 'user' instead use the 'this' keyword*

    //Code Here
    var user = {
      username: 'username-string',
      email: 'email-string',
      getUsername: function() {
        return this.username;
      }
    }

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
  user.getUsername();

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.move = 0;
  this.moveCar = function() {
    return this.move += 10;
 
  }
}

  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned 
//from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're 
//invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, 
//use the proper syntax that will allow for you to call the getYear function with the prius then 
//the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here
  Car.prototype.getYear = getYear;
  //Since we can't add getYear as a property on both objects individually,
  //we can alter the Car prototype to add it to every instance of the Car object.


//New Problem



var myUser = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getMyUsername = function(){
  console.log(this.username);
};

setTimeout(getMyUsername, 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
//Note(no tests)
  //Answer Here
  //It will return undefined.

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here
  //It is bound to the global scope.

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.
setTimeout(getMyUsername.bind(myUser), 5000);