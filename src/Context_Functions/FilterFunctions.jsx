export default function FilterFunctions(state, action) {
    switch (action.type) {
        case 'LOAD_FILTER_PRODUCTS':
            return {
                ...state,
                all_products: action.payload,
                filterproducts: action.payload
            }
        case 'GET_SORT_VALUE':
            let userSortValue = document.getElementById("sort");
            let sort_value = userSortValue.options[userSortValue.selectedIndex].value ;
            return {
                ...state,
                sorting_value: sort_value
            }
        case 'SET_SORTED_PRODUCTS':
            let data = [...action.payload]
            let sortedproducts = data;
            if (state.sorting_value === 'lowest') {
                const tempsort = (a, b) => {
                    return a.price - b.price
                }
                sortedproducts = data.sort(tempsort);
            }
            else if (state.sorting_value === 'highest') {
                const tempsort = (a, b) => {
                    return b.price - a.price
                }
                sortedproducts = data.sort(tempsort);

            }
            else if (state.sorting_value === 'a-z') {
                sortedproducts = data.sort((a, b) => {
                    return a.name.localeCompare(b.name)
                });
            }
            else if (state.sorting_value === 'z-a') {
                sortedproducts = data.sort((a, b) => {
                    return b.name.localeCompare(a.name)
                });
            }
            return {
                ...state,
                filterproducts: sortedproducts
            }
        case 'UPDATE_FILTER_VALUE':
            const { name, value } = action.payload;
            return {
                ...state,
                filter: {
                    ...state.filter,
                    [name]: value
                }
            }
        case 'FILTER_PRODUCTS':
            let { all_products } = state;
            let filtered = [...all_products]

            const { text, category, company } = state.filter;
            console.log(category)
            if (text) {
                filtered = filtered.filter((i) => {
                    return i.name.toLowerCase().includes(text);
                })
            }
            if (category) {
                if (category.toLowerCase() != 'all')
                    filtered = filtered.filter((i) => {
                        return i.category === category;
                    })
            }
            if (company) {
                if (company.toLowerCase() != 'all')
                    filtered = filtered.filter((i) => {
                        return i.company === company;
                    })
            }

            return {
                ...state,
                filterproducts: filtered
            }
        case 'CLEAR_ALL_FILTERS':
            return {
                ...state,
                filter: {
                    text: "",
                    company: "All",
                    category: "All",
                }
            }
    }

}
