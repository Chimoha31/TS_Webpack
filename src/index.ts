// saySomething.tsの拡張子を付けなくて良いのは、webpackのextensionで設定しているから(webpack line:12参照)。
import SaySomething from "./saySomething";

const root: HTMLElement | null = document.getElementById('root');

// インスタンス化
const saySomething = new SaySomething("Hello Typescript");
saySomething.sayText(root);