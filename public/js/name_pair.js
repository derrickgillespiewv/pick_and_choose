    // function nameFunction() {
    //     // var x is how you make variable
    //     // document = webpage
    //     //get element by id = searhc for the tag <> that contains namesList
    //     var x = document.getElementById("nameList").value;
    //     //innerHTML
    //     //ie <p id-"demo""></p>
    //     document.getElementById("demo").innerHTML = "Enter their names in the boxes below:<br>";
    //     // variabe loop while i <= variable x 
    //     // last line 
    //     for (var i = 1; i <= x; i++) {
    //         var input = document.createElement("input");
    //         input.type = "text";
    //         input.name = "text[]";
    //         input.id = "nameJava";

    //         input.required = true;
    //         input.placeholder = "Enter Name"
    //         document.getElementById("demo").appendChild(input).value;
    //     }
    // }
function nameFunction() {
                var user_given_number = 1 
                for (var i = 1; i <= user_given_number; i++) {
                    var input = document.createElement("input");
                    input.type = "text";
                    input.name = "text[]";
                    input.id = "nameJava";
                    input.required = true;
                    input.placeholder = "Enter Name"
                    document.getElementById("demo").appendChild(input).value;
                }
            }
        


function checkFunction() {

var x = document.getElementById("checkInput").value;
     // create the necessary elements
var label= document.createElement("label");
var description = document.createTextNode(pair);
var checkbox = document.createElement("input");

checkbox.type = "checkbox";    // make the element a checkbox
checkbox.name = "slct[]";      // give it a name we can check on the server side
checkbox.value = pair;         // make its value "pair"

label.appendChild(checkbox);   // add the box to the element
label.appendChild(description);// add the description to the element

// add the label element to your div
document.getElementById('some_div').appendChild(label);   
}