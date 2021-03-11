# React + Typescript + Webpack Boilerplate

React + Typescript + Webpack 기반의 개발환경을 미리 세팅해둔 프로젝트입니다.

### 패키지 설치

```shell
$ yarn install --frozen-lockfile
```

### DevServer 구동

```shell
$ yarn dev
```

### 번들링

```shell
$ yarn build
```

### npm을 사용해야하는 경우

`yarn`이 아닌 `npm`을 사용해야 하는 경우 [`synp`](https://www.npmjs.com/package/synp)을 이용하여 `yarn.lock`을 `package-lock.json`으로 변환합니다.

```shell
$ npx synp --source-file yarn.lock
```

기존에 있던 `yarn.look` 삭제

```shell
$ rm -rf yarn.look
```

`package-lock.json`을 기준으로 `node_modules` 생성

```shell
$ npm ci
```
