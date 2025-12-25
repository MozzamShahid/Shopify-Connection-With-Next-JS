'use client'
import { createStorefrontApiClient } from '@shopify/storefront-api-client';
import { useState } from 'react';

export default function Data() {
    const [response, setresponse] = useState("")

    const client = createStorefrontApiClient({
        storeDomain: process.env.NEXT_PUBLIC_Store_Link!,
        apiVersion: '2025-10',
        publicAccessToken: process.env.NEXT_PUBLIC_Shopify_Public_Access_Token,
    })

    const productQuery = `
    query {
    products(first:10){
    nodes {
    id
    title
    featuredImage {
        id
      }
     }
    }
   
    }
    `

    const respone = async () => {
        try {
            //             const productQuery = `
            //   query ProductQuery($handle: String) {
            //     product(handle: $handle) {
            //       id
            //       title
            //       handle
            //     }
            //   }
            // `;
            const request = await client.request(productQuery)
            setresponse(productQuery)
            console.log('Shopify response:', request);
        }
        catch (error) {
            console.error(error)
        }
    }





    return (
        <>
            <h1>Mozzam</h1>
            <button className='bg-amber-200 p-2' onClick={respone}>Click</button>
        </>
    )
}

// Problem I am looking to established a connection with the shopify and get my first response thats it
// https://meray-mehboob.myshopify.com/api/2025-10/graphql.json link we need to connect to