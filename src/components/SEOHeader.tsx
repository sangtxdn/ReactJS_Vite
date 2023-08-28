import { Helmet } from 'react-helmet-async';
import { SEO } from '@/types';

export default function SEOHeader(metaData: SEO) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{metaData.title}</title>
      {!!metaData.description && (
        <>
          <meta name="description" content={metaData.description} />
          <meta property="og:description" content={metaData.description} />
          <meta name="twitter:description" content={metaData.description} />
        </>
      )}
      {!!metaData.image && (
        <>
          <meta property="og:image" content={metaData.image} />
          <meta name="twitter:image:src" content={metaData.image} />
        </>
      )}
    </Helmet>
  );
}
