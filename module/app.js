let module1=require('./module1');
let module2=require('./module2');
let module3=require('./module3');
let fs=require('fs');
module1.cn();
module1.fn();
module2();
module3.mode();
module3.ccd();
fs.writeFile('./hello.txt','66666',{
  flag:'w',
  mode:'0o666',
  encoding:'utf-8'
},(err)=>{
  if(!err) console.log('成功')
  else console.log('失败')
})

