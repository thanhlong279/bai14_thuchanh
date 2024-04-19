let arr1 = [3, 5, 1, 8, -3, 7, 8];
let arr2 = [7, 12, 6, 9, 20, 56, 89];
let arr3 = [];
let arr4 = [0, 0, 0, 0, 0, 0];
function minArray(arr){
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}
let min1 = minArray(arr1);
document.write("min arr1 la :" + min1 + "<br>");
let min2 = minArray(arr2);
document.write(" min arr2 la :" + min2+ "<br>");
let min3 = minArray(arr3);
document.write(" min arr3 la :" + min3+ "<br>");
let min4 = minArray(arr4);
document.write(" min arr4 la :" + min4+ "<br>");
