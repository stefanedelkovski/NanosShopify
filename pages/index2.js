import React from 'react';
import { Page, Card, EmptyState } from '@shopify/polaris';

export default function App() {
  return (
    <Page>
        <Card>
          <Card.Section>
            <EmptyState
              heading="Create optimized ad campaigns on Google, Facebook and Instagram"
              action={{content: 'Create Campaign'}}
              image="https://lh3.googleusercontent.com/KJqGHa3A7AusYRpg_cVT_jdqgabFpregtRSOSHVCixKjoeAPB6368uJqaiQL4Zp2S6w">
              <p>All in one place with Nanos Artificial Intelligence technology</p>
            </EmptyState>
          </Card.Section>
        </Card>
    </Page>
  );
}
