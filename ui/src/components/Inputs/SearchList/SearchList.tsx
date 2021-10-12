import React, { useState } from 'react';

import style from './SearchList.module.scss';

interface ISearchListOpt {
  readonly id: string;
  readonly label: string;
}

interface ISearchListOptions {
  readonly opts: ISearchListOpt[];
}

/**
 *
 * @component
 * @param opts -
 */
const SearchList: React.FC<ISearchListOptions> = ({ opts }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const options = opts.filter(opt => opt.label.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className={style.container}>
      <input
        className={style.search}
        type="search"
        value={searchTerm}
        onChange={(e): void => setSearchTerm(e.target.value)}
      />
      <ul className={style.list}>
        {options.map(opt => (
          <li key={opt.id} value={opt.id}>
            <button className={style.button} type="button">
              {opt.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

SearchList.displayName = 'Search List';

export default SearchList;
