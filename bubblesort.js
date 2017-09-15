function bubbleSort(array) {
  var notDone = true;
  while (notDone){
    notDone = false;
    for (var i = 0; i < array.length; i++){
      if (array[i] > array[i + 1]){
        bubbleSort.swap(array, i);
        notDone = true;
      } else {
        continue;
      }
    }
  }
  return array;
}

bubbleSort.swap = function(array, index){
  var temp = array[index];
  array[index] = array[index + 1];
  array[index + 1] = temp;
};
