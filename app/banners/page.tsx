import Dashboard from "@/components/layout/Dashboard";
import Layout from "@/components/layout/Layout";
import { banners } from "../../src/arrays/banners/bannersArray";
import ComponentCounter from "@/components/ComponentCounter/ComponentCounter";

export default function page() {
  return (
    <Layout>
      <Dashboard>
        {banners.map((item, index) => (
          <ComponentCounter info={item} key={index} />
        ))}
      </Dashboard>
    </Layout>
  );
}
