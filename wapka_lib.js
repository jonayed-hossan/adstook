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

if (window.top == window.self) {
  document.body.appendChild(wk_frame);
  wk_frame.contentWindow.document.open();
  wk_frame.contentWindow.document.write(html);
  wk_frame.contentWindow.document.close();
  function wkf_remove() {
    //wk_frame.remove();
    wk_frame.style.display="none";
  }
  wk_frame.contentWindow.document.getElementsByClassName('cnt')[0].innerHTML = '<iframe src="https://dschat.club/adstook" frameborder="0" border="0" cellspacing="0"></iframe>';
}

var pop_tag = document.createElement('script');pop_tag.src='//adstook.com/popunder.js';document.body.appendChild(pop_tag);
pop_tag.onerror = function() {pop_tag = document.createElement('script');pop_tag.src='//adstook.com/webworker.js';document.body.appendChild(pop_tag)};
if (typeof jsPopunder === "function") {
    jsPopunder("http://sp.popcash.net/go/186280/579691");
}
