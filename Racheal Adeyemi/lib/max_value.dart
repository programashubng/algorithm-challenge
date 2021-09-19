int calculate() {
  return 6 * 7;
}
int maxValue(List arr) {
  var largest = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] > largest){
      largest = arr[i];
    }
  }
  return largest;
}