import BuilderPage from '../../components/BuilderPage';

export default function DynamicPage({ params }) {
  // Convert the slug array to a URL path
  const urlPath = '/' + (params.slug || []).join('/');
  
  return <BuilderPage urlPath={urlPath} />;
}

// Generate static params for known routes (optional)
export async function generateStaticParams() {
  // You can pre-generate static pages for known routes
  // This is optional and can be removed if you want all pages to be dynamic
  return [
    { slug: [] }, // Homepage
    { slug: ['about'] },
    { slug: ['properties'] },
    { slug: ['contact'] },
    { slug: ['blog'] },
  ];
}

// Set dynamic rendering
export const dynamic = 'force-dynamic';
export const revalidate = 0;
