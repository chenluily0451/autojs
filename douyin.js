launchApp('抖音短视频');
sleep(5000);
for(let i = 1;i < 5;i++){
  sleep(5000);
  swipe(300,1075,200,200,300);
  id("aad").findOne().click();
  sleep(3000);
  back();
  toast('刷到第' + i + '条了');
}
