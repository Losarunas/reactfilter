export const filterCategory = (category) => {
    return {
        type: 'FILTER_CATEGORY',
        category
    }
}

export const setFilter = (item, specs) => {
    return {
        type: 'FILTER_ITEMS',
        item,
        specs
    }
}
