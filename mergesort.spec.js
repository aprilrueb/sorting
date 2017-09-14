describe('Merge Sort', function() {
  describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
      expect(mergeSort.split([1,2,3,4])).toEqual([[1,2], [3,4]]);
      expect(mergeSort.split([1,2,3,4,5,6,7])).toEqual([[1,2,3], [4,5,6,7]]);
      });
    });

  describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
      expect(mergeSort.merge([1,3,5,7],[2,4,6,8])).toEqual([1,2,3,4,5,6,7,8]);
    });
  });

  describe('Merge Sort function', function(){
    it('it returns a sorted array', function(){
      expect(mergeSort([1,5,4,3,2,7,6,8])).toEqual([1,2,3,4,5,6,7,8]);
    });
  });
});
