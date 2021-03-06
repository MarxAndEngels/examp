"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_Update_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Update.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Update.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api */ "./resources/js/api.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Update',
  data: function data() {
    return {
      name: null,
      image: null,
      hidden_content: null,
      admin: false,
      categories: null,
      category_id: null,
      skill: null,
      statePict: true
    };
  },
  mounted: function mounted() {
    this.statusAdmin();
    this.getCategories();
    this.getSkill();
  },
  methods: {
    StoreImage: function StoreImage() {// this.image = this.$refs.image.files[0];
    },
    UpdateSkill: function UpdateSkill() {
      var formData = new FormData();
      formData.append('image', this.$refs.image.files[0]);
      formData.append('name', this.name);
      formData.append('hidden_content', this.hidden_content);
      formData.append('category_id', this.category_id);
      formData.append('old_image', this.image);
      formData.append('_method', 'PATCH');
      _api__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/auth/skills/' + this.$route.params.id, formData).then(function (res) {
        console.log(res.data);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    statusAdmin: function statusAdmin() {
      var _this = this;

      _api__WEBPACK_IMPORTED_MODULE_0__["default"].get('/api/auth/fruits').then(function (res) {
        if (res.data == '1') {
          _this.admin = true;
        }
      })["catch"](function (err) {
        _this.admin = false;
      });
    },
    getCategories: function getCategories() {
      var _this2 = this;

      _api__WEBPACK_IMPORTED_MODULE_0__["default"].get('/api/auth/categories').then(function (res) {
        _this2.categories = res.data;
      })["catch"](function (err) {});
    },
    getSkill: function getSkill() {
      var _this3 = this;

      _api__WEBPACK_IMPORTED_MODULE_0__["default"].get('/api/auth/skills/' + this.$route.params.id).then(function (res) {
        _this3.skill = res.data;
        _this3.name = res.data.name;
        _this3.image = res.data.image;
        console.log(_this3.image);
        _this3.hidden_content = res.data.hidden_content;
        _this3.category_id = res.data.category_id;
      })["catch"](function (err) {});
    },
    hiddePict: function hiddePict() {
      this.statePict = false;
    }
  }
});

/***/ }),

/***/ "./resources/js/components/admin/Update.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/admin/Update.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Update_vue_vue_type_template_id_37aeaef4_lang_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Update.vue?vue&type=template&id=37aeaef4&lang=true& */ "./resources/js/components/admin/Update.vue?vue&type=template&id=37aeaef4&lang=true&");
/* harmony import */ var _Update_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Update.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/Update.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Update_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Update_vue_vue_type_template_id_37aeaef4_lang_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Update_vue_vue_type_template_id_37aeaef4_lang_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/Update.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/Update.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/admin/Update.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Update_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Update.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Update.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Update_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/Update.vue?vue&type=template&id=37aeaef4&lang=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/admin/Update.vue?vue&type=template&id=37aeaef4&lang=true& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Update_vue_vue_type_template_id_37aeaef4_lang_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Update_vue_vue_type_template_id_37aeaef4_lang_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Update_vue_vue_type_template_id_37aeaef4_lang_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Update.vue?vue&type=template&id=37aeaef4&lang=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Update.vue?vue&type=template&id=37aeaef4&lang=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Update.vue?vue&type=template&id=37aeaef4&lang=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Update.vue?vue&type=template&id=37aeaef4&lang=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.admin && _vm.skill
      ? _c("div", [
          _c("h1", [_vm._v("???????????????? ????????????????????")]),
          _vm._v(
            "\n            " + _vm._s(this.$route.params.id) + "\n        "
          ),
          _c("div", { staticClass: "mb-3" }, [
            _c(
              "label",
              {
                staticClass: "form-label",
                attrs: { for: "exampleFormControlInput1" },
              },
              [_vm._v("????????????????")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.name,
                  expression: "name",
                },
              ],
              staticClass: "form-control",
              attrs: { type: "text", id: "exampleFormControlInput1" },
              domProps: { value: _vm.name },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.name = $event.target.value
                },
              },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mb-3" }, [
            _c("label", { staticClass: "form-label" }, [
              _vm._v("?????????????????? ????????"),
            ]),
            _c("br"),
            _vm._v(" "),
            _vm.statePict
              ? _c("div", [
                  _c("h4", [_vm._v("?????? ????????")]),
                  _vm._v(" "),
                  _c("img", {
                    attrs: {
                      src: _vm.image,
                      width: "90px",
                      height: "90px",
                      alt: "",
                    },
                  }),
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c(
              "label",
              {
                attrs: { for: "exampleFormControlInput2" },
                on: { click: _vm.hiddePict },
              },
              [
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "btn btn-primary" }, [
                  _vm._v("?????????????? ????????????"),
                ]),
                _c("br"),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: false,
                      expression: "false",
                    },
                  ],
                  ref: "image",
                  attrs: { type: "file", id: "exampleFormControlInput2" },
                  on: { change: _vm.StoreImage },
                }),
              ]
            ),
            _vm._v(" "),
            _c("br"),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mb-3" }, [
            _c(
              "label",
              {
                staticClass: "form-label",
                attrs: { for: "exampleFormControlInput3" },
              },
              [_vm._v("???????????????????????????? ????????????????")]
            ),
            _vm._v(" "),
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.hidden_content,
                  expression: "hidden_content",
                },
              ],
              staticClass: "form-control",
              attrs: { id: "exampleFormControlTextarea1", rows: "3" },
              domProps: { value: _vm.hidden_content },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.hidden_content = $event.target.value
                },
              },
            }),
          ]),
          _vm._v(" "),
          _vm.categories
            ? _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.category_id,
                      expression: "category_id",
                    },
                  ],
                  staticClass: "form-select mb-3",
                  attrs: { "aria-label": "Default select example" },
                  on: {
                    change: function ($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function (o) {
                          return o.selected
                        })
                        .map(function (o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.category_id = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    },
                  },
                },
                _vm._l(_vm.categories, function (category) {
                  return _c(
                    "option",
                    { key: category.id, domProps: { value: category.id } },
                    [_vm._v(_vm._s(category.tittle))]
                  )
                }),
                0
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-success",
              on: {
                click: function ($event) {
                  $event.preventDefault()
                  return _vm.UpdateSkill.apply(null, arguments)
                },
              },
            },
            [_vm._v("????????????????")]
          ),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);