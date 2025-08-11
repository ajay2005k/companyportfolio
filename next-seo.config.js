export const siteUrl = process.env.SITE_URL || 'https://blacklinestudios.example';

export const defaultSEO = {
  titleTemplate: '%s | Blackline Studios',
  defaultTitle: 'Blackline Studios - Designing products that move business forward',
  description: 'Strategy, Design, and Engineering services to help your business grow. We specialize in Product Strategy, Brand & Visual Design, UX/UI, and Frontend Development.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Blackline Studios',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Blackline Studios',
      },
    ],
  },
  twitter: {
    handle: '@blacklinestudios',
    site: '@blacklinestudios',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#000000',
    },
  ],
};
