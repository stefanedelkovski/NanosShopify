import { Page, Badge } from "@shopify/polaris"
import { ResourcePicker } from "@shopify/app-bridge-react"
import { PlusMinor } from '@shopify/polaris-icons';

class ProductsSelection extends React.Component {
    state = { open: false }
    render() {
        return (
            <Page 
                fullWidth
                title='Platforms'
                subtitle='Select the prefered advertising platforms.'
                titleMetadata={<Badge status="success">Paid</Badge>}
                primaryAction={{
                    content: 'Browse',
                    icon: PlusMinor,
                    onAction: ()=> this.setState({open: true})
                }}
            >
                <ResourcePicker
                    resourceType='Product'
                    open={this.state.open}
                    onCancel={() => this.setState({open: false})}
                    onSelection={(resources) => this.handleSelection(resources)}
                />
            </Page>
        )
    }

    handleSelection = (resources) => {
        const idFromResources = resources.selection.map((product) => product.id )
        this.setState({ open: false })
        console.log(idFromResources)
    }
}

export default ProductsSelection;

