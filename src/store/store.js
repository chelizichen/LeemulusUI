import { createStore,applyMiddleware,combineReducers} from 'redux'
// 引入 redux-thunk.js 用于支持异步action
import thunk from 'redux-thunk'
import a from './reducer/a'
import b from './reducer/b'

// 联合所有Reducers 
const allReducers = combineReducers({a,b})
const store = createStore(allReducers,applyMiddleware(thunk))
export default store