// 引入不同管理员

//左侧导航reducer
import leftNavReducer from './leftNavReducer';
// 引入合并函数管理员的函数combineReducers
import { combineReducers } from 'redux';

// 导出 注意这里是对象的方式传递进去
export default combineReducers({
    leftNavReducer,
});
