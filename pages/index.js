import React, {useState, useCallback} from 'react';
import {
  Layout,
  Page,
  Card,
  Button,
  FormLayout,
  TextField,
  Tag,
} from '@shopify/polaris';

import ProductsSelection from './productpicker.js';

import { Feed } from './index_import'

export default function App() {
  const [campaign, setCampaign] = useState('');
  const [website, setWebsite] = useState('');
  const [products, setProducts] = useState('');
  const [opened, setOpened] = useState('');

  const handleCampaignChange = useCallback((value) => setCampaign(value), []);
  const handleWebsiteChange = useCallback((value) => setWebsite(value), []);
  const handleProductsChange = useCallback((value) => setProducts(value), []);
  const handleProducts = (resources) => {
    this.setOpened({open: false})
    console.log(resources);
  }

  const primaryAction = {content: 'Next'};

  return (
    <Page
      title="Nanos Ads"
      primaryAction={primaryAction}
    >
      <Layout>

      <Layout.AnnotatedSection
        title="Let’s setup your campaign!"
        description="Give us all you got. We want to get acquainted with your business to help build a successful campaign.">
        <Card sectioned>x
          <FormLayout>
            <FormLayout.Group condensed>
            <TextField
              value={campaign}
              label="Campaign name"
              placeholder="Type the name of your campaign"
              onChange={handleCampaignChange}
            />
            <TextField
              value={website}
              label="Website"
              onChange={handleWebsiteChange}
            />
            </FormLayout.Group>

            
            {/* <TextField
              value={products}
              label="Products"
              placeholder="ex. 'running shoes', 'car repair shop'"
              connectedRight={<Button primary onClick={() => {<Tag onRemove={() => {}}>Wholesale</Tag>}}>Add</Button>}
              onChange={handleProductsChange}
            /> */}
            {/* <FormLayout.Group condensed>
            <Tag onRemove={() => {}}>Running</Tag>
            <Tag onRemove={() => {}}>Sprinting</Tag>
            </FormLayout.Group> */}
            <FormLayout.Group condensed>
              <TextField label="Category" placeholder="Type and choose a category" onChange={() => {}} />
              <TextField label="Business" placeholder="Select a business" onChange={() => {}} />
            </FormLayout.Group>
            
            <div>
              Don't have a business yet?{' '}
              <Button plain monochrome>
                Create one now
              </Button>
            </div> 
            
            
          </FormLayout>
        </Card>

        <Card>
          <ProductsSelection />
        </Card>
        
        <Card>
          <Feed/>
        </Card>

      </Layout.AnnotatedSection>
        
      </Layout>

      

    </Page>

    
  );

}

// function ConnectAccount({onAction}) {
//   return (
//     <AccountConnection
//       action={{content: 'Connect', onAction}}
//       details="No account connected"
//       termsOfService={
//         <p>
//           By clicking Connect, you are accepting Sample’s{' '}
//           <Link url="https://polaris.shopify.com">Terms and Conditions</Link>,
//           including a commission rate of 15% on sales.
//         </p>
//       }
//     />
//   );
// }

// function DisconnectAccount({onAction}) {
//   return (
//     <AccountConnection
//       connected
//       action={{content: 'Disconnect', onAction}}
//       accountName="Tom Ford"
//       title={<Link url="http://google.com">Tom Ford</Link>}
//       details="Account id: d587647ae4"
//     />
//   );
// }
