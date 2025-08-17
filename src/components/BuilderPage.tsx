import { BuilderComponent, builder } from '@builder.io/react'
import { useEffect, useState } from 'react'

// Initialize Builder with your API key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || 'YOUR_BUILDER_API_KEY')

interface BuilderPageProps {
  model: string
  content?: any
}

export default function BuilderPage({ model, content }: BuilderPageProps) {
  const [builderContent, setBuilderContent] = useState<any>(null)

  useEffect(() => {
    // Fetch content from Builder.io if no content is provided
    if (!content && model) {
      builder.get(model, {
        userAttributes: {
          urlPath: window.location.pathname
        }
      }).then((content) => {
        setBuilderContent(content)
      })
    } else {
      setBuilderContent(content)
    }
  }, [model, content])

  return (
    <div>
      {builderContent ? (
        <BuilderComponent
          model={model}
          content={builderContent}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}
