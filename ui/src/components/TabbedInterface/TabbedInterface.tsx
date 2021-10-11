import React, { useState } from 'react';

import style from './TabbedInterface.module.scss';

interface ITabConfig {
  readonly id: string;
  readonly panelContent: React.ReactElement;
  readonly panelLabel: string;
  readonly tabLabel: string;
}

interface ITabs {
  readonly tabs: ITabConfig[];
}

/**
 * JSX component that warps provided content in a tabbed interface.
 * @component
 * @param tabs - The data pertaining to each tab.
 */
const TabbedInterface: React.FC<ITabs> = ({ tabs }) => {
  const [active, setActive] = useState(tabs[0].id);

  return (
    <div>
      <div aria-orientation="horizontal" className={style.tablist} role="tablist">
        {tabs.map(tab => (
          <button
            key={`${tab.id}-tab`}
            aria-controls={`${tab.id}-content-panel`}
            aria-selected={tab.id === active}
            className={style.tab}
            id={`${tab.id}-tab`}
            role="tab"
            type="button"
            onClick={(): void => setActive(tab.id)}
          >
            {tab.tabLabel}
          </button>
        ))}
      </div>
      {tabs.map(tab => (
        <div
          key={`${tab.id}-panel`}
          aria-labelledby={`${tab.id}-tab`}
          className={tab.id === active ? `${style.panel} ${style.active}` : style.panel}
          id={`${tab.id}-content-panel`}
          role="tabpanel"
        >
          <h2>{tab.panelLabel}</h2>
          {tab.panelContent}
        </div>
      ))}
    </div>
  );
};

TabbedInterface.displayName = 'Tabbed Interface';

export type { ITabConfig, ITabs };

export default TabbedInterface;
