function mergeSort(array) {
  if(array.length<2){
    return array;
  }
  var splits = mergeSort.split(array);
  var left = splits[0];
  var right = splits[1];
  return mergeSort.merge(mergeSort(left),mergeSort(right));
  }

mergeSort.split = function(wholeArray){
  var center = wholeArray.length/2;
  var left = wholeArray.slice(0,center);
  var right = wholeArray.slice(center);
  return [left, right];
}

mergeSort.merge = function(left, right){
  var merged = [];
  var leftIndex = 0;
  var rightIndex = 0;
  while(leftIndex < left.length && rightIndex < right.length){
    if (left[leftIndex] < right[rightIndex]){
      merged.push(left[leftIndex]);
      leftIndex++;
    } else {
      merged.push(right[rightIndex]);
      rightIndex++;
    }
  }
  for(; leftIndex<left.length; leftIndex++){
    merged.push(left[leftIndex]);
  }
  for(; rightIndex<right.length; rightIndex++){
    merged.push(right[rightIndex]);
  }
  return merged;
}

