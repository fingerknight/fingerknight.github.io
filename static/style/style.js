"use strict";

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


var Theme = /*#__PURE__*/function () {
    function Theme() {
        _classCallCheck(this, Theme);

        this.config = window.config;
    }

    _createClass(Theme, [{
        key: "initHighlight",
        value: function initHighlight() {
            if (this.config.code) {
                Array.from(document.querySelectorAll('#content pre')).forEach(
                    node => {
                        let codeElement = node.querySelector("code");

                        if (!codeElement){
                            return
                        }
                        let language = codeElement.getAttribute("class").split("-")[1];
                        if (this.config.code.exclude.includes(language)) {
                            return
                        }

                        if (this.config.code.header){
                            let header = document.createElement("div");
                            header.setAttribute("class", "header");
                            header.innerHTML = "<span class=\"language\"> " + language + " </span>";
                            header.innerHTML += "<span class=\"copy\"> Copy </span>";
                            node.insertBefore(header, codeElement);
                        }
                        hljs.highlightElement(codeElement);
                    });
            } 
        }
    }, {
        key: "initMath",
        value: function initMath() {
            if (this.config.math){
			    // renderMathInElement(document.body, this.config.math);
			    // var renderNodes = Array.from(document.getElementsByClassName("statement"));
			    // renderNodes.forEach(
				//     function(node) {
				// 	    var nodeId = node.getAttribute("id"),
				// 		    tmpArray = nodeId.split("-"),
				// 		    nodeType = tmpArray[0],
				// 		    nodeNum = tmpArray[1],
				// 		    nodeName = node.getAttribute("name");

				// 	    var header = document.createElement("p");
				// 	    header.setAttribute("class", "math-statement");
				// 	    header.innerHTML = `<strong> ${nodeType} ${nodeNum} </strong> `;
				// 	    if (nodeName) {
				// 		    header.innerHTML += `(${nodeName})`
				// 	    }
				// 	    node.insertBefore(header, node.firstChild);
				//     });

			    // var renderProof = Array.from(document.getElementsByClassName("proof"));
			    // renderProof.forEach(
				//     function(node) {
				// 	    var raw = node.innerHTML;
				// 	    node.innerHTML =
				// 		    "<p class=\"proof-word\"> Proof </p>\n" +
				// 		    "<div class=\"proof-content\">\n" + raw +"\n</div>"
				//     });
                renderMathInElement(document.getElementById("content"), this.config.math);
		    }
        }
    }, {
        key: "initMermaid",
        value: function initMermaid() {
            if (this.config.mermaid){
                mermaid.initialize({
                    theme: "neutral",
                    securityLevel: 'loose'
                });
		    }
        }
    }, {
        key: "init",
        value: function init() {
            var theme_this = this;

            try {
                this.initHighlight();
                this.initMermaid();
                this.initMath();
            } catch (err) {
                console.error(err);
            }
        }
    }]);

    return Theme;
}();

var themeInit = function themeInit() {
    var theme = new Theme();
    theme.init();
};

if (document.readyState !== 'loading') {
    themeInit();
} else {
    document.addEventListener('DOMContentLoaded', themeInit, false);
}
