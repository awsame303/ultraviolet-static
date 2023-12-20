"use strict";

const _0x1b7d28=_0x3652;function _0x3e4f(){const _0x89b7fd=['Access\x20granted!','3737367ElgTgB','17235660dWqyaq','301VwYTmX','96198PWzxml','1077464SDdMqL','4MUnvgM','href','https://www.google.com','4002190bUhmpK','location','3608805qTVBjV','8EWpcqf','301249JcAUzs','pass\x20pls:'];_0x3e4f=function(){return _0x89b7fd;};return _0x3e4f();}(function(_0x131862,_0x4c24a2){const _0x293081=_0x3652,_0x4642a8=_0x131862();while(!![]){try{const _0x320c25=parseInt(_0x293081(0x1c9))/0x1+parseInt(_0x293081(0x1c1))/0x2+-parseInt(_0x293081(0x1c7))/0x3*(-parseInt(_0x293081(0x1c2))/0x4)+-parseInt(_0x293081(0x1c5))/0x5+parseInt(_0x293081(0x1c0))/0x6*(parseInt(_0x293081(0x1bf))/0x7)+-parseInt(_0x293081(0x1c8))/0x8*(-parseInt(_0x293081(0x1bd))/0x9)+-parseInt(_0x293081(0x1be))/0xa;if(_0x320c25===_0x4c24a2)break;else _0x4642a8['push'](_0x4642a8['shift']());}catch(_0x396bc5){_0x4642a8['push'](_0x4642a8['shift']());}}}(_0x3e4f,0x983ea));function _0x3652(_0x58418b,_0x5ca2e8){const _0x3e4f34=_0x3e4f();return _0x3652=function(_0x3652cc,_0x44cf93){_0x3652cc=_0x3652cc-0x1bd;let _0x51fb4e=_0x3e4f34[_0x3652cc];return _0x51fb4e;},_0x3652(_0x58418b,_0x5ca2e8);}const e='_0x123',a=prompt(_0x1b7d28(0x1ca));if(a===e)alert(_0x1b7d28(0x1cb));else a===null||a===''?window[_0x1b7d28(0x1c6)][_0x1b7d28(0x1c3)]='https://www.google.com':window[_0x1b7d28(0x1c6)][_0x1b7d28(0x1c3)]=_0x1b7d28(0x1c4);

/**
 * @type {HTMLFormElement}
 */
const form = document.getElementById("uv-form");
/**
 * @type {HTMLInputElement}
 */
const address = document.getElementById("uv-address");
/**
 * @type {HTMLInputElement}
 */
const searchEngine = document.getElementById("uv-search-engine");
/**
 * @type {HTMLParagraphElement}
 */
const error = document.getElementById("uv-error");
/**
 * @type {HTMLPreElement}
 */
const errorCode = document.getElementById("uv-error-code");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    await registerSW();
  } catch (err) {
    error.textContent = "Failed to register service worker.";
    errorCode.textContent = err.toString();
    throw err;
  }

  const url = search(address.value, searchEngine.value);
  location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
});
