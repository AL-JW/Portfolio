

//Add function
function add(a, b)
{
    a + " + " + b + " = " + (a * b);
}

//simple subtraction
function subtract(a, b)
{
    
    return a + " - " + b + " = " + (a * b);
}


//simple multiplication 
function multiply(a, b)
{
    return a + " * " + b + " = " + (a * b);
}

//simple division
function divide(a, b)
{
    if (b !== 0) 
    {
       return  a + " /" + b + " = " + (a * b);
    }

    else
    {
        return "Cannot divide by zero";
    }
   
}


//Here is array used twice with a loop and an if statement
//It will also allow user to enter numbers to add to the array

var theArray = [];

function addToTheArray() 
{
    var inputField = document.getElementById("inputField");
    var inputValue = parseInt(inputField.value);

    //a required if statement for the projects rubric
    if (!isNaN(inputValue))  //This makes sure the input is a number the '!' negates isNaN
    {
        theArray.push(inputValue);
        inputField.value = "";
        displayArray();
    }

    else
    {
        alert("No! Enter A VALID number.")
    }
}

//Here is a function to display this array to the webpage so we can see it

function displayArray()
{
    var container = document.getElementById("arrayContainer");
    container.innerHTML = "";


    //A loop to print out each result
    for (var i = 0; i < theArray.length; i++)
    {
        container.innerHTML += theArray[i] + "<br>";
    }
}


//To use the array twice I am going to make a function that 
//gets the sum of all the array index values

function sumOfArrayElements()
{

    var sum = 0;

    for (var i = 0; i < theArray.length; i++)
    {
        sum += theArray[i];
    }

    return sum;

}

//Function to display the sum

function displaySum()
{
    var sum = sumOfArrayElements();
    var container = document.getElementById("sumContainer");
    container.innerHTML = "Sum of the array elements you entered: " + sum;
}


//Using the GetElements By TageName

function displayListItems()
{
    var itemsOfList = document.getElementsByTagName("li");
    var listContainer = document.getElementById("listContainer");

    listContainer.innerHTML = "";

    for (var i = 0; i < itemsOfList.length; i++)
    {
        var listItem = itemsOfList[i];

        //display to the page
        listContainer.innerHTML += listItem.textContent + "<br>";
    }
}