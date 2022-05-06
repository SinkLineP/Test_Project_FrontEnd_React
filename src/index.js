import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from 'redux';

const initialState = {
  posts: [],
  currentPageTable: {
    index: 1,
  },
  isSortedTitle: {
    index: false,
  },
  isSortedDesc: {
    index: false,
  },
  isSortedId: {
    index: false,
  },
  Search: {
    value: "",
  }
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
        currentPageTable: {...state.currentPageTable, index: action.data}
      };
    case 'UPDATE_ALL_POSTS':
      return {
        ...state,
        posts: [...state.posts, action.data]
      }
    case 'DELETE_ALL_POSTS':
      return {
        ...state,
        posts: []
      }
    case 'UPDATE_SORT_TITLE':
      return {
        ...state,
        isSortedTitle: {...state.isSortedTitle, index: action.data}
      };
    case 'UPDATE_SORT_DESC':
      return {
        ...state,
        isSortedDesc: {...state.isSortedDesc, index: action.data}
      };
    case 'UPDATE_SORT_ID':
      return {
        ...state,
        isSortedId: {...state.isSortedId, index: action.data}
      };
    case 'ADD_VALUE_SEARCH':
      return {
        ...state,
        Search: {...state.Search, value: action.data}
      };

    default:
      return state;
  }


}

const store = createStore(
  playlist,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
