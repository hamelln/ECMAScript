// static은 클래스 객체를 통해서만 접근 가능
// static이 아닌 것은 인스턴스를 통해서만 접근 가능
class Uploader {
  static staticText = "static word";
  static #verb = "a";
  instanceText = "instance word";

  static {
    this.staticText = "hello world";
  }

  static staticPrint() {
    console.log(`this static text is ${this.#verb} ${this.staticText}`);
    console.log(`this instance text is ${this.instanceText}`);
  }

  print() {
    console.log(`this static text is ${this.staticText}`);
    console.log(`this instance text is ${this.instanceText}`);
  }
}

const uploader = new Uploader();

// this static text is a hello world
// this instance text is undefined
Uploader.staticPrint();

// this static text is undefined
// this instance text is instance word
uploader.print();
