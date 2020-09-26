# express_sample
* `express` x `typescript`でsoapサーバ、soapクライアントを作る

## 環境構築
パッケージをインストール
```js
npm i --save express
npm i --save-dev @types/express // typescriptはトランスパイルするので開発のみ使用
npm i --save-dev typescript
```
トランスパイルの設定を作成
```
node_modules\.bin\tsc --init

```

## 調査
プロパティファイルとかの構成をどうすればよいか

## link
[node soap公式](https://github.com/vpulim/node-soap#soapcreateclienturl-options-callback---create-a-new-soap-client-from-a-wsdl-url-also-supports-a-local-filesystem-path)