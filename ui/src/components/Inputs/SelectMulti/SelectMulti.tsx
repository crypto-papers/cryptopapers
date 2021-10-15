import React from 'react';

import style from './SelectMulti.module.scss';

interface ISelectMultiOpt extends HTMLOptionElement {
  readonly id: string;
  readonly label: string;
  readonly value: string;
}

interface ISelectMultiProps extends Partial<HTMLSelectElement> {
  readonly opts: ISelectMultiOpt[];
}

/**
 * A JSX component that renders a select list with multiple options.
 * @component
 * @param opts - A list of options used to populate the select element.
 */
const SelectMulti: React.FC<ISelectMultiProps> = ({ opts }) => (
  <select className={style.select} multiple>
    {opts.map(opt => (
      <option key={opt.id} className={style.option} value={opt.value}>
        {opt.label}
      </option>
    ))}
  </select>
);

SelectMulti.displayName = 'Select Multiple';

export type { ISelectMultiOpt, ISelectMultiProps };

export default SelectMulti;
