// 引入type常量
import { CHANGE_LEFT_ACTIVE_KEY, CHANGE_LEFT_OPEN_KEYS } from '../actionType';

//切换左侧导航
export const changeLeftActiveKey = (activeLeftNav: string) => {
    return { type: CHANGE_LEFT_ACTIVE_KEY, activeLeftNav };
};
export const changeLeftOpenKeys = (leftOpenKeys: string[]) => {
    return { type: CHANGE_LEFT_OPEN_KEYS, leftOpenKeys };
};
