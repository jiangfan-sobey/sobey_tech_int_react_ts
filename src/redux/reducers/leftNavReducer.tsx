import { CHANGE_LEFT_ACTIVE_KEY, CHANGE_LEFT_OPEN_KEYS } from '../actionType';

interface ObjType {
    type?: string;
    activeLeftNav: string;
    leftOpenKeys: string[];
}

const obj: ObjType = {
    activeLeftNav: 'overView',
    leftOpenKeys: ['themeManage'],
};

export default (state: ObjType = obj, action: ObjType) => {
    const nowData = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case CHANGE_LEFT_ACTIVE_KEY:
            nowData.activeLeftNav = action.activeLeftNav;
            return nowData;
        case CHANGE_LEFT_OPEN_KEYS:
            nowData.leftOpenKeys = action.leftOpenKeys;
            return nowData;
        default:
            return nowData;
    }
};
