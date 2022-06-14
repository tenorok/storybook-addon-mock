"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultResponseHeaders = void 0;
exports.getResponseHeaderMap = getResponseHeaderMap;
exports.setRequestHeaders = setRequestHeaders;

function setRequestHeaders(xhr, headers) {
  for (var [key, value] of headers) {
    xhr.setRequestHeader(key, value);
  }
}

function getResponseHeaderMap(xhr) {
  var headers = {};
  xhr.getAllResponseHeaders().trim().split(/[\r\n]+/).map(value => value.split(/: /)).forEach(keyValue => {
    if (keyValue[0]) {
      headers[keyValue[0].trim()] = keyValue[1] && keyValue[1].trim();
    }
  });
  return headers;
}

var defaultResponseHeaders = {
  'content-type': 'application/json'
};
exports.defaultResponseHeaders = defaultResponseHeaders;