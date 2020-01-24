import * as CategoriesApiUtil from './../util/categories_util';

const receiveCategories = categories => {
    return ({
        type: RECEIVE_CATEGORIES,
        categories
    });
};

const receiveCategory = category => {
    return ({
        type: RECEIVE_CATEGORY,
        category
    });
};

const removeCategory = categoryId => {
    return ({
        type: REMOVE_CATEGORY,
        categoryId
    });
}

export const requestCategories = userId => dispatch => {
    return CategoriesApiUtil.fetchCategories(userId)
    .then(categories => {
        console.log(categories, 'cats')
        dispatch(receiveCategories(categories.data))})
};

export const requestCategory = categoryId => dispatch => {
    return CategoriesApiUtil.fetchCategory(categoryId)
    .then(category => dispatch(receiveCategory(category)))
};

export const createCategory = category => dispatch => {
    return CategoriesApiUtil.createCategory(category)
    .then(newCategory => dispatch(receiveCategory(newCategory)))
};

export const updateCategory = category => dispatch => {
    return CategoriesApiUtil.updateCategory(category)
    .then(updatedCategory => dispatch(receiveCategory(updatedCategory)))
};

export const deleteCategory = categoryId => dispatch => {
    return CategoriesApiUtil.deleteCategory(categoryId)
    .then(() => dispatch(removeCategory(categoryId)))
};

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY";
export const REMOVE_CATEGORY = "REMOVE_CATEGORY";