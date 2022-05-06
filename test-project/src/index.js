import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';

const initialState = {
  posts: [],
  currentPageTable: {
    index: 1,
  },
};

function playlist(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_REDUX':
      return {
        ...state,
        posts: [...state.posts, action.data]
      };
    case 'SAVE_CURRENT_PAGE':
      return {
        ...state,
        currentPageTable: {...state.currentPageTable, index:action.data}
      };
    

    default:
      return state;
  }
}

const store = createStore(
  playlist,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  console.log('subscribe', store.getState());
})


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
