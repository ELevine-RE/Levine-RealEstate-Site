export const metadata = {
  title: "ELR - Evan Levine Real Estate | Designing the Essence of Prestige",
  description: "Premium real estate services with sophisticated design and unparalleled expertise. Discover luxury properties with ELR.",
  keywords: "luxury real estate, premium properties, Evan Levine, prestige homes, sophisticated design",
};

export default function MainRoot() {
  return (
    <div className="wrapper">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center">
              <h1 className="mb-4" style={{color: 'var(--primary-color)'}}>
                🏡 ELR - Evan Levine Real Estate
              </h1>
              <p className="lead mb-4" style={{color: 'var(--secondary-color)'}}>
                <em>Designing the Essence of Prestige</em>
              </p>
              <div className="prestige-card" role="alert">
                <h4 className="text-elr-primary mb-3">✅ Brand Integration Complete!</h4>
                <p className="text-elr-secondary">Your ELR brand has been successfully integrated with the Homez template and Builder.io.</p>
              </div>

              <div className="prestige-card mt-4">
                <div className="mb-3">
                  <h5 className="text-elr-primary">🚀 What's Working</h5>
                </div>
                <div className="card-body text-start">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                      <span>✅ ELR Brand Colors</span>
                      <span className="prestige-badge">Integrated</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                      <span>✅ ELR Logo & Typography</span>
                      <span className="prestige-badge">Applied</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                      <span>✅ Homez Template</span>
                      <span className="prestige-badge">Customized</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                      <span>✅ Builder.io Integration</span>
                      <span className="prestige-badge">Ready</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                      <span>✅ Premium Real Estate Platform</span>
                      <span className="prestige-badge">Live</span>
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
                    <li>✅ <strong>ELR Brand Applied:</strong> Colors, typography, and logos integrated</li>
                    <li><strong>Property Listings:</strong> Add your luxury property portfolio</li>
                    <li><strong>Visual Editor:</strong> Customize pages at <code>/builder</code></li>
                    <li><strong>Launch:</strong> Deploy your sophisticated real estate platform!</li>
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
