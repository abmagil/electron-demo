import React from 'react';
import ButtonsAndLinks from './ButtonsAndLinks';

const Forms = () => {
  return <section className='StyleguideSection' id='forms'>
    <h2 className='StyleguideSection__title'>Forms</h2>
    <label>An example input field
      <input />
    </label>
    <fieldset>An example set of radio buttons
      <label>
        A
        <input type="radio" name="styleguide-demo"/>
      </label>
      <label>
        B
        <input type="radio" name="styleguide-demo"/>
      </label>
      <label>
        C
        <input type="radio" name="styleguide-demo"/>
      </label>
    </fieldset>
    <label>
      A checkbox
      <input type="checkbox" />
    </label>
    <select>
      <option>A</option>
      <optgroup label="An Option Group">
        <option>B</option>
        <option>C</option>
      </optgroup>
    </select>
    <ButtonsAndLinks />
  </section>
}

export default Forms;
