module.exports = {
  name: 'Levine Real Estate',
  targets: ['react'],
  packages: ['@builder.io/react'],
  targets: ['react'],
  apiKey: '92b39fdec87a4b77897e956b3065e6f2',
  models: [
    {
      name: 'page',
      fields: [
        {
          name: 'title',
          type: 'string',
          required: true,
        },
        {
          name: 'content',
          type: 'blocks',
        },
      ],
    },
    {
      name: 'listing',
      fields: [
        {
          name: 'title',
          type: 'string',
          required: true,
        },
        {
          name: 'price',
          type: 'number',
        },
        {
          name: 'address',
          type: 'string',
        },
        {
          name: 'description',
          type: 'richText',
        },
        {
          name: 'images',
          type: 'list',
          subFields: [
            {
              name: 'image',
              type: 'file',
            },
          ],
        },
      ],
    },
  ],
}
