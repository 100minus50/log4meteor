Package.describe({
  name: '100minus50:log4meteor',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'send your console.log result to server',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.7.0.3');
  api.use('ecmascript');
  //api.mainModule('log4meteor.js');

  // 패키지 코드를 작성한 파일명과 서버, 클라이언트 여부를 알려 준다.
  api.addFiles('log4meteor-server.js','server');
  api.addFiles('log4meteor-client.js','client');

  //패키지 바깥쪽 코드, 즉 사용자가 개입할 객체를 선언한다.
  api.export("log4MeteorServerConfig","server"); // 서버에서 config 가능하게 하자.
  api.export("log4MeteorCollection","server"); // 서버에서 컬렉션을 접근 가능하게 하자.
  api.export("log4MeteorClientConfig","client"); // 웹브라우저에서 config 가능하게 하자.



});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('100minus50:log4meteor');
  api.mainModule('log4meteor-tests.js');
});
