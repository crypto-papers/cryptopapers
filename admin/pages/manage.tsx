import React from 'react';
import { TabbedInterface } from '@cryptopapers/ui';

import AuthorsTab from '../components/Tabs/Authors';
import Layout from '../components/Layout/Layout';

const tabs = [
  { id: 'papers', panelContent: <p>Hello</p>, panelLabel: 'Papers', tabLabel: 'Manage Papers' },
  {
    id: 'authors',
    panelContent: <AuthorsTab />,
    panelLabel: 'Authors',
    tabLabel: 'Manage Authors',
  },
];

const ManagementPage: React.FC = () => (
  <Layout title="Manage Resources">
    <TabbedInterface tabs={tabs} />
  </Layout>
);

ManagementPage.displayName = 'Management Page';

export default ManagementPage;
