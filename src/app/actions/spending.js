import {
  ADD_CATEGORY,
  UPDATE_SPENDING
} from '../constants/ActionTypes';

const addCategory = (categoryName) => ({
  type: ADD_CATEGORY,
  value: categoryName,
});

const updateCategorySpending = (categoryName, newSpendingValue) => ({
  type: UPDATE_SPENDING,
  value: newSpendingValue,
  categoryName,
});

export default {
  addCategory,
  updateCategorySpending,
};
