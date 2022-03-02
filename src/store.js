import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import reducers from './store/reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension'

const { } = reducers

const reducer = combineReducers({

})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)
  
export default store