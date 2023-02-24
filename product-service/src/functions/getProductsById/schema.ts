export default {
  type: "array",
  properties: {
    id: { type: 'string' },
    count: { type: 'string' },
    description: { type: 'string' },
    price: { type: 'string' },
    title: { type: 'string' },
    logo: { type: 'string' },
  },
  required: ['id', 'count', 'description', 'price', 'title', 'logo']
} as const;
