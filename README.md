클라이언트 console.log를 서버로 보내 줍니다.

[Meteor 코딩 공작소 (박승현 저 / 길벗 출판)](https://ridibooks.com/v2/Detail?id=754023337) 실습 예제입니다.

meteor add 100minus50:log4meteor

## 옵션

### 서버 로그 옵션

데이터베이스에 남기기

```js
if(Meteor.isServer){
  Meteor.startup(function(){
    log4MeteorServerConfig.type = "db";
  });
}

```

콘솔에 남기기

```js
if(Meteor.isServer){
  Meteor.startup(function(){
    log4MeteorServerConfig.type = "console";
  });
}

```

### 클라이언트 로그 옵션

서버에 로그를 보내지 않기

```js
if(Meteor.isClient){
  Meteor.startup(function(){
    log4MeteorClientConfig.sendToServer = false; /* default - true */
  });
}

```
