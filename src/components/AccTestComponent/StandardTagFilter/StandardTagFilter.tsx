import React from 'react';
import styles from './StandardTagFilter.module.scss';

const StandardTagFilter = ({ dispatch, tagAction, textAction, describeId, catTag }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(tagAction(describeId, e.target.value));
    if (e.target.value === 'none') dispatch(textAction(`Component is accessible regarding all axe-core categories.`, describeId));
    else dispatch(textAction(`Component is accessible regarding ${e.target.value}.`, describeId));
  };

  return (
    <div id={styles.CatTagFilter}>
      <label for='accTestStandardTypes'>Choose A Content Filter:  </label>
      <select value={catTag} id='accTestStandardTypes' onChange={handleChange}>
        <option value='none'>No Tag</option>
        <option value='wcag2a'>WCAG 2.0 Level A</option>
        <option value='wcag2aa'>WCAG 2.0 Level AA</option>
        <option value='wcag21a'>WCAG 2.1 Level A</option>
        <option value='wcag21aa'>WCAG 2.1 Level AA</option>
        <option value='best-practice'>Common best practices</option>
        <option value='ACT'>Accessibility Conformance Testing(W3C)</option>
        <option value='section508'>Section 508</option>
        <option value='experimental'>Cutting-edge rules, disabled by default</option>
      </select>
    </div>
  );
};

export default StandardTagFilter;
