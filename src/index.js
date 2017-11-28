import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import store from './stores'
import { Provider } from 'react-redux'
import Intro from './components/Intro'
import InstagramFeed from './components/InstagramFeed'



const app = (
    <Provider store={store.configure(null)}>
        <div>

            <InstagramFeed />

        </div>
    </Provider>
)


ReactDOM.render(app, document.getElementById('root'))
