'use client'
import { createStorefrontApiClient } from '@shopify/storefront-api-client';
import { useEffect, useState } from 'react';

type Product = {
    id: string,
    title: string,
    description: string,
    handle: string,
    featuredImage: {
        id: string  
        url: string
    }, 
}

export default function Data() {
    const [response, setresponse] = useState("")
    const [products, setProducts] = useState<Product[]> ([])

    const client = createStorefrontApiClient({
        storeDomain: process.env.NEXT_PUBLIC_Store_Link!,
        apiVersion: '2025-10',
        publicAccessToken: process.env.NEXT_PUBLIC_Shopify_Public_Access_Token,
    })

    const productQuery = `
    query {
    products(first:100){
    nodes {
    id
    title
    description
    handle
    featuredImage {
        id
        url
      }
     }
    }
   
    }
    `

    useEffect(() => {
        const respone = async () => {
        try {
            const request = await client.request(productQuery)
            setresponse(productQuery)
            console.log('Shopify response:', request);
            const requestData = request.data.products.nodes;
            setProducts(requestData)
            console.log(requestData)
        }
        catch (error) {
            console.error(error)
        }
    }
    respone()
        
    }, [])

    




    return (
        <>
            <div className="flex justify-center mt-10">
            <table className='border w-full border-gray-300 rounded-lg overflow-hidden'>
                <thead className="bg-gray-100">
                    <tr className="text-left">
                        <th className="px-4 py-2 border-b">Featured Image</th>
                        <th className="px-4 py-2 border-b">ID</th>
                        <th className="px-4 py-2 border-b">Title</th>
                        <th className="px-4 py-2 border-b">description</th>
                        <th className="px-4 py-2 border-b">handle</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product:Product) => (
                        <tr key={product.id} className="hover:bg-gray-50">
                             <td className="px-4 py-2 border-b">
                                {product.featuredImage ? ( <img src={product.featuredImage.url} className='w-40 h-40 object-cover rounded' /> ) : (<span className="text-gray-400">No image</span>)}
                             </td>
                            <td className="px-4 py-2 border-b">{product.id}</td>
                            <td className="px-4 py-2 border-b">{product.title}</td>
                            <td className="px-4 py-2 border-b">{product.description}</td>
                            <td className="px-4 py-2 border-b">{product.handle}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    )
}

