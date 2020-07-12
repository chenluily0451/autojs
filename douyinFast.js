
function launchDY(){

  launchApp("抖音极速版");
  toast("脚本开始,等待5s");
  var w = floaty.rawWindow(
    <vertical margin="1dp" w="*" gravity="center">
      <button id="stopAll" w="200" height="80" style="Widget.AppCompat.Button.Colored" text="停止脚本"/>
      <button id="restart" w="200" height="80"  text="重新开始"/>
    </vertical>
  );
  w.setPosition(500, 500);
  w.stopAll.click(()=>{
    engines.stopAllAndToast();
    home();
  });
  w.restart.click(()=>{
    engines.stopAllAndToast();
    engines.execScript("launchDY", "launchDY();\n" + launchDY.toString())
  });

  sleep(5000);
  for(let i = 0;i<1000;i++){
    swipe(300,1075,200,200,300);
    sleep(getRandomDelay(10000))
  }

  function getRandomDelay(t){
    var arr = [1444,-4444,2222,-2222,3333,-3333,1537,2422];
    t+=arr[Math.round(Math.random()*7)];
    if(t<0 || t > 60000){
      t = 10000;
    }
    toast(t/1000 + "s后加载下一条视频");
    return t
  }
}

engines.stopAllAndToast();
engines.execScript("launchDY", "launchDY();\n" + launchDY.toString())


