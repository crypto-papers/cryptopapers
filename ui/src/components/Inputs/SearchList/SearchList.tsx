import React, { useState } from 'react';

import style from './SearchList.module.scss';

interface ISearchListOpt {
  readonly id: string;
  readonly label: string;
}

interface ISearchListProps {
  readonly name: string;
  readonly opts: ISearchListOpt[];
  readonly cb: (value: string) => void;
}

/**
 * A JSX component that renders a list of radio buttons that can be filtered by means of
 * a search input. While the option do not look like standard radio buttons, they maintain
 * the accessibility properties inherent to this input type.
 * @component
 * @param props
 * @param props.cb - A function to be executed (with the target value) when an option is toggled.
 * @param props.name - The grouping to which the radio options pertain.
 * @param props.opts - A list of options used to populate the radio options.
 */
const SearchList: React.FC<ISearchListProps> = ({ cb, name: fieldName, opts }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selected, setSelected] = useState('');

  const handleSearch = (input: string): void => {
    setSelected('');
    setSearchTerm(input);
  };

  const handleToggle = (id: string): void => {
    setSelected(id);
    cb(id);
  };

  const options = opts.filter(opt => opt.label.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className={style.container}>
      <input
        className={style.search}
        type="search"
        value={searchTerm}
        onChange={(e): void => handleSearch(e.target.value)}
      />
      <div className={style.list}>
        {options.map(opt => (
          <label
            key={opt.id}
            className={opt.id === selected ? `${style.label} ${style.selected}` : style.label}
            htmlFor={opt.id}
          >
            <input
              id={opt.id}
              name={fieldName}
              type="radio"
              value={opt.id}
              onChange={(e): void => handleToggle(e.target.value)}
            />
            <span>{opt.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

SearchList.displayName = 'Search List';

export type { ISearchListOpt, ISearchListProps };

export default SearchList;
