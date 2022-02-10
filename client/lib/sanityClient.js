import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'nw03is8d',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'skwR1AJMMGYeNnKR0EcBvjEas7tGeslX9fEFwj1ZAwC4JCZeFXGdJAl6AFUMXeSmUkxTBJ7LPgvWjbrEzCzpx5ZBWcWZrsBM1y6L6e5xyX1Fr7I5UK6i7lmFAtx4vow1SU3xsjtSySAWlS4uIapo77YZ76MtLy7Gf5W6SnMzfnA3EEkUPFee',
  useCdn: false,
})
