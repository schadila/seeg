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

	module.exports = __webpack_require__(26)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(27)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Applications/XAMPP/xamppfiles/htdocs/pagekit2/packages/pagekit/theme-one/app/components/widget-googlemaps.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },

/***/ 26:
/***/ function(module, exports) {

	'use strict';

	// <template>

	//     <div class="uk-grid pk-grid-large" data-uk-grid-margin>
	//         <div class="uk-flex-item-1 uk-form-horizontal">

	//             <div class="uk-form-row">
	//                 <label for="form-googlemaps" class="uk-form-label">{{ 'Google Maps ID' | trans }}</label>
	//                 <div class="uk-form-controls">
	//                     <p class="uk-form-controls-condensed uk-form-width-large"><input type="text" v-model="widget.data.class" source="{{@ widget.data.class }}"></input></p>
	//                     <br>
	//                 </div>
	//                 <label for="form-googlemaps" class="uk-form-label">{{ 'Latitude' | trans }}</label>
	//                 <div class="uk-form-controls">
	//                     <p class="uk-form-controls-condensed uk-form-width-large"><input type="text" v-model="widget.data.latitude" source="{{@ widget.data.latitude }}"></input></p>
	//                     <br>
	//                 </div>
	//                 <label for="form-googlemaps" class="uk-form-label">{{ 'Longitude' | trans }}</label>
	//                 <div class="uk-form-controls">
	//                     <p class="uk-form-controls-condensed uk-form-width-large"><input type="text" v-model="widget.data.longitude" source="{{@ widget.data.longitude }}"></input></p>
	//                     <br>
	//                 </div>
	//                 <label for="form-googlemaps" class="uk-form-label">{{ 'Zoom Level (max 21)' | trans }}</label>
	//                 <div class="uk-form-controls">
	//                     <p class="uk-form-controls-condensed uk-form-width-large"><input type="text" v-model="widget.data.zoomlevel" source="{{@ widget.data.zoomlevel }}"></input></p>
	//                     <br>
	//                 </div>
	//                 <label for="form-googlemaps" class="uk-form-label">{{ 'Map Style' | trans }}</label>
	//                 <div class="uk-form-controls">
	//                     <select id="form-widget-map-style" class="uk-form-width-large" v-model="widget.data.mapstyle">
	//                         <option value="ROADMAP">{{ 'Road Map' | trans }}</option>
	//                         <option value="SATELLITE">{{ 'Satellite' | trans }}</option>
	//                         <option value="HYBRID">{{ 'Hybrid' | trans }}</option>
	//                         <option value="TERRAIN">{{ 'Terrain' | trans }}</option>
	//                     </select>
	//                     <br><br>
	//                 </div>
	//             </div>

	//         </div>
	//         <div class="pk-width-sidebar pk-width-sidebar-large">

	//             <partial name="settings"></partial>

	//         </div>
	//     </div>

	// </template>

	// <script>

	module.exports = {

	    section: {
	        label: 'Google Maps',
	        priority: 90
	    },

	    props: ['widget', 'config'],

	    created: function created() {
	        this.$set('panelOptions', [{ value: 'uk-panel-box', text: this.$trans('Box') }, { value: 'uk-panel-box uk-panel-box-primary', text: this.$trans('Box Primary') }, { value: 'uk-panel-box uk-panel-box-secondary', text: this.$trans('Box Secondary') }, { value: 'uk-panel-header', text: this.$trans('Header') }]);
	    }

	};

	window.Widgets.components['theme-one-fitinslide:googlemaps'] = module.exports;

	// </script>

/***/ },

/***/ 27:
/***/ function(module, exports) {

	module.exports = "<div class=\"uk-grid pk-grid-large\" data-uk-grid-margin>\n        <div class=\"uk-flex-item-1 uk-form-horizontal\">\n\n            <div class=\"uk-form-row\">\n                <label for=\"form-googlemaps\" class=\"uk-form-label\">{{ 'Google Maps ID' | trans }}</label>\n                <div class=\"uk-form-controls\">\n                    <p class=\"uk-form-controls-condensed uk-form-width-large\"><input type=\"text\" v-model=\"widget.data.class\" source=\"{{@ widget.data.class }}\"></input></p>\n                    <br>\n                </div>\n                <label for=\"form-googlemaps\" class=\"uk-form-label\">{{ 'Latitude' | trans }}</label>\n                <div class=\"uk-form-controls\">\n                    <p class=\"uk-form-controls-condensed uk-form-width-large\"><input type=\"text\" v-model=\"widget.data.latitude\" source=\"{{@ widget.data.latitude }}\"></input></p>\n                    <br>\n                </div>\n                <label for=\"form-googlemaps\" class=\"uk-form-label\">{{ 'Longitude' | trans }}</label>\n                <div class=\"uk-form-controls\">\n                    <p class=\"uk-form-controls-condensed uk-form-width-large\"><input type=\"text\" v-model=\"widget.data.longitude\" source=\"{{@ widget.data.longitude }}\"></input></p>\n                    <br>\n                </div>\n                <label for=\"form-googlemaps\" class=\"uk-form-label\">{{ 'Zoom Level (max 21)' | trans }}</label>\n                <div class=\"uk-form-controls\">\n                    <p class=\"uk-form-controls-condensed uk-form-width-large\"><input type=\"text\" v-model=\"widget.data.zoomlevel\" source=\"{{@ widget.data.zoomlevel }}\"></input></p>\n                    <br>\n                </div>\n                <label for=\"form-googlemaps\" class=\"uk-form-label\">{{ 'Map Style' | trans }}</label>\n                <div class=\"uk-form-controls\">\n                    <select id=\"form-widget-map-style\" class=\"uk-form-width-large\" v-model=\"widget.data.mapstyle\">\n                        <option value=\"ROADMAP\">{{ 'Road Map' | trans }}</option>\n                        <option value=\"SATELLITE\">{{ 'Satellite' | trans }}</option>\n                        <option value=\"HYBRID\">{{ 'Hybrid' | trans }}</option>\n                        <option value=\"TERRAIN\">{{ 'Terrain' | trans }}</option>\n                    </select>\n                    <br><br>\n                </div>\n            </div>\n\n            \n\n        </div>\n        <div class=\"pk-width-sidebar pk-width-sidebar-large\">\n\n            <partial name=\"settings\"></partial>\n\n        </div>\n    </div>";

/***/ }

/******/ });