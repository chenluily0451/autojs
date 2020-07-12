function launchMIDU(){
  toast("米度脚本启动中等待3秒...");
  auto.waitFor();
  setScreenMetrics(1080, 1920);
  launchApp("米读极速版");
  sleep(10000);
  toast("开始阅读...");
  className("android.support.v4.widget.DrawerLayout").scrollLeft();

  var timer = setInterval(()=>{
    swipe(1000,300,200,300,200);
  },500);

  var w = floaty.rawWindow(
    <vertical margin="1dp" w="*" gravity="center">
      <button id="stopAll" w="200" height="50" style="Widget.AppCompat.Button.Colored" alpha="0.8" text="停止脚本"/>
    </vertical>
  );
  w.setPosition(0, 1820);
  w.stopAll.click(()=>{
    clearInterval(timer)
    engines.stopAllAndToast();
  })
  

}

engines.stopAllAndToast();
engines.execScript("launchMIDU", "launchMIDU();\n" + launchMIDU.toString())