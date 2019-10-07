const initialState = {
    category: 'all',
    categories: ['laptop', 'smartphone', 'books'],
    filtersList: [
        {
            category: 'smartphone',
            filtersToShow: ['brand', 'version', 'memory', 'camera', 'ram']
        },
        {
            category: 'laptop',
            filtersToShow: ['brand', 'version', 'ram', 'hdd', 'cpu']
        }
    ],
    filters: [
        // {
        //     key: 'brand',
        //     val: ['Samsung']
        // }
    ],
    items: [
        {
            id: 0,
            brand: 'Samsung',
            version: 'S8+',
            memory: '128GB',
            camera: '12 + 2 + 1 Mpx',
            category: 'smartphone',
            price: '1199.99€',
            ram: '2GB'
        },
        {
            id: 1,
            brand: 'Samsung',
            version: 'S7',
            memory: '128GB',
            camera: '10 + 2 Mpx',
            category: 'smartphone',
            price: '1099.99€',
            ram: '2GB'
        },
        {
            id: 2,
            brand: 'Samsung',
            version: 'S6',
            memory: '64GB',
            camera: '10 + 2 Mpx',
            category: 'smartphone',
            price: '999.99€',
            ram: '2GB'
        },
        {
            id: 3,
            brand: 'Samsung',
            version: 'S5',
            memory: '34GB',
            camera: '8 Mpx',
            category: 'smartphone',
            price: '999.99€',
            ram: '1GB'
        },
        {
            id: 4,
            brand: 'Samsung',
            version: 'S4',
            memory: '34GB',
            camera: '6 Mpx',
            category: 'smartphone',
            price: '999.99€',
            ram: '1GB'
        },
        {
            id: 5,
            brand: 'Samsung',
            version: 'S4',
            category: 'smartphone',
            price: '899.99€',
            ram: '512MB'
        },
        {
            id: 6,
            brand: 'ASUS',
            version: 'XLXLX',
            cpu: 'i7',
            category: 'laptop',
            price: '1899.99€',
            ram: '4GB',
            hdd: '512GB'
        },
        {
            id: 7,
            brand: 'LENOVO',
            version: 'A2',
            cpu: 'i5',
            category: 'laptop',
            price: '8999.99€',
            ram: '512MB',
            hdd: '1TB'
        },
        {
            id: 8,
            brand: 'Cherry',
            version: '99B',
            cpu: 'i3',
            category: 'laptop',
            price: '799.99€',
            ram: '512MB',
            hdd: '256GB'
        },
        {
            id: 9,
            brand: 'Alpha',
            author: 'alpha male',
            category: 'books',
            price: '999.99€',
            releaseDate: '2016'
        }
    ]
}


const todos = (state = initialState, action) => {

    switch (action.type) {

        case 'FILTER_CATEGORY':
            return {
                ...state,
                category: action.category,
                filters: []
            }

        case 'FILTER_ITEMS':

            const itemFilters = {
                key: action.specs,
                val: [action.item]
            }

            let numb, newFilter, newArr;

            // Check if filter already exist
            const isFilter = state.filters.some((item, i) => {
                numb = i;
                return item.key === action.specs
            });


            if (isFilter) {
                let stateFilter = [...state.filters];

                // Checks if value already exists, if value is same removes it 
                let isSame = false;
                let emptyArray = false;
                stateFilter.forEach((item, ind) => {
                    if (stateFilter !== 0) {
                        item.val.forEach((j, index) => {
                            if (j === action.item) {
                                isSame = true;
                                newArr = state.filters[numb];
                                newArr.val.splice(index, 1);
                            }

                        })
                    }

                    // If array empty remove it
                    if (item.val.length <= 0) {
                        emptyArray = true;
                        newArr = stateFilter.splice(ind, 1);
                    }
                })

                // Add to array new filter value
                if (!isSame) {
                    newArr = state.filters[numb];
                    newArr.val.push(action.item);
                }

                if (!emptyArray) {
                    stateFilter[numb] = newArr;
                }

                newFilter = stateFilter;

            } else {
                newFilter = [...state.filters, itemFilters]
            }

            return {
                ...state,
                filters: newFilter
            }

        default:
            return state
    }

}

export default todos