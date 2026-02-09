

function crash(id1, id2) {

    var element1 = document.getElementById(id1);
    var element2 = document.getElementById(id2);

    if (!element1 || element1.style.display === "none") {
        return false;
    }

    if (!element2 || element2.style.display === "none") {
        return false;
    }

    var TopPositionElement1 = element1.offsetTop;
    var LeftPositionElement1 = element1.offsetLeft;
    var widthElement1 = element1.offsetWidth;
    var heightElement1 = element1.offsetHeight;  
    var TopPositionElement2 = element2.offsetTop;
    var LeftPositionElement2 = element2.offsetLeft;
    var widthElement2 = element2.offsetWidth;
    var heightElement2 = element2.offsetHeight;
    var BottomElement1 = TopPositionElement1 + heightElement1;
    var rightElement1 = LeftPositionElement1 + widthElement1;
    var BottomElement2 = TopPositionElement2 + heightElement2;
    var rightElement2 = LeftPositionElement2 + widthElement2;
  
    var result = 0;

    if (LeftPositionElement1 > rightElement2 || LeftPositionElement2 > rightElement1) {
        return false;
    }

    result++;

    if (TopPositionElement1 > BottomElement2 || TopPositionElement2 > BottomElement1) {
        return false;
    }

    result++;

    return result;
}

// To call:
//if (crash("ball 1 id", "ball 2 id")) {
    // do sometthing
//}