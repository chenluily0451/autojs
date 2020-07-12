function launchHTT(){
  toast("脚本启动中等待3秒...");
  auto.waitFor()
  setScreenMetrics(1080, 1920);
  launchApp("惠头条");
  sleep(10000);

  var w = floaty.rawWindow(
    <vertical margin="1dp" w="*" gravity="center">
      <button id="stopAll" w="200" height="80" style="Widget.AppCompat.Button.Colored" alpha="0.8" text="停止脚本"/>
    </vertical>
  );
  w.stopAll.click(()=>{
    engines.stopAllAndToast();
  })
  w.setPosition(0, 1200);

  sleep(10000);
  click(170,210);
  toast("热点点击完成") 
  function run(){
    sleep(5000);
    swipe(300,800,300,1200,800);
    sleep(5000);
    click(39,340);
    toast("新闻点击完成") 
    
    var t = 0 
    var timer = setInterval(()=>{
        t++ 
        if(t > 250){
          clearTimeout(timer);
          back();
          run()
        }
        swipe(300,1075,200,1000,300);
    },1000)
  }
  run();
  setInterval(()=>{},1000)
}
    




engines.stopAllAndToast();
engines.execScript("launchHTT", "launchHTT();\n" + launchHTT.toString())