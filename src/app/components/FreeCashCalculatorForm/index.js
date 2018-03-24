import React from 'react';
import PropTypes from 'prop-types';
import entries from 'lodash/entries';

import './FreeCashCalculatorForm.scss';

const CategoryInput = ({parentPath, subcategory, value, updateFn}) => (
  <label>
    {`${subcategory}`}
    <input
      className='spending-input'
      type='number'
      value={value}
      onChange={(e) => updateFn({ path: `${parentPath}.${subcategory}`, e })}
    />
  </label>
);

const SpendingForm = ({ categories, updateFn }) => {
  return (<form>
    {entries(categories)
      .map(([category, subcategories]) => {
        const parentPath = category;
        return (<div key={category}>
          <h2>{category}</h2>
          <div key={`${category}`} className='spending-category'>
            {
              entries(subcategories)
                .map(([subcategory, value]) => {
                  return (
                    <CategoryInput
                      parentPath={parentPath}
                      subcategory={subcategory}
                      value={value}
                      updateFn={updateFn}
                      key={`${category}-${subcategory}`}
                    />
                  );
                })
            }
          </div>
        </div>);
      })}
  </form>);
};

SpendingForm.PropTypes = {
  data: PropTypes.objectOf(
    PropTypes.arrayOf(PropTypes.string)
  ).isRequired,
  updateFn: PropTypes.func.isRequired,
};

export default SpendingForm;
