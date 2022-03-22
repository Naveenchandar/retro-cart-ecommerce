import {
    FILTER_BY_CATEGORIES,
    FILTER_BY_RATING,
    FILTER_BY_PRICE,
    SORT_BY,
    CLEAR_FILTERS
} from './type';

const initialFilterState = {
    sortBy: '',
    categories: {
        "Men's t-shirt": false,
        "Men's shirt": false,
        "Women's shirt": false,
        "Women's t-shirt": false,
        "Kids": false,
        "Accessories": false,
    },
    ratings: 0,
    price: 100,
    availability: 'In stock'
};

const productFilterReducer = (state, action) => {
    switch (action.type) {
        case FILTER_BY_CATEGORIES:
            return {...state, 
                categories: {
                    ...state.categories,
                    [action.payload]: !state.categories[action.payload]
                }
            };
        case FILTER_BY_RATING:
            return { ...state, ratings: action.payload }
            
        case FILTER_BY_PRICE:
            return { ...state, price: action.payload };

        case SORT_BY:
            return { ...state, sortBy: action.payload };

        case CLEAR_FILTERS:
            return { ...initialFilterState };

        default: {
            return { ...initialFilterState };
        }
    }
}

export { initialFilterState, productFilterReducer };