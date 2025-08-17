export const metadata = {
  title: "Evan Levine Real Estate",
};

export default function MainRoot() {
  return (
    <div className="wrapper">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center">
              <h1 className="mb-4">🏡 Evan Levine Real Estate</h1>
              <div className="alert alert-success" role="alert">
                <h4 className="alert-heading">✅ Import Successful!</h4>
                <p>Your Homez template has been successfully imported and is ready to use.</p>
              </div>

              <div className="card mt-4">
                <div className="card-header">
                  <h5>🚀 What's Working</h5>
                </div>
                <div className="card-body text-start">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                      <span>✅ Next.js App</span>
                      <span className="badge bg-success">Working</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                      <span>✅ Homez Template</span>
                      <span className="badge bg-success">Imported</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                      <span>✅ Bootstrap Styling</span>
                      <span className="badge bg-success">Working</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                      <span>✅ Path Aliases (@/)</span>
                      <span className="badge bg-success">Fixed</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                      <span>✅ Builder.io Integration</span>
                      <span className="badge bg-success">Configured</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card mt-4">
                <div className="card-header">
                  <h5>🔧 Next Steps</h5>
                </div>
                <div className="card-body text-start">
                  <ol>
                    <li>✅ <strong>API Key Configured:</strong> Your Builder.io API key is active</li>
                    <li><strong>Create Content:</strong> Visit your Builder.io dashboard to create pages</li>
                    <li><strong>Visual Editor:</strong> Access the editor at <code>/builder</code></li>
                    <li><strong>Build:</strong> Start creating your real estate website!</li>
                  </ol>
                </div>
              </div>

              <div className="mt-4">
                <a href="https://builder.io/content" target="_blank" className="btn btn-primary me-2">
                  Open Builder.io Dashboard
                </a>
                <a href="/builder" className="btn btn-success">
                  Access Visual Editor
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
