import MODULE_NAME from './uiConstants';

export const OPEN_SIDEBAR = `${MODULE_NAME}/OPEN_SIDEBAR`;
export const CLOSE_SIDEBAR = `${MODULE_NAME}/CLOSE_SIDEBAR`;

export const openSidebar = () => ({
    type: OPEN_SIDEBAR,
});

export const closeSidebar = () => ({
    type: CLOSE_SIDEBAR,
});
