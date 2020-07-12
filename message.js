// auto.js的读取短信权限必须打开，否则会报错
// 搬运了大佬们的代码
//qq：2891547475
importClass(android.net.Uri);
var SMS_INBOX = Uri.parse("content://sms/");
var cr = context.getApplicationContext().getContentResolver();
var projection = ["_id", "address", "person", "body", "date", "type"]
var cur = cr.query(SMS_INBOX, projection, null, null, "date desc");
cur.moveToFirst()
var number = cur.getString(cur.getColumnIndex("address")); 
var body = cur.getString(cur.getColumnIndex("body")); 
log(number + ":" + body)