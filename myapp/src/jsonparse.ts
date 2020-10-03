import fs = require('fs');

function loadJSONSync(filename: string) {
  return JSON.parse(fs.readFileSync(filename).toString());
}

// 正しいjsonファイル
console.log(loadJSONSync('good.json'));

// 存在しないファイル: fs.readFileSync が失敗する
try {
  console.log(loadJSONSync('absent.json'));
} catch (err) {
  console.log('absent.json error', err.message);
}

// 正しくないjsonファイル 例: ファイルは存在するが、JSON.parseが失敗する
try {
  console.log(loadJSONSync('invalid.json'));
} catch (err) {
  console.log('invalid.json error', err.message);
}
