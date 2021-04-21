import App from "../components/App";
import Layout from "../components/layout";

export default function Home({ data }) {
  return (
    <Layout>
      <App data={data} />
    </Layout>
  );
}
