export default {
  type: "object",
  properties: {
    "title": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "price": {
      "type": "integer"
    },
    "logo": {
      "type": "string"
    },
    "count": {
      "type": "integer"
    }
  },
  required: [
      "title",
      "description",
      "price",
      "count"
  ]
} as const;
