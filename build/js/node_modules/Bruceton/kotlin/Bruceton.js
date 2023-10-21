(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'Bruceton'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Bruceton'.");
    }root.Bruceton = factory(typeof Bruceton === 'undefined' ? {} : Bruceton, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  function Bruceton(name) {
    this.customerKey = name;
    println('Init block');
  }
  Bruceton.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bruceton',
    interfaces: []
  };
  var package$com = _.com || (_.com = {});
  var package$errorgon = package$com.errorgon || (package$com.errorgon = {});
  var package$bruceton = package$errorgon.bruceton || (package$errorgon.bruceton = {});
  package$bruceton.Bruceton = Bruceton;
  Kotlin.defineModule('Bruceton', _);
  return _;
}));

//# sourceMappingURL=Bruceton.js.map
