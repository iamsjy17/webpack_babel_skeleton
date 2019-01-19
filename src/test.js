import "@babel/polyfill";
import Util from "./util";

class Test {
  constructor(num) {
    this.num = num;
  }
  Print() {
    console.log(Util.Print(this.num));
  }
}

window.Test = Test;
