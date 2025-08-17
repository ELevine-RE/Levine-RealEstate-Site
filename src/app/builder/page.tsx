'use client'

export default function BuilderPageRoute() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <h1>🔧 Builder.io Visual Editor</h1>
          
          <div className="alert alert-info mt-4">
            <h4>✅ API Key Configured</h4>
            <p>Your Builder.io API key is: <code>92b39f****e6f2</code></p>
          </div>

          <div className="card mt-4">
            <div className="card-body">
              <h5>To complete Builder.io setup:</h5>
              <ol className="text-start">
                <li>Go to <a href="https://builder.io" target="_blank">builder.io</a></li>
                <li>Create a new model called "page"</li>
                <li>Add your components to the visual editor</li>
                <li>Start building your real estate pages!</li>
              </ol>
            </div>
          </div>

          <div className="mt-4">
            <a 
              href="https://builder.io/content" 
              target="_blank" 
              className="btn btn-primary me-2"
            >
              Open Builder.io Dashboard
            </a>
            <a href="/" className="btn btn-outline-secondary">
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
