import React from 'react'
import { createStackNavigator , createAppContainer } from 'react-navigation'

// Screen
import HomeScreen from '../screen/Home'
import CountScreen from '../screen/Count'


const IndexStack = createStackNavigator({

    Home : {
        
        screen : HomeScreen,

    },

    Count : {

        screen : CountScreen

    }

})

export default createAppContainer(IndexStack)

