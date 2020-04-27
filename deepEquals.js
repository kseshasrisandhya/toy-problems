function deepEqual(a, b) {
    if (a === b) return true;
    if (a == null || typeof a != "object" || b == null || typeof b != "object" )
    return false;
    var propsInA = 0;
    var propsInB = 0;
    for (var prop in a)
        //  console.log(prop);
         propsInA += 1;
         
    for (var props in b) {
       
        propsInB += 1;
        
        if (!(props in a) || !deepEqual(a[props], b[props]))
        return false;
}
return propsInA == propsInB;
}
let test = {will: 25, object: 2};
// console.log(deepEqual(obj, obj));
console.log(deepEqual({will: 25,object:2}, {will:25,object: 2}));
let obj = {here: 25, object: 2};
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));