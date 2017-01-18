/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(12)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(13)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Applications/XAMPP/xamppfiles/htdocs/pagekit2/packages/pagekit/theme-one/app/components/node-theme.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },

/***/ 12:
/***/ function(module, exports) {

	'use strict';

	// <template>

	//     <div class="uk-form-horizontal">

	//         <template v-if="node.type === 'page'">
	//             <div class="uk-form-row">
	//                 <span class="uk-form-label">{{ 'Titel' | trans }}</span>
	//                 <div class="uk-form-controls uk-form-controls-text">
	//                     <label><input type="checkbox" v-model="node.theme.title_hide"> {{ 'Titel ausblenden' | trans }}</label>
	//                 </div>
	//             </div>

	//             <!--<div class="uk-form-row">
	//                 <span class="uk-form-label">{{ 'Title Size' | trans }}</span>
	//                 <div class="uk-form-controls uk-form-controls-text">
	//                     <label><input type="checkbox" v-model="node.theme.title_large"> {{ 'Extra large title.' | trans }}</label>
	//                 </div>
	//             </div>-->

	//             <div class="uk-form-row">
	//                 <span class="uk-form-label">{{ 'Alignment' | trans }}</span>
	//                 <div class="uk-form-controls uk-form-controls-text">
	//                     <label><input type="checkbox" v-model="node.theme.alignment"> {{ 'Zentriere den Titel und Inhalt.' | trans }}</label>
	//                 </div>
	//             </div>
	//         </template>

	//         <div class="uk-form-row">
	//             <label for="form-class" class="uk-form-label">{{ 'HTML Class' | trans }}</label>
	//             <div class="uk-form-controls">
	//                 <input id="form-class" class="uk-form-width-large" type="text" v-model="node.theme.html_class">
	//             </div>
	//         </div>

	//         <div class="uk-form-row">
	//             <label for="form-class" class="uk-form-label">{{ 'Content ausblenden' | trans }}</label>
	//             <div class="uk-form-controls">
	//                 <label><input type="checkbox" v-model="node.theme.content_off"> {{ 'Blende den Content aus.' | trans }}</label>
	//             </div>
	//         </div>

	//         <div class="uk-form-row">
	//             <span class="uk-form-label">{{ 'Navigation' | trans }}</span>
	//             <div class="uk-form-controls uk-form-controls-text">
	//                 <label><input type="checkbox" v-model="node.theme.sidebar_first"> {{ 'Navigation vor dem Inhalt anzeigen.' | trans }}</label>
	//             </div>
	//         </div>

	//         <div class="uk-form-row">
	//             <label class="uk-form-label">{{ 'Navigations-Balken' | trans }}</label>
	//             <div class="uk-form-controls uk-form-controls-text">
	//                 <p class="uk-form-controls-condensed">
	//                     <label><input type="checkbox" v-model="node.theme.hero_viewport"> {{ 'Volle Bildschirmgrösse' | trans }}</label>
	//                 </p>
	//                 <p class="uk-form-controls-condensed">
	//                     <label><input type="checkbox" v-model="node.theme.hero_contrast"> {{ 'Farben umkehren' | trans }}</label>
	//                 </p>
	//                 <p class="uk-form-controls-condensed uk-margin-bottom">
	//                     <label><input type="checkbox" v-model="node.theme.navbar_transparent"> {{ 'Transparente Navigation' | trans }}</label>
	//                 </p>
	//                 <p class="uk-form-controls-condensed uk-form-width-large"><input-image :source.sync="node.theme.hero_image"></input-image></p>
	//                 <p class="uk-form-help-block">{{ 'Select a background image for the hero position.' | trans }}</p>
	//             </div>
	//         </div>

	//     </div>

	// </template>

	// <script>

	module.exports = {

	    section: {
	        label: 'Theme',
	        priority: 90
	    },

	    props: ['node']

	};

	window.Site.components['node-theme'] = module.exports;

	// </script>

/***/ },

/***/ 13:
/***/ function(module, exports) {

	module.exports = "<div class=\"uk-form-horizontal\">\n\n        <template v-if=\"node.type === 'page'\">\n            <div class=\"uk-form-row\">\n                <span class=\"uk-form-label\">{{ 'Titel' | trans }}</span>\n                <div class=\"uk-form-controls uk-form-controls-text\">\n                    <label><input type=\"checkbox\" v-model=\"node.theme.title_hide\"> {{ 'Titel ausblenden' | trans }}</label>\n                </div>\n            </div>\n\n            <!--<div class=\"uk-form-row\">\n                <span class=\"uk-form-label\">{{ 'Title Size' | trans }}</span>\n                <div class=\"uk-form-controls uk-form-controls-text\">\n                    <label><input type=\"checkbox\" v-model=\"node.theme.title_large\"> {{ 'Extra large title.' | trans }}</label>\n                </div>\n            </div>-->\n\n            <div class=\"uk-form-row\">\n                <span class=\"uk-form-label\">{{ 'Alignment' | trans }}</span>\n                <div class=\"uk-form-controls uk-form-controls-text\">\n                    <label><input type=\"checkbox\" v-model=\"node.theme.alignment\"> {{ 'Zentriere den Titel und Inhalt.' | trans }}</label>\n                </div>\n            </div>\n        </template>\n\n        <div class=\"uk-form-row\">\n            <label for=\"form-class\" class=\"uk-form-label\">{{ 'HTML Class' | trans }}</label>\n            <div class=\"uk-form-controls\">\n                <input id=\"form-class\" class=\"uk-form-width-large\" type=\"text\" v-model=\"node.theme.html_class\">\n            </div>\n        </div>\n\n        <div class=\"uk-form-row\">\n            <label for=\"form-class\" class=\"uk-form-label\">{{ 'Content ausblenden' | trans }}</label>\n            <div class=\"uk-form-controls\">\n                <label><input type=\"checkbox\" v-model=\"node.theme.content_off\"> {{ 'Blende den Content aus.' | trans }}</label>\n            </div>\n        </div>\n\n        <div class=\"uk-form-row\">\n            <span class=\"uk-form-label\">{{ 'Navigation' | trans }}</span>\n            <div class=\"uk-form-controls uk-form-controls-text\">\n                <label><input type=\"checkbox\" v-model=\"node.theme.sidebar_first\"> {{ 'Navigation vor dem Inhalt anzeigen.' | trans }}</label>\n            </div>\n        </div>\n\n        <div class=\"uk-form-row\">\n            <label class=\"uk-form-label\">{{ 'Navigations-Balken' | trans }}</label>\n            <div class=\"uk-form-controls uk-form-controls-text\">\n                <p class=\"uk-form-controls-condensed\">\n                    <label><input type=\"checkbox\" v-model=\"node.theme.hero_viewport\"> {{ 'Volle Bildschirmgrösse' | trans }}</label>\n                </p>\n                <p class=\"uk-form-controls-condensed\">\n                    <label><input type=\"checkbox\" v-model=\"node.theme.hero_contrast\"> {{ 'Farben umkehren' | trans }}</label>\n                </p>\n                <p class=\"uk-form-controls-condensed uk-margin-bottom\">\n                    <label><input type=\"checkbox\" v-model=\"node.theme.navbar_transparent\"> {{ 'Transparente Navigation' | trans }}</label>\n                </p>\n                <p class=\"uk-form-controls-condensed uk-form-width-large\"><input-image :source.sync=\"node.theme.hero_image\"></input-image></p>\n                <p class=\"uk-form-help-block\">{{ 'Select a background image for the hero position.' | trans }}</p>\n            </div>\n        </div>\n\n    </div>";

/***/ }

/******/ });