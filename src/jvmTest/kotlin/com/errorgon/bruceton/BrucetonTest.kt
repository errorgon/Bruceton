package com.errorgon.bruceton

import kotlin.math.abs
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

internal class BrucetonTest {

    val bruceton = Bruceton("Volt", 2.3, 0.2)

    @Test
    fun testConstructor() {
        assertEquals(2.3, bruceton.firstGuess)
        assertEquals(0.2, bruceton.stepSize)
        assertEquals("Volt", bruceton.unit)

        assertEquals(1, bruceton.trialList.size)
        assertEquals(1, bruceton.trialList[0].id)
        assertEquals(2.3, bruceton.trialList[0].level)
        assertEquals(false, bruceton.trialList[0].result)
    }

    @Test
    fun getNextTrialTest() {
        var lastTrial = bruceton.getNextTrial()
        assertEquals(1, lastTrial.id)
        assertEquals(2.3, lastTrial.level)
        assertEquals(false, lastTrial.result)
    }

    @Test
    fun setCurrentTrialResultTest() {
        bruceton.setCurrentTrialResult(true)
        assertEquals(2, bruceton.getNextTrial().id)
        assertTrue(abs(2.1 - bruceton.getNextTrial().level) < 1e-10)
        assertEquals(false, bruceton.getNextTrial().result)
        assertEquals(2, bruceton.trialList.size)

        for (trial in bruceton.trialList) println(trial)
    }


}