
function writeIt(){
    var line1 ="In a [place] a long time ago";
    var line2 ="There Lived an [animal] that liked to";
    var line3 = "[action] people";
    var place = "crater";
    var animal = "Elephant";
    var action = "smell";
    var mablib = line1.concat(line2,line3);
    mablib = mablib.replace("[place]",place);
    mablib = mablib.replace("[animal]",animal);
    mablib = mablib.replace("[action]",action);

    var place1= document.getElementById("place1");
    place1.textContent = mablib;  
 }

 writeIt();
 