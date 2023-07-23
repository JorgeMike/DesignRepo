import ComponentCounter from '@/components/ComponentCounter/ComponentCounter'
import Dashboard from '@/components/layout/Dashboard'
import Layout from '@/components/layout/Layout'
import { navbars } from '@/src/arrays/navbars/navbarsArray'
import React from 'react'

export default function page() {
  return (
    <Layout>
    <Dashboard>
      {navbars.map((item, index) => (
        <ComponentCounter info={item} key={index} />
      ))}
    </Dashboard>
  </Layout>
  )
}
