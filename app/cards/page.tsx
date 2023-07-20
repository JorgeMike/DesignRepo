import Layout from "@/components/layout/Layout";
import Dashboard from "@/components/layout/Dashboard";
import ComponentCounter from "@/components/ComponentCounter/ComponentCounter";
import { cards } from "../../src/arrays/cards/cardsArray";

export default function Page() {
  return (
    <Layout>
      <Dashboard>
        {cards.map((item, index) => (
          <ComponentCounter info={item} key={index} />
        ))}
      </Dashboard>
    </Layout>
  );
}
