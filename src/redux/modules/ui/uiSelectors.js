import MODULE_NAME from './uiConstants';

export const sidebarIsOpen = state => state.getIn([`${MODULE_NAME}`, 'sidebarIsOpen'], false);
