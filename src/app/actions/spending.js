// @flow
import {
  ADD_CATEGORY,
  UPDATE_SPENDING
} from '../constants/ActionTypes';

const addCategory = (categoryName: string): any => ({
  type: ADD_CATEGORY,
  value: categoryName,
});

const updateCategorySpending = (categoryName: string, newSpendingValue: number): any => ({
  type: UPDATE_SPENDING,
  value: newSpendingValue,
  categoryName,
});

export default {
  addCategory,
  updateCategorySpending,
};
