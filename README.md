# express_sample
* `express` x `typescript`でsoapサーバ、soapクライアントを作る

## 環境構築
パッケージをインストール
```js
npm i --save express
npm i --save-dev @types/express // typescriptはトランスパイルするので開発のみ使用
npm i --save-dev typescript
npm i -D jest @types/jest ts-jest
```
トランスパイルの設定を作成
```
node_modules\.bin\tsc --init

```
jestの設定
```
npx jest --init
```
npx jestでテスト実行

## 調査
プロパティファイルとかの構成をどうすればよいか

## testコードの`Cannot find name 'describe'.`を回避する方法
もう一個したでVSCODEで開き直す　ー＞　？？

## 試してみた技術
* ポリモーフィックにストラテジーパターンを実装
* DB接続
* 環境変数の取得

## link
[node soap公式](https://github.com/vpulim/node-soap#soapcreateclienturl-options-callback---create-a-new-soap-client-from-a-wsdl-url-also-supports-a-local-filesystem-path)
[pg](https://symfoware.blog.fc2.com/blog-entry-2114.html)