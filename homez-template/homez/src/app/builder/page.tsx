'use client'

import BuilderPage from '../../components/BuilderPage'

export default function BuilderPageRoute() {
  return (
    <BuilderPage 
      model="page"
      content={{
        data: {
          blocks: [
            {
              '@type': '@builder.io/sdk:Element',
              component: {
                name: 'Property Header',
                options: {
                  title: 'Welcome to Builder.io',
                  price: '$500,000',
                  location: 'Property Location'
                }
              }
            }
          ]
        }
      }}
    />
  )
}
