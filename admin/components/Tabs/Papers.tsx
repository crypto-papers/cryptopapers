import React from 'react';

import PaperForm from '../Forms/PaperForm';

/**
 * A JSX component that defines the contents of the papers management tab.
 * @component
 */
const PapersTab: React.FC = () => (
  <div>
    <PaperForm />
  </div>
);

PapersTab.displayName = 'Tab Panel - Papers';

export default PapersTab;
