describe('Bubble Sort', function(){

  beforeAll(function () {
    spyOn(bubbleSort, 'swap').and.callThrough();
  });

  it('handles an empty array', function(){
    expect(bubbleSort([])).toEqual([]);
    expect(bubbleSort.swap.calls.count()).toEqual(0);
  });


  it('handles an array with one item', function(){
    expect(bubbleSort([5])).toEqual([5]);
    expect(bubbleSort.swap.calls.count()).toEqual(0);
  });

  it('handles an array with multiple items', function(){
    expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
    expect(bubbleSort.swap.calls.count()).toEqual(3);
  });
});
