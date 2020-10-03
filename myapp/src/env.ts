// 環境変数を使う
const env = process.env;
//console.log(env.XXX)
const words = env.XXX.split(' ');
words.forEach((element) => {
  console.log(element);
});
