import { Helmet } from 'react-helmet';

const MetaSeo = ({ meta, schema }) => {
  const defaultCanonical = "https://www.morphmetaamritsar.com/";
  const canonicalUrl = meta?.canonical || defaultCanonical;
  const ogImage = meta?.image || "/images/logonew1.png";

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{meta?.title}</title>
      <meta name="title" content={meta?.title} />
      <meta name="description" content={meta?.description} />
      {meta?.keyword && <meta name="keywords" content={meta?.keyword} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={meta?.type || "website"} />
      <meta property="og:site_name" content="Morph Meta Academy Amritsar" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={meta?.title} />
      <meta property="og:description" content={meta?.description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={meta?.title} />
      <meta name="twitter:description" content={meta?.description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Dynamic JSON-LD Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default MetaSeo;