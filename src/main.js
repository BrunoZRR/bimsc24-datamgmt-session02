// This is main JavaScript file

// From vue, we import a function to create a Vue application
import { createApp } from "vue"

// Import of the App.vue file
import App from "./App.vue"

// Import styles
import '@/styles/button-styles.css'
import '@/styles/styles.css'
import '@/styles/toggle-styles.css'

// Create Vue appliction with App.vue component and inject it into element with id 'app'
createApp(App).mount("#app")

// this is my first line in javascript
//console.log("Hello World")

const doc = document.documentElement;
//console.log (doc)

// Change style of doc form js
doc.style.background = "beige"
doc.style.fontFamily = "monospace"

// access particular elements
const navbar = document.querySelector("#navbar")
//console.log(nav)
nav.innerHTML = "something"
nav.style.fontSize = "12px"

const sidebar = document.querySelector("#sidebar")