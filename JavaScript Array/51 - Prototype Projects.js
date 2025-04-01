class BookStore {
    constructor() {
      this.books = [
        { id: 1, title: "JavaScript: The Good Parts", author: "Douglas Crockford", price: 29.99, stock: 10 },
        { id: 2, title: "Eloquent JavaScript", author: "Marijn Haverbeke", price: 24.99, stock: 5 },
        { id: 3, title: "You Don't Know JS", author: "Kyle Simpson", price: 19.99, stock: 8 },
        { id: 4, title: "JavaScript: The Definitive Guide", author: "David Flanagan", price: 34.99, stock: 3 },
        { id: 5, title: "Clean Code", author: "Robert C. Martin", price: 27.99, stock: 7 }
      ];
      this.sales = [];
      this.cart = [];
    }
  
    // Demonstrate all array methods through bookstore operations
    demonstrateAllMethods() {
      console.log("\n=== Array Method Demonstrations ===\n");
      
      // 1. length
      console.log(`1. length: We have ${this.books.length} books in stock`);
  
      // 2. constructor
      console.log(`2. constructor: ${this.books.constructor === Array}`);
  
      // 3. at
      console.log(`3. at: First book is "${this.books.at(0).title}"`);
  
      // 4. concat
      const newBooks = this.books.concat(
        { id: 6, title: "Design Patterns", author: "Gang of Four", price: 39.99, stock: 4 }
      );
      console.log(`4. concat: After adding new book, total is ${newBooks.length}`);
  
      // 5. copyWithin
      const arr = [1, 2, 3, 4, 5];
      arr.copyWithin(0, 3);
      console.log(`5. copyWithin: ${arr}`);
  
      // 6. fill
      const prices = new Array(3).fill(9.99);
      console.log(`6. fill: Special sale prices ${prices}`);
  
      // 7. find
      const jsBook = this.books.find(book => book.title.includes("JavaScript"));
      console.log(`7. find: First JS book found: "${jsBook.title}"`);
  
      // 8. findIndex
      const cleanCodeIndex = this.books.findIndex(book => book.title === "Clean Code");
      console.log(`8. findIndex: "Clean Code" is at index ${cleanCodeIndex}`);
  
      // 9. findLast (ES2023)
      const lastJsBook = this.books.findLast(book => book.title.includes("JavaScript"));
      console.log(`9. findLast: Last JS book: "${lastJsBook.title}"`);
  
      // 10. findLastIndex (ES2023)
      const lastJsIndex = this.books.findLastIndex(book => book.title.includes("JavaScript"));
      console.log(`10. findLastIndex: Last JS book index: ${lastJsIndex}`);
  
      // 11. lastIndexOf
      const numbers = [1, 2, 3, 2, 1];
      console.log(`11. lastIndexOf: ${numbers.lastIndexOf(2)}`);
  
      // 12. pop
      const lastBook = this.books.pop();
      console.log(`12. pop: Removed "${lastBook.title}"`);
      this.books.push(lastBook); // Put it back
  
      // 13. push
      this.books.push({ id: 7, title: "Refactoring", author: "Martin Fowler", price: 32.99, stock: 6 });
      console.log(`13. push: Added new book, now ${this.books.length} books`);
  
      // 14. reverse
      const reversedTitles = this.books.map(b => b.title).reverse();
      console.log(`14. reverse: Reversed titles: ${reversedTitles.join(", ")}`);
  
      // 15. shift
      const firstBook = this.books.shift();
      console.log(`15. shift: Removed first book "${firstBook.title}"`);
      this.books.unshift(firstBook); // Put it back
  
      // 16. unshift
      this.books.unshift({ id: 0, title: "TypeScript Handbook", author: "Microsoft", price: 0, stock: 1 });
      console.log(`16. unshift: Added free book at beginning`);
      this.books.shift(); // Remove it
  
      // 17. slice
      const firstTwoBooks = this.books.slice(0, 2);
      console.log(`17. slice: First two books: ${firstTwoBooks.map(b => b.title).join(", ")}`);
  
      // 18. sort
      const sortedByPrice = [...this.books].sort((a, b) => a.price - b.price);
      console.log(`18. sort: Cheapest book: "${sortedByPrice[0].title}" ($${sortedByPrice[0].price})`);
  
      // 19. splice
      const removedBooks = this.books.splice(1, 2);
      console.log(`19. splice: Removed ${removedBooks.length} books from middle`);
      this.books.splice(1, 0, ...removedBooks); // Put them back
  
      // 20. includes
      const hasExpensive = this.books.some(b => b.price > 30);
      console.log(`20. includes/some: Has expensive books: ${hasExpensive}`);
  
      // 21. indexOf
      const numbers2 = [10, 20, 30];
      console.log(`21. indexOf: ${numbers2.indexOf(20)}`);
  
      // 22. join
      const bookTitles = this.books.map(b => b.title);
      console.log(`22. join: All titles: ${bookTitles.join(" | ")}`);
  
      // 23. keys
      console.log("23. keys:");
      for (const key of this.books.keys()) {
        console.log(`  Book ${key + 1}: ${this.books[key].title}`);
      }
  
      // 24. entries
      console.log("24. entries:");
      for (const [index, book] of this.books.entries()) {
        console.log(`  ${index}: ${book.title}`);
      }
  
      // 25. values
      console.log("25. values:");
      for (const book of this.books.values()) {
        console.log(`  ${book.title}`);
      }
  
      // 26. forEach
      console.log("26. forEach:");
      this.books.forEach((book, index) => {
        console.log(`  ${index + 1}. ${book.title}`);
      });
  
      // 27. filter
      const jsBooks = this.books.filter(book => book.title.includes("JavaScript"));
      console.log(`27. filter: Found ${jsBooks.length} JavaScript books`);
  
      // 28. flat
      const nestedArrays = [[1, 2], [3, [4, 5]]];
      console.log(`28. flat: ${nestedArrays.flat(2)}`);
  
      // 29. flatMap
      const allAuthors = this.books.flatMap(book => book.author.split(" "));
      console.log(`29. flatMap: All author names: ${allAuthors.join(", ")}`);
  
      // 30. map
      const bookPrices = this.books.map(book => book.price);
      console.log(`30. map: Book prices: ${bookPrices.join(", ")}`);
  
      // 31. every
      const allHaveStock = this.books.every(book => book.stock > 0);
      console.log(`31. every: All books in stock: ${allHaveStock}`);
  
      // 32. some
      const hasFree = this.books.some(book => book.price === 0);
      console.log(`32. some: Has free books: ${hasFree}`);
  
      // 33. reduce
      const totalValue = this.books.reduce((sum, book) => sum + (book.price * book.stock), 0);
      console.log(`33. reduce: Total inventory value: $${totalValue.toFixed(2)}`);
  
      // 34. reduceRight
      const authorsRight = this.books.reduceRight((str, book) => `${str}, ${book.author}`, "");
      console.log(`34. reduceRight: Authors reversed: ${authorsRight.substring(2)}`);
  
      // 35. toLocaleString
      const pricesLocales = bookPrices.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
      console.log(`35. toLocaleString: Formatted prices: ${pricesLocales}`);
  
      // 36. toString
      console.log(`36. toString: ${this.books.toString()}`);
  
      // 37. toReversed (ES2023)
      const reversedBooks = this.books.toReversed();
      console.log(`37. toReversed: Last book is now first: "${reversedBooks[0].title}"`);
  
      // 38. toSorted (ES2023)
      const sortedBooks = this.books.toSorted((a, b) => b.price - a.price);
      console.log(`38. toSorted: Most expensive: "${sortedBooks[0].title}" ($${sortedBooks[0].price})`);
  
      // 39. toSpliced (ES2023)
      const withoutSecond = this.books.toSpliced(1, 1);
      console.log(`39. toSpliced: After removing second book: ${withoutSecond.length} remain`);
  
      // 40. with (ES2023)
      const updatedBooks = this.books.with(0, {
        ...this.books[0],
        price: this.books[0].price + 5
      });
      console.log(`40. with: Updated first book price from $${this.books[0].price} to $${updatedBooks[0].price}`);
    }
  
    // Interactive demo
    start() {
      console.log("Welcome to BookStore Array Methods Demo!");
      this.demonstrateAllMethods();
      console.log("\nAll array methods demonstrated!");
    }
  }
  
  // Run the demo
  const store = new BookStore();
  store.start();