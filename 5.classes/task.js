class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
  
    fix() {
      this.state = Math.min(this.state * 1.5, 100);
    }
  
    set state(value) {
      if (value < 0) {
        this._state = 0;
      } else if (value > 100) {
        this._state = 100;
      } else {
        this._state = value;
      }
    }
  
    get state() {
      return this._state;
    }
  }
  
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
  
      this.type = "magazine";
    }
  }
  
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
  
      this.author = author;
  
      this.type = "book";
    }
  }
  
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
  
      this.type = "novel";
    }
  }
  
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
  
      this.type = "fantastic";
    }
  }
  
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
  
      this.type = "detective";
    }
  }
  
  class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
  
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book);
      }
    }
  
    findBookBy(type, value) {
      return this.books.find((book) => book[type] === value) || null;
    }
  
    giveBookByName(bookName) {
      const index = this.books.findIndex((book) => book.name === bookName);
      if (index !== -1) {
        return this.books.splice(index, 1)[0];
      }
      return null;
    }
  }
  
  class Student {
    constructor(name) {
      this.name = name;
      this.marks = {};
    }
  
    addMark(mark, subject) {
      if (mark < 2 || mark > 5) return;
      if (!this.marks[subject]) {
        this.marks[subject] = [];
      }
      this.marks[subject].push(mark);
    }
  
    getAverageBySubject(subject) {
      if (!this.marks[subject]) return 0;
      const sum = this.marks[subject].reduce((acc, curr) => acc + curr, 0);
      return sum / this.marks[subject].length;
    }
  
    getAverage() {
      const subjects = Object.keys(this.marks);
      if (subjects.length === 0) return 0;
      const totalAverage = subjects.reduce(
        (acc, subject) => acc + this.getAverageBySubject(subject),
        0
      );
      return totalAverage / subjects.length;
    }
  }
  
  const student = new Student("Олег Никифоров");
  student.addMark(5, "химия");
  student.addMark(5, "химия");
  student.addMark(5, "физика");
  student.addMark(4, "физика");
  student.addMark(6, "физика");
  console.log(student.getAverageBySubject("физика"));
  console.log(student.getAverageBySubject("биология"));
  console.log(student.getAverage());
  