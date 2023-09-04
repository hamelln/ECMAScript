// prefix "#"은 해당 속성을 비공개로 만들어 내부에서만 접근, 변경 가능.

class User {
  #id = "abck-1231-asxc";
  #password = "1234";
  nickname;

  constructor(nickname) {
    this.nickname = nickname;
  }

  printUser() {
    console.log(`${this.nickname} ${this.#id} ${this.#password}`);
  }

  setPassword(newPassword) {
    this.#password = newPassword;
  }

  setId(newId) {
    this.#id = newId;
  }

  setNickname(newNickname) {
    this.nickname = newNickname;
  }
}

const user = new User("hamelln");
user.printUser();
user.setId("1111");
user.setNickname("abcd");
user.setPassword("0000");
user.printUser();
console.log(user.nickname);
console.log(user.#id); // SyntaxError
