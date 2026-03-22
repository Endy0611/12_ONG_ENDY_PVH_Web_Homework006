import CustomerHomepageCardComponent from '@/components/CustomerHomepageCardComponent'
import ProductHomepageCardComponent from '@/components/ProductHomepageCardComponent'
import React from 'react'


const page = async () => {
    const res = await fetch("https://homework-api.noevchanmakara.site/api/v1/customers")
    const data = await res.json()
    const customer = data.payload
  return (
    <div>
       <ProductHomepageCardComponent/>
       <CustomerHomepageCardComponent customers={customer.length} />
    </div>
  )
}

export default page