import React from 'react';
import { TabbedInterface } from '@cryptopapers/ui';

import AuthorsTab from '../components/Tabs/Authors';
import Layout from '../components/Layout/Layout';
import PapersTab from '../components/Tabs/Papers';

const tabs = [
  {
    id: 'papers',
    panelContent: <PapersTab />,
    panelLabel: 'Papers',
    tabLabel: 'Manage Papers',
  },
  {
    id: 'authors',
    panelContent: <AuthorsTab />,
    panelLabel: 'Authors',
    tabLabel: 'Manage Authors',
  },
];

/**
 * The management page JSX component.
 * @component
 */
const ManagementPage: React.FC = () => (
  <Layout title="Manage Resources">
    <TabbedInterface tabs={tabs} />
  </Layout>
);

ManagementPage.displayName = 'Management Page';

export default ManagementPage;
