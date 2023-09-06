export const isMobile = (state) => state.windowWidth < 768;
export const getOrderedItems = (state) => state.orderedItems;
export const getFullPrice = (state) => state.fullPrice;
export const getOrderStatus = (state) => state.orderStatus;
export const isAnyItemsOrdered = (state) => getOrderedItems(state).length === 0;
