var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

import { css } from "../../web_modules/preact-emotion.js";
export var Nav = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n"], ["\n  display: flex;\n"])));
export var NavItem = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  & a {\n    color: blue;\n    display: block;\n  }\n"], ["\n  & a {\n    color: blue;\n    display: block;\n  }\n"])));
var templateObject_1, templateObject_2;