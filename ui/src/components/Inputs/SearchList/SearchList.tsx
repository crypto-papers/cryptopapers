import React, { useState } from 'react';

import style from './SearchList.module.scss';

interface ISearchListOpt {
  readonly id: string;
  readonly label: string;
}

interface ISearchListOptions {
  readonly group: string;
  readonly opts: ISearchListOpt[];
  readonly cb: (value: string) => void;
}

/**
 *
 * @component
 * @param opts -
 */
const SearchList: React.FC<ISearchListOptions> = ({ group, opts, cb }) => {
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
              name={group}
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

export default SearchList;
