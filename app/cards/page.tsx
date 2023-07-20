"use client";
import Layout from "@/components/layout/Layout";
import Dashboard from "@/components/layout/Dashboard";
import { useStyle } from "@/src/context/styleContext";
import CardOne from "@/components/Cards/CardOne";
import CardTwo from "@/components/Cards/CardTwo";

export default function Page() {
  const { style } = useStyle();
  return (
    <Layout>
      <Dashboard>
        <div className={`col-xl-6 py-3 ${style.component_container}`}>
          <CardOne />
        </div>
        <div className={`col-xl-6 py-3 ${style.component_container}`}>
          <CardTwo />
        </div>
      </Dashboard>
    </Layout>
  );
}
