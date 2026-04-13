export function StructuredData() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Daniel Kurhinen',
    jobTitle: 'Photographer and Videographer',
    url: 'https://www.danielkurhinen.com',
    image: 'https://res.cloudinary.com/dhjbxoyfw/image/upload/v1765831828/Min%C3%A4.jpg',
    description: 'Cinematic videography and photography portfolio specializing in highlight reels for footballers and sports content.',
    sameAs: [
      'https://www.instagram.com',
    ],
    location: {
      '@type': 'City',
      name: 'Kuopio',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'FI',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
