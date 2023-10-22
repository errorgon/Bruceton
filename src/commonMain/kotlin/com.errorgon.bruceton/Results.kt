package com.errorgon.bruceton


class Results(private val _trialList: MutableList<Trial>) {

    var trialList: MutableList<Trial> = _trialList



    fun updateResults(_trialList: MutableList<Trial>) {
        trialList = _trialList

        calculateResults()


    }

    fun calculateResults() {
        var minLevel = Double.MAX_VALUE
        var maxLevel = 0.0
        val count = trialList.size
        var gos = 0;
        var noGos = 0;

        for (trial: Trial in trialList) {
            minLevel = if (trial.level < minLevel) trial.level else maxLevel
            maxLevel = if (trial.level > maxLevel) trial.level else minLevel

            if (trial.result) gos++ else noGos++
        }



    }



}