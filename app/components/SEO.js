"use client";

export default function SEO({ title, description, canonical, image, schema }) {
  return (
    <>
      {canonical && <link rel="canonical" href={canonical} />}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </>
  );
}
