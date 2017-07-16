import 'rxjs'
import React from 'react'
import 'react-native'
import { Provider, Store } from 'react-redux'
import renderer from 'react-test-renderer'
import store from 'store'

import Root from '../index'

it('renders correctly', () => {
    const tree = renderer.create(
        <Provider store={store}>
            <Root />
        </Provider>
    )
    expect(tree).toBeDefined()
})