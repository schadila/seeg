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

	module.exports = __webpack_require__(24)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(25)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Applications/XAMPP/xamppfiles/htdocs/pagekit2/packages/pagekit/theme-one/app/components/widget-fitinslide.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },

/***/ 24:
/***/ function(module, exports) {

	'use strict';

	// <template>

	//     <div class="uk-grid pk-grid-large" data-uk-grid-margin>
	//         <div class="uk-flex-item-1 uk-form-horizontal">

	//             <div class="uk-form-row">
	//                 <label for="form-title" class="uk-form-label">{{ 'Title' | trans }}</label>
	//                 <div class="uk-form-controls">
	//                     <input id="form-title" class="uk-form-width-large" type="text" name="title" v-model="widget.title" source="{{@ widget.data.title }}" v-validate:required>
	//                     <p class="uk-form-help-block uk-text-danger" v-show="form.title.invalid">{{ 'Title cannot be blank.' | trans }}</p>
	//                 </div>
	//             </div>

	//             <div class="uk-form-row">
	//                 <label for="form-text" class="uk-form-label">{{ 'Text' | trans }}</label>
	//                 <div class="uk-form-controls">
	//                     <v-editor :value.sync="widget.data.content" :options="{markdown : widget.data.markdown}"></v-editor>
	//                     <p>
	//                         <label><input type="checkbox" v-model="widget.data.markdown"> {{ 'Enable Markdown' | trans }}</label>
	//                     </p>
	//                     <br>
	//                 </div>
	//             </div>

	//             <div class="uk-form-row">
	//                 <label for="form-bgimage" class="uk-form-label">{{ 'Background-Image' | trans }}</label>
	//                 <div class="uk-form-controls">
	//                     <p class="uk-form-controls-condensed uk-form-width-large"><input-image :source.sync="widget.data.bg_image"></input-image></p>
	//                     <p class="uk-form-help-block">{{ 'Select a background image.' | trans }}</p>
	//                     <br>
	//                 </div>
	//             </div>

	//             <div class="uk-form-row">
	//                 <label for="form-slide" class="uk-form-label">{{ 'Fix height' | trans }} {{ '(in pixel)' }}</label>
	//                 <div class="uk-form-controls">
	//                     <p class="uk-form-controls-condensed uk-form-width-large"><input type="text" v-model="widget.data.fixheight" source="{{@ widget.data.fixheight }}"></input></p>
	//                     <br>
	//                 </div>
	//             </div>

	//             <div class="uk-form-row">
	//                 <label for="form-slide" class="uk-form-label">Parallax</label>
	//                 <div class="uk-form-controls">
	//                     <p class="uk-form-controls-condensed uk-form-width-large"><input type="checkbox" v-model="widget.data.parallax"></input> {{ 'Parallax aktivieren' | trans }}</p>
	//                     <br>
	//                 </div>
	//                 <label for="form-slide" class="uk-form-label">Parallax Betrag</label>
	//                 <div class="uk-form-controls">
	//                     <p class="uk-form-controls-condensed uk-form-width-large"><input type="text" v-model="widget.data.parallaxBetrag" source="{{@ widget.data.parallaxBetrag }}"></input></p>
	//                     <br>
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
	        label: 'Fitinslide',
	        priority: 90
	    },

	    props: ['widget', 'config'],

	    created: function created() {
	        this.$set('panelOptions', [{ value: 'uk-panel-box', text: this.$trans('Box') }, { value: 'uk-panel-box uk-panel-box-primary', text: this.$trans('Box Primary') }, { value: 'uk-panel-box uk-panel-box-secondary', text: this.$trans('Box Secondary') }, { value: 'uk-panel-header', text: this.$trans('Header') }]);
	    }

	};

	window.Widgets.components['theme-one-fitinslide:fitinslide'] = module.exports;

	// </script>

/***/ },

/***/ 25:
/***/ function(module, exports) {

	module.exports = "<div class=\"uk-grid pk-grid-large\" data-uk-grid-margin>\n        <div class=\"uk-flex-item-1 uk-form-horizontal\">\n\n            <div class=\"uk-form-row\">\n                <label for=\"form-title\" class=\"uk-form-label\">{{ 'Title' | trans }}</label>\n                <div class=\"uk-form-controls\">\n                    <input id=\"form-title\" class=\"uk-form-width-large\" type=\"text\" name=\"title\" v-model=\"widget.title\" source=\"{{@ widget.data.title }}\" v-validate:required>\n                    <p class=\"uk-form-help-block uk-text-danger\" v-show=\"form.title.invalid\">{{ 'Title cannot be blank.' | trans }}</p>\n                </div>\n            </div>\n\n            <div class=\"uk-form-row\">\n                <label for=\"form-text\" class=\"uk-form-label\">{{ 'Text' | trans }}</label>\n                <div class=\"uk-form-controls\">\n                    <v-editor :value.sync=\"widget.data.content\" :options=\"{markdown : widget.data.markdown}\"></v-editor>\n                    <p>\n                        <label><input type=\"checkbox\" v-model=\"widget.data.markdown\"> {{ 'Enable Markdown' | trans }}</label>\n                    </p>\n                    <br>\n                </div>\n            </div>\n\n            <div class=\"uk-form-row\">\n                <label for=\"form-bgimage\" class=\"uk-form-label\">{{ 'Background-Image' | trans }}</label>\n                <div class=\"uk-form-controls\">\n                    <p class=\"uk-form-controls-condensed uk-form-width-large\"><input-image :source.sync=\"widget.data.bg_image\"></input-image></p>\n                    <p class=\"uk-form-help-block\">{{ 'Select a background image.' | trans }}</p>\n                    <br>\n                </div>\n            </div>\n\n            <div class=\"uk-form-row\">\n                <label for=\"form-slide\" class=\"uk-form-label\">{{ 'Fix height' | trans }} {{ '(in pixel)' }}</label>\n                <div class=\"uk-form-controls\">\n                    <p class=\"uk-form-controls-condensed uk-form-width-large\"><input type=\"text\" v-model=\"widget.data.fixheight\" source=\"{{@ widget.data.fixheight }}\"></input></p>\n                    <br>\n                </div>\n            </div>\n\n            <div class=\"uk-form-row\">\n                <label for=\"form-slide\" class=\"uk-form-label\">Parallax</label>\n                <div class=\"uk-form-controls\">\n                    <p class=\"uk-form-controls-condensed uk-form-width-large\"><input type=\"checkbox\" v-model=\"widget.data.parallax\"></input> {{ 'Parallax aktivieren' | trans }}</p>\n                    <br>\n                </div>\n                <label for=\"form-slide\" class=\"uk-form-label\">Parallax Betrag</label>\n                <div class=\"uk-form-controls\">\n                    <p class=\"uk-form-controls-condensed uk-form-width-large\"><input type=\"text\" v-model=\"widget.data.parallaxBetrag\" source=\"{{@ widget.data.parallaxBetrag }}\"></input></p>\n                    <br>\n                </div>\n            </div>\n\n        </div>\n        <div class=\"pk-width-sidebar pk-width-sidebar-large\">\n\n            <partial name=\"settings\"></partial>\n\n        </div>\n    </div>";

/***/ }

/******/ });
