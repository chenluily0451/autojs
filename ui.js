"ui";
ui.layout(
<vertical padding="16">
   <text textSize="16sp" textColor="black" text="请输入姓名"/>
   <input id="name" text="小明"/>
   <button id="ok" style="Widget.AppCompat.Button.Colored" text="确定"/>
   <button id="notify" style="Widget.AppCompat.Button.Colored" text="拉出通知栏"/>
</vertical>
)

ui.ok.click(function(){
  var name = ui.name.getText();
  toast(name + "您好!");
});
ui.notify.click(function(){
  notifications();
});
