import ComponentCounter from "@/components/ComponentCounter/ComponentCounter";
import Dashboard from "@/components/layout/Dashboard";
import Layout from "@/components/layout/Layout";
import { buttons } from "@/src/arrays/buttons/buttonsArray";

export default function Page() {
  return (
    <Layout>
      <Dashboard>
        {buttons.map((item, index) => (
          <ComponentCounter info={item} key={index} />
        ))}
      </Dashboard>
    </Layout>
  );
}
