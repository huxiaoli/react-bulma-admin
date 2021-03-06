// import 'bulma/css/bulma.css'
// 覆盖 bulma 的默认样式
import '@/css/style.scss'

import 'es6-promise/auto' // For IE 11
import 'regenerator-runtime' // For babel to translate async/await
import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

// API 接口使用 JSONPlaceholder
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/'

import App from '@/app'

ReactDOM.render(<App/>, document.getElementById('app'))
