var foo: string = 'aa';
// var foo: number = "aa" コンパイルエラー

/// duck typing
interface IHuman {
  mouseNum: number;
  getName(): string;
}

interface IDog {
  mouseNum: number;
  getName(): string;
  ha: Number;
}
var human: IHuman = {
  mouseNum: 1,
  getName() {
    return 'taro';
  },
};
var dog: IDog = {
  mouseNum: 1,
  getName() {
    return 'john';
  },
  ha: 10,
};

function IHumanShout(human: IHuman) {}

// 口が一個で名前がとれれば、IDOGも人間
IHumanShout(human);
IHumanShout(dog);
