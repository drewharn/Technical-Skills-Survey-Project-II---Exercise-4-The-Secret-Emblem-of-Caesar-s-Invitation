const emblemClue1 = "Eagle";
const emblemClue2 = "Laurel";
const emblemClue3 = 7;
//Step 1:
let startLoc = "";
if (emblemClue1 === "Eagle")
{
    startLoc = "Forum";
}
else if(emblemClue1 = "Lion"){
    startLoc = "Colosseum";
}
else{
    startLoc = "Villa";
}

//Step 2:
if (emblemClue2 === "Laurel" && startLoc === "Forum"){
    startLoc += " of Augustus";
}
if (emblemClue2 === "Grapes" || startLoc === "Villa"){
    startLoc += " of Pompey";
}

//Step 3:
switch(emblemClue3){
    case 3: 
    startLoc += " South";
    break;
    case 4: 
    startLoc += " West";
    break;
    case 7: 
    startLoc += " North";
    break;
    case 9: 
    startLoc += " East";
    break;
}
//Question: It's important to be careful when using == instead of === in our conditionals because == stands for equality by affecting type coercion so that before completing the comparison it converts operands to the same type. === stands for strict equality by checking to ensure that the type and value are both the same. So if you are expecting a certain value and type == may not necessarily give you the intended results if you don't want both values coerced to the same type before being compared.