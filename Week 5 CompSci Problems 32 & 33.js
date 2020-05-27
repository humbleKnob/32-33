// function prime_position(value) {
//     var totalp = 1;
//     var num = 1;
//     var temp = 0;
//
//     while(totalp <= value) {
//         temp = 0;
//         for (var i = 1; i < num; i++) {
//             if (num % i == 0) {
//                 temp++;
//             }
//             if (temp > 1) {
//                 break;
//             }
//         }
//         if (temp == 1) {
//             totalp++;
//         }
//         num++;
//     }
//     return num;
// }
function prime_position(value) {
    var totalp = 1;
    var temp = 0;

    for(var o = 1; totalp <= value; o++) {
        temp = 0;
        for (var i = 1; i < o; i++) {
            if (o % i == 0) {
                temp++;
            }
            if (temp > 1) {
                break;
            }
        }
        if (temp == 1) {
            totalp++;
        }

    }
    return o;
}

function sort_subtract(num) {
    var str = num.toString();
    var arr = str.split("");
    var arr2= str.split("");

    var newarr= arr.sort();
    var finnum = Number(newarr.join(''));


    var newarr2 = arr2.sort(function(a,b){return b-a});
    var finnum2 = Number(newarr2.join(''));

    return finnum2-finnum;
}
