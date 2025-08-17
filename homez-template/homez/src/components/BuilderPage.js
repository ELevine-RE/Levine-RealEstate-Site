import { BuilderComponent } from '@builder.io/react'
import { useEffect, useState } from 'react'

export default function BuilderPage({ model, content }) {
  const [builderContent, setBuilderContent] = useState(null)

  useEffect(() => {
    // For now, just use the provided content
    // Builder.io integration will be handled through the extension
    setBuilderContent(content)
  }, [content])

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
