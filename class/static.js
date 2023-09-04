class Uploader {
  testText = "initial word";

  static {
    this.testText = "hello world";
  }

  static staticPrint() {
    console.log(`this text is ${this.testText}`);
  }

  print() {
    console.log(`this text is ${this.testText}`);
  }
}

Uploader.staticPrint(); // this static text is hello world
const uploader = new Uploader();
uploader.print(); // this text is initial word
uploader.staticPrint(); // TypeError
