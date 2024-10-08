const path = require('path');
const { RemoveVietnameseAccents } = require('remove-vietnamese-accents');
const removeVietnameseAccents = new RemoveVietnameseAccents()

const mockPresend = `async function (this: any, options) {
					// @ts-ignore
					const credentials = await this.getCredentials('zaloOath2Api');

					options.headers = {
						...options.headers,
						access_token: credentials.oauthTokenData.access_token,
					};

					return Promise.resolve(options);
				}`;


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
      name: 'zaloOA',
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
    zaloOATrigger: {
      preset: 'webhook',
      displayName: 'Zalo OA Trigger',
      name: 'ZaloOATrigger',
      description: 'Zalo Triggers API',
      icon: './icons/zalo.svg',

      webhooks: [
        {
          name: 'default',
          httpMethod: 'POST',
          responseMode: 'onReceived',
          path: 'webhook',
        },
      ],

      resources: [
        {
          name: 'Message',
          displayName: 'Message',
          description: 'Message',

          events: [{
            name: 'onUserSendMessage',
            displayName: 'User Send Message',
            filters: [{
              request: {
                body: {
                  event_name: 'user_send_text',
                }
              }
            }]
          }, {
            name: 'onUserOpenMessage',
            displayName: 'User Open Message',
            filters: [{
              request: {
                body: {
                  event_name: 'user_send_text',
                }
              }
            }]
          }, {
            name: 'onUserReactionMessage',
            displayName: 'User Reaction Message',
            filters: [{
              request: {
                body: {
                  event_name: 'user_send_text',
                }
              }
            }]
          }, {
            name: 'onMyReactionMessage',
            displayName: 'My Reaction Message',
            filters: [{
              request: {
                body: {
                  event_name: 'user_send_text',
                }
              }
            }]
          }, {
            name: 'onMySendMessage',
            displayName: 'My Send Message',
            filters: [{
              request: {
                body: {
                  event_name: 'user_send_text',
                }
              }
            }]
          }, {
            name: 'onMySendMessageAnonymous',
            displayName: 'My Send Message Anonymous',
            filters: [{
              request: {
                body: {
                  event_name: 'user_send_text',
                }
              }
            }]
          }, {
            name: 'onAnonymousSendMessage',
            displayName: 'Anonymous Send Message',
            filters: [{
              request: {
                body: {
                  event_name: 'user_send_text',
                }
              }
            }]
          }, {
            name: 'onUserSeenMessage',
            displayName: 'User Seen Message',
            filters: [{
              request: {
                body: {
                  event_name: 'user_send_text',
                }
              }
            }]
          }, {
            name: 'oneUserReceiveMessage',
            displayName: 'User Receive Message',
            filters: [{
              request: {
                body: {
                  event_name: 'user_send_text',
                }
              }
            }]
          }]
        }
      ]

    },
  },
  // Nodes overwrite options
  overwrites: {
    // overwrite operation options
    operations: [
      {
        match: {
          name: 'access_token',
        },
        set: {
          type: 'hidden',
          default: '=\{\{$credentials.oauthTokenData.accessToken\}\}',
        }
      },
      {
        match: {
          name: 'resource',
        },
        set: {
          routing: {
            send: {
              preSend: [
                '${' + mockPresend + '}',
              ],
            }
          }
        }
      }
    ],
  },

  // Folders to delete when generating the nodes
  deleteFolders: [''],

  operationNameFn: (name) => {
    return removeVietnameseAccents.remove(name);
  }
}

