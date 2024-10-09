const path = require('path');
const { webhookEvents } = require('./webhookEvents');
const { RemoveVietnameseAccents } = require('remove-vietnamese-accents');
const removeVietnameseAccents = new RemoveVietnameseAccents()

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
    zaloOA: {
      // Preset selection, simple | versioned
      preset: 'simple',

      displayName: 'Zalo OA',
      name: 'ZaloOA',
      description: 'Zalo OA API',

      // Openapi file path
      api: path.resolve(__dirname, 'openapi.yml'),

      // Icon could be a URL or a path fa:iconName or file:iconName
      icon: './icons/zalo.svg',

      // By default the version is 1
      version: 1,

      // Tags selection, enable if needed to filter tags
      // tags: [],

      // Operation selection, enable if needed to filter operations
      // operations: ['/oa/listrecentchat'],

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
    zalo: {
      // Preset selection, simple | versioned
      preset: 'simple',

      displayName: 'Zalo',
      name: 'Zalo',
      description: 'Zalo API',

      // Openapi file path
      api: path.resolve(__dirname, 'social.yml'),

      // Icon could be a URL or a path fa:iconName or file:iconName
      icon: './icons/zalo.svg',

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
      // baseUrl: 'https://graph.zalo.me',

      // Nodes default options
      requestDefaults: {
        headers: {
          'Content-Type': 'application/json',
          access_token: '=\{\{$credentials.oauthTokenData.accessToken\}\}',
        },
        baseURL: 'https://graph.zalo.me',
      },

      // Nodes options order, enable if needed to set options order
      // propertiesOrder: [],

    },
    zaloZNS: {
      // Preset selection, simple | versioned
      preset: 'simple',

      displayName: 'Zalo ZNS',
      name: 'ZaloZNS',
      description: 'Zalo ZNS API',

      // Openapi file path
      api: path.resolve(__dirname, 'zns.yml'),

      // Icon could be a URL or a path fa:iconName or file:iconName
      icon: './icons/zalo.svg',

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
      // baseUrl: 'https://business.openapi.zalo.me',

      // Nodes default options
      requestDefaults: {
        headers: {
          'Content-Type': 'application/json',
          access_token: '=\{\{$credentials.oauthTokenData.accessToken\}\}',
        },
        baseURL: 'https://business.openapi.zalo.me',
      },

      // Nodes options order, enable if needed to set options order
      // propertiesOrder: [],
    }
  },
  triggers: {
    zaloTrigger: {
      preset: 'webhook',
      displayName: 'Zalo Trigger',
      name: 'ZaloTrigger',
      description: 'Zalo Triggers',
      icon: './icons/zalo.svg',

      webhooks: [
        {
          name: 'default',
          httpMethod: 'POST',
          responseMode: 'onReceived',
          path: 'zalo',
        },
      ],

      resources: [
        {
          name: 'Default',
          value: 'default',
          displayName: 'Default',
          description: 'Default Resource',
          events: webhookEvents,
        }
      ]

    },
  },

  // Folders to delete when generating the nodes
  deleteFolders: [''],

  operationNameFn: (name) => {
    return removeVietnameseAccents.remove(name);
  }
}

