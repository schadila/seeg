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

	module.exports = __webpack_require__(32)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(33)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Applications/XAMPP/xamppfiles/htdocs/pagekit2/packages/pagekit/theme-one/app/components/widget-theme.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },

/***/ 32:
/***/ function(module, exports) {

	'use strict';

	// <template>

	//   <div class="uk-grid pk-grid-large" data-uk-grid-margin>
	//       <div class="uk-flex-item-1 uk-form-horizontal">

	//         <div class="uk-form-row">
	//             <span class="uk-form-label">{{ 'Titel' | trans }}</span>
	//             <div class="uk-form-controls uk-form-controls-text">
	//                 <label><input type="checkbox" v-model="widget.theme.title_hide"> {{ 'Titel ausblenden' | trans }}</label>
	//             </div>
	//         </div>

	//         <div class="uk-form-row">
	//             <label for="form-theme-title-size" class="uk-form-label">{{ 'Titel Grösse' | trans }}</label>
	//             <div class="uk-form-controls">
	//                 <select id="form-theme-title-size" class="uk-form-width-large" v-model="widget.theme.title_size">
	//                     <option value="uk-panel-title">{{ 'Default' | trans }}</option>
	//                     <option value="uk-h1 uk-margin-top-remove">{{ 'H1' | trans }}</option>
	//                     <option value="uk-h2 uk-margin-top-remove">{{ 'H2' | trans }}</option>
	//                     <option value="uk-h3 uk-margin-top-remove">{{ 'H3' | trans }}</option>
	//                     <option value="uk-h4 uk-margin-top-remove">{{ 'H4' | trans }}</option>
	//                     <option value="uk-heading-large uk-margin-top-remove">Extra Large</option>
	//                 </select>
	//             </div>
	//         </div>

	//         <div class="uk-form-row">
	//             <span class="uk-form-label">{{ 'Alignment' | trans }}</span>
	//             <div class="uk-form-controls uk-form-controls-text">
	//                 <label><input type="checkbox" v-model="widget.theme.alignment"> {{ 'Titel und Inhalt zentrieren.' | trans }}</label>
	//             </div>
	//         </div>

	//         <div class="uk-form-row">
	//             <label for="form-theme-badge" class="uk-form-label">{{ 'HTML Class' | trans }}</label>
	//             <div class="uk-form-controls">
	//                 <input id="form-theme-badge" class="uk-form-width-large" type="text" v-model="widget.theme.html_class">
	//             </div>
	//         </div>

	//         <div class="uk-form-row">
	//             <label for="form-theme-panel" class="uk-form-label">{{ 'Panel Style' | trans }}</label>
	//             <div class="uk-form-controls">
	//                 <select id="form-theme-panel" class="uk-form-width-large" v-model="widget.theme.panel">
	//                     <option value="">{{ 'None' | trans }}</option>
	//                     <option value="uk-panel-box">{{ 'Box' | trans }}</option>
	//                     <option value="uk-panel-box uk-panel-box-primary">{{ 'Box Primary' | trans }}</option>
	//                     <option value="uk-panel-box uk-panel-box-secondary">{{ 'Box Secondary' | trans }}</option>
	//                     <option value="uk-panel-header">{{ 'Header' | trans }}</option>
	//                 </select>
	//             </div>
	//         </div>
	//       </div>

	//         <div class="pk-width-sidebar pk-width-sidebar-large">

	//             <partial name="settings"></partial>

	//         </div>

	//     </div>

	// </template>

	// <script>

	module.exports = {

	    section: {
	        label: 'Theme',
	        priority: 1
	    },

	    props: ['widget', 'config', 'form'],

	    created: function created() {
	        this.$options.partials = this.$parent.$options.partials;
	    }

	};

	/*SETTINGS OVERWRITE*/
	window.Widgets.components['settings'] = module.exports;

	// </script>

/***/ },

/***/ 33:
/***/ function(module, exports) {

	module.exports = "<div class=\"uk-grid pk-grid-large\" data-uk-grid-margin>\n      <div class=\"uk-flex-item-1 uk-form-horizontal\">\n\n        <div class=\"uk-form-row\">\n            <span class=\"uk-form-label\">{{ 'Titel' | trans }}</span>\n            <div class=\"uk-form-controls uk-form-controls-text\">\n                <label><input type=\"checkbox\" v-model=\"widget.theme.title_hide\"> {{ 'Titel ausblenden' | trans }}</label>\n            </div>\n        </div>\n\n        <div class=\"uk-form-row\">\n            <label for=\"form-theme-title-size\" class=\"uk-form-label\">{{ 'Titel Grösse' | trans }}</label>\n            <div class=\"uk-form-controls\">\n                <select id=\"form-theme-title-size\" class=\"uk-form-width-large\" v-model=\"widget.theme.title_size\">\n                    <option value=\"uk-panel-title\">{{ 'Default' | trans }}</option>\n                    <option value=\"uk-h1 uk-margin-top-remove\">{{ 'H1' | trans }}</option>\n                    <option value=\"uk-h2 uk-margin-top-remove\">{{ 'H2' | trans }}</option>\n                    <option value=\"uk-h3 uk-margin-top-remove\">{{ 'H3' | trans }}</option>\n                    <option value=\"uk-h4 uk-margin-top-remove\">{{ 'H4' | trans }}</option>\n                    <option value=\"uk-heading-large uk-margin-top-remove\">Extra Large</option>\n                </select>\n            </div>\n        </div>\n\n        <div class=\"uk-form-row\">\n            <span class=\"uk-form-label\">{{ 'Alignment' | trans }}</span>\n            <div class=\"uk-form-controls uk-form-controls-text\">\n                <label><input type=\"checkbox\" v-model=\"widget.theme.alignment\"> {{ 'Titel und Inhalt zentrieren.' | trans }}</label>\n            </div>\n        </div>\n\n        <div class=\"uk-form-row\">\n            <label for=\"form-theme-badge\" class=\"uk-form-label\">{{ 'HTML Class' | trans }}</label>\n            <div class=\"uk-form-controls\">\n                <input id=\"form-theme-badge\" class=\"uk-form-width-large\" type=\"text\" v-model=\"widget.theme.html_class\">\n            </div>\n        </div>\n\n        <div class=\"uk-form-row\">\n            <label for=\"form-theme-panel\" class=\"uk-form-label\">{{ 'Panel Style' | trans }}</label>\n            <div class=\"uk-form-controls\">\n                <select id=\"form-theme-panel\" class=\"uk-form-width-large\" v-model=\"widget.theme.panel\">\n                    <option value=\"\">{{ 'None' | trans }}</option>\n                    <option value=\"uk-panel-box\">{{ 'Box' | trans }}</option>\n                    <option value=\"uk-panel-box uk-panel-box-primary\">{{ 'Box Primary' | trans }}</option>\n                    <option value=\"uk-panel-box uk-panel-box-secondary\">{{ 'Box Secondary' | trans }}</option>\n                    <option value=\"uk-panel-header\">{{ 'Header' | trans }}</option>\n                </select>\n            </div>\n        </div>\n      </div>\n\n        <div class=\"pk-width-sidebar pk-width-sidebar-large\">\n\n            <partial name=\"settings\"></partial>\n\n        </div>\n\n    </div>";

/***/ }

/******/ });
