import React from 'react';

import style from './SelectMulti.module.scss';

interface ISelectMultiOpt {
  readonly id: string;
  readonly label: string;
  readonly value: string;
}

interface ISelectMultiOptions {
  readonly opts: ISelectMultiOpt[];
}

/**
 * JSX component that
 * @component
 * @param opts - .
 */
const SelectMulti: React.FC<ISelectMultiOptions> = ({ opts }) => (
  <select className={style.select} multiple>
    {opts.map(opt => (
      <option key={opt.id} className={style.option} value={opt.value}>
        {opt.label}
      </option>
    ))}
  </select>
);

SelectMulti.displayName = 'Select Multiple';

export default SelectMulti;
