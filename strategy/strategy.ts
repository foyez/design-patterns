interface SortStrategy {
  sort(dataset: number[]): number[];
}

class BubbleSortStrategy implements SortStrategy {
  sort(dataset: number[]): number[] {
    console.log("Sorting using bubble sort");

    // Implement bubble sort logic
    return dataset;
  }
}

class QuickSortStrategy implements SortStrategy {
  sort(dataset: number[]): number[] {
    console.log("Sorting using quick sort");

    // Implement quick sort logic
    return dataset;
  }
}

class Sorter {
  protected sorterSmall: SortStrategy;
  protected sorterBig: SortStrategy;

  constructor(sorterSmall: SortStrategy, sorterBig: SortStrategy) {
    this.sorterSmall = sorterSmall;
    this.sorterBig = sorterBig;
  }

  sort(dataset: number[]): number[] {
    if (dataset.length > 5) {
      return this.sorterBig.sort(dataset);
    } else {
      return this.sorterSmall.sort(dataset);
    }
  }
}

const smalldataset = [1, 3, 4, 2];
const bigdataset = [1, 4, 3, 2, 8, 10, 5, 6, 9, 7];

const sorter = new Sorter(new BubbleSortStrategy(), new QuickSortStrategy());
sorter.sort(smalldataset); // Sorting using bubble sort
sorter.sort(bigdataset); // Sorting using quick sort
