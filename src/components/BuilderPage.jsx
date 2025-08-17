'use client'

import { BuilderComponent, useIsPreviewing } from '@builder.io/react'
import { BuilderContent } from '@builder.io/sdk'
import { useEffect, useState } from 'react'

// Import the Homez registry to register components
import '../builder-homez-registry'

const BuilderPage = ({ content, model = 'page' }) => {
  const isPreviewing = useIsPreviewing()
  const [builderContent, setBuilderContent] = useState(content)

  useEffect(() => {
    // If we're in preview mode and no content is provided,
    // Builder.io will handle fetching the content
    if (isPreviewing && !content) {
      setBuilderContent(null)
    }
  }, [isPreviewing, content])

  // If no content is found and we're not previewing, show 404
  if (!builderContent && !isPreviewing) {
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h1>404 - Page Not Found</h1>
            <p>This page doesn't exist in Builder.io</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <BuilderComponent
      model={model}
      content={builderContent}
      apiKey={process.env.NEXT_PUBLIC_BUILDER_API_KEY}
    />
  )
}

export default BuilderPage
