export default {
  type: "array",
  properties: {
    count: { type: 'string' },
    description: { type: 'string' },
    price: { type: 'string' },
    title: { type: 'string' },
  },
  required: ['count', 'description', 'price', 'title']
} as const;
