log4MeteorClientConfig = {
  sendToServer : true
};

Meteor.startup(function(){
  if(console && console.log){
    //원래 기능을 이름을 바꿔서 남겨준다.
    console["_log_"] = console.log;
    // 새 기능을 정의한다.
    console.log = function(){
      // 원래 로그를 찍어준다.
      console._log_.apply(this.arguments);
      // 서버로 로그를 보낸다.
      if(log4MeteorClientConfig.sendToServer){
        try{
          Meteor.call("log4Meteor",{
            m : arguments[0]
            ,t : new Date().getTime()
          });
        }catch(err){

        }
      }
    };
  }
});
