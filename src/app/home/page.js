import React from 'react'
import CustomerHomepageCardComponent from '../Component/CustomerHomepageCardComponent'
import ProductHomepageCardComponent from '../Component/ProductHomepageCardComponent'

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