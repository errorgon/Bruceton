package com.errorgon.bruceton

class Bruceton(private val _unit: String, private val _firstGuess: Double, private val _stepSize: Double)  {

    val firstGuess: Double = _firstGuess
    val stepSize: Double = _stepSize
    val unit: String = _unit

    val trialList: MutableList<Trial> = mutableListOf()

    init {
        trialList.add(Trial(1, false, firstGuess))
    }

    fun getNextTrial() = trialList.last()

    fun setCurrentTrialResult(result: Boolean) {
        getNextTrial().result = result

        val currentLevel = getNextTrial().level

        val nextLevel = if (result) currentLevel - stepSize else currentLevel + stepSize
        trialList.add(Trial(trialList.size + 1, false, nextLevel))
    }


}