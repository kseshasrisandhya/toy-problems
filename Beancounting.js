var countB = function(sandhya){
    var count =0;
    for (let i=0;i<(sandhya.length);i++){
        if (sandhya[i]==="B"){
            count=count+1;
        }
    }
    return count;

};
// console.log(countB("BBBBREBBB","B"))

var countchar = function(str,char){
    var count1 =0;
    for (let i=0;i<(str.length);i++){
        if (str[i]===char){
            count1=count1+1;
        }
    }
    return count1;

};
console.log(countB("BBBBREBBB"))
console.log(countchar("gaggr","g"))

