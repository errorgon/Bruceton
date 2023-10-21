(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'Bruceton', 'kotlin-test'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('Bruceton'), require('kotlin-test'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'Bruceton-test'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Bruceton-test'.");
    }if (typeof Bruceton === 'undefined') {
      throw new Error("Error loading module 'Bruceton-test'. Its dependency 'Bruceton' was not found. Please, check whether 'Bruceton' is loaded prior to 'Bruceton-test'.");
    }if (typeof this['kotlin-test'] === 'undefined') {
      throw new Error("Error loading module 'Bruceton-test'. Its dependency 'kotlin-test' was not found. Please, check whether 'kotlin-test' is loaded prior to 'Bruceton-test'.");
    }root['Bruceton-test'] = factory(typeof this['Bruceton-test'] === 'undefined' ? {} : this['Bruceton-test'], kotlin, Bruceton, this['kotlin-test']);
  }
}(this, function (_, Kotlin, $module$Bruceton, $module$kotlin_test) {
  'use strict';
  var Bruceton = $module$Bruceton.com.errorgon.bruceton.Bruceton;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var test = $module$kotlin_test.kotlin.test.test;
  var suite = $module$kotlin_test.kotlin.test.suite;
  function BrucetonTest() {
  }
  BrucetonTest.prototype.testConstructor = function () {
    var bruceton = new Bruceton('Kevin');
  };
  BrucetonTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BrucetonTest',
    interfaces: []
  };
  var package$com = _.com || (_.com = {});
  var package$errorgon = package$com.errorgon || (package$com.errorgon = {});
  var package$bruceton = package$errorgon.bruceton || (package$errorgon.bruceton = {});
  package$bruceton.BrucetonTest = BrucetonTest;
  suite('com.errorgon.bruceton', false, function () {
    suite('BrucetonTest', false, function () {
      test('testConstructor', false, function () {
        return (new BrucetonTest()).testConstructor();
      });
    });
  });
  Kotlin.defineModule('Bruceton-test', _);
  return _;
}));

//# sourceMappingURL=Bruceton-test.js.map
