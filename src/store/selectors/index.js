export const isMobile = (state) => state.windowWidth < 768;
export const isAnyItemsOrdered = (state) => state.orderedItems.length === 0;
