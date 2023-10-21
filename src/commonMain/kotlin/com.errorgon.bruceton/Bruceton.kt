package com.errorgon.bruceton

class Bruceton(name: String) {
    val customerKey = name
    init {
        println("Init block")
    }
}