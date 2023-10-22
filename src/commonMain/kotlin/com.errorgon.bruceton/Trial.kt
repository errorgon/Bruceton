package com.errorgon.bruceton

class Trial (private val _id: Int, private var _result: Boolean = false, private var _level: Double) {

    val id: Int = _id
    var result: Boolean = _result
    var level: Double = _level

    override fun toString(): String {
        return "ID: $id Result: $result Level: $level"
    }


}