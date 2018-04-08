import React, { PureComponent } from 'react'
import { Provider } from "react-redux"
import { View } from 'react-native'
import store from '@application/store'
import Main from '@screens/Main'

class Application extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <Main />
            </Provider>
        )
    }
}

export default Application
