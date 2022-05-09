## create react app

with TypeScript command.

```
npx create-react-app my-app --template typescript
```

## Create TS File.

If not TS.config file.

```
npx tsc --init
```

## ESlint と prettier の導入の参考

[参考の記事](https://zenn.dev/jpn_asane/articles/d7f44682b74fdc)

## Husky と lint-staged のインストール [参考](https://zenn.dev/akino/articles/96ae4136447433#%E5%AE%9F%E8%A1%8C%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%97%E3%83%88%E3%82%92%E8%A8%98%E8%BF%B0)

```
npm i --save-dev husky lint-staged
```

package.json に lint-staged を追加

Git Hook の有効化ディレクトリの作成

```
npx husky install
```

## コミット前の hooks を作成

```
npx husky add .husky/pre-commit "npm lint-staged"
```

## プッシュ前の hooks を作成

```
npx husky add .husky/pre-push "npm lint-staged"
```
