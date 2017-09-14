function bubbleSort(array) {
  var notDone = true;
  while(notDone){
    notDone = false;
    for(var i=0; i<array.length; i++){
      if(array[i] > array[i+1]){
        bubbleSort.swap(array, i, i+1);
        notDone = true;
      } else {
        continue;
      }
    }
  }
  return array;
}

bubbleSort.swap = function(array, index1, index2){
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}
