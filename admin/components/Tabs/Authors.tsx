import React, { useState } from 'react';
import { SearchList } from '@cryptopapers/ui';

import AuthorForm from '../Forms/AuthorForm';
import style from './Tabs.module.scss';

const opts = [
  { id: '1', label: 'Anonymous' },
  { id: '2', label: 'Satoshi Nakamoto' },
];

/**
 * A JSX component that defines the contents of the author management tab.
 * @component
 */
const AuthorsTab: React.FC = () => {
  const [selected, setSelected] = useState('');

  return (
    <div className={style['split-panel']}>
      <SearchList cb={setSelected} name="author" opts={opts} />
      <AuthorForm selected={selected} />
    </div>
  );
};

AuthorsTab.displayName = 'Tab Panel - Authors';

export default AuthorsTab;
