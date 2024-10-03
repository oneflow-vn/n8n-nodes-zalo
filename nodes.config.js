const path = require('path');

module.exports = {
  packageName: 'n8n-nodes-zalo',
  credentials: {
    zaloOath2Api: {
      displayName: 'Zalo Oath2 API',
      name: 'zaloOath2Api',
      className: 'ZaloOath2Api',
    },
  },
  nodes: {
    zaloGroups: {
      // Preset selection, simple | versioned
      preset: 'simple',

      displayName: 'Zalo Groups',
      name: 'zaloGroups',
      description: 'Zalo Groups API',

      // Openapi file path
      api: path.resolve(__dirname, 'openapi.yml'),

      // Icon could be a URL or a path fa:iconName or file:iconName
      icon: 'fa:comments',

      // By default the version is 1
      version: 1,

      // Tags selection, enable if needed to filter tags
      // tags: [],

      // Operation selection, enable if needed to filter operations
      // operations: [],

      // Nodes credentials
      credentials: [{
        displayName: 'Zalo Oath2 API',
        name: 'zaloOath2Api',
        required: true,
      }],

      // Nodes base URL
      baseUrl: 'https://openapi.zalo.me',

      // Nodes default options
      // requestDefaults: {
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   baseURL: '=\{\{$credentials.url\}\}',
      // },

      // Nodes options order, enable if needed to set options order
      // propertiesOrder: [],
    },
  },
  triggers: {
    zaloTrigger: {
      preset: 'webhook',
      displayName: 'Zalo Triggers',
      name: 'ZaloTrigger',
      description: 'Zalo Triggers API',

      events: [{
        name: 'message',
        description: 'Message event',
        register: {
          type: 'manual',
        },
        handler: {
          route: {
            path: '/webhook',
            method: 'POST',
          },
          name: 'zaloTrigger',
        },
      }]
    },
  },
  // Nodes overwrite options
  overwrites: {
    // overwrite operation options
    operations: [
      // {
      //   match: {
      //     name: 'randomOperation',
      //     set: {
      //       type: "string",
      //     }
      //   }
      // }
    ],
  },

  // Folders to delete when generating the nodes 
  deleteFolders: ['']
};

