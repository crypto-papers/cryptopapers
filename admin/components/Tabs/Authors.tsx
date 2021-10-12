import React, { useState } from 'react';
import { SearchList } from '@cryptopapers/ui';

import AuthorForm from '../Forms/AuthorForm';
import style from './Tabs.module.scss';

const opts = [
  { id: '1', label: 'Anonymous' },
  { id: '2', label: 'Satoshi Nakamoto' },
];

const AuthorsTab: React.FC = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className={style['split-panel']}>
      <SearchList opts={opts} />
      <AuthorForm />
    </div>
  );
};

AuthorsTab.displayName = 'Tab Panel - Authors';

export default AuthorsTab;
