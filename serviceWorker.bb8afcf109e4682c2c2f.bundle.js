"use strict";
(self["webpackChunkgerador_validador_cpf"] = self["webpackChunkgerador_validador_cpf"] || []).push([[49],{

/***/ 6946:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerServiceWorker": function() { return /* binding */ registerServiceWorker; }
/* harmony export */ });
var registerServiceWorker = function registerServiceWorker() {
  if (navigator.serviceWorker.controller) {
    console.info('Active service worker found, no need to register');
  } else {
    // Register ServiceWorker
    navigator.serviceWorker.register('service-worker.js', {
      scope: './'
    }).then(function (reg) {
      return console.info('Service worker has been registered for scope: ' + reg.scope);
    }).catch(function () {
      console.error("Service worker hasn't been registered");
    });
  }
};

/***/ })

}]);
//# sourceMappingURL=serviceWorker.bb8afcf109e4682c2c2f.bundle.js.map