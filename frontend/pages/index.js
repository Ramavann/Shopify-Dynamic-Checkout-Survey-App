import { Card, Layout, Page } from "@shopify/polaris";

export default function Home() {
  return (
    <Page title="Survey Dashboard">
      <Layout>
        <Layout.Section>
          <Card title="Survey Responses" sectioned>
            <p>Data visualization and analytics will appear here.</p>
          </Card>
        </Layout.Section>
      </Layout>
      <div>
        <h1>Welcome to Shopify Survey App</h1>
        <p>Dashboard will appear here.</p>
      </div>
    </Page>
  );
}