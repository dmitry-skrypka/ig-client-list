import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './components/app';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./logic/reducer";
import 'semantic-ui-css/semantic.min.css';

const store = createStore(
	reducer,
	composeWithDevTools(),

);


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
