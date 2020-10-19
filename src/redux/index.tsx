// 引入createStore构建储存
import { applyMiddleware, createStore } from 'redux';
// 引入reducer管理员
import Reducer from './reducers/index';
// 引入异步工具中间件
import thunk from 'redux-thunk';

// 导出   使用applyMiddleware进行连接
export default createStore(Reducer, applyMiddleware(thunk));
