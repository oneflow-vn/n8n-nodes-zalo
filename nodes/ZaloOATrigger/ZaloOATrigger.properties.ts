import { INodeProperties } from 'n8n-workflow'

export const resources = [
  {
    displayName: 'Message',
    name: 'Quota Management',
    description: '',
    events: [
      {
        displayName: 'User Send Message',
        name: 'onUserSendMessage',
        filters: [
          {
            request: {
              body: {
                event_name: 'user_send_text',
              },
            },
          },
        ],
      },
      {
        displayName: 'User Open Message',
        name: 'onUserOpenMessage',
        filters: [
          {
            request: {
              body: {
                event_name: 'user_send_text',
              },
            },
          },
        ],
      },
      {
        displayName: 'User Reaction Message',
        name: 'onUserReactionMessage',
        filters: [
          {
            request: {
              body: {
                event_name: 'user_send_text',
              },
            },
          },
        ],
      },
      {
        displayName: 'My Reaction Message',
        name: 'onMyReactionMessage',
        filters: [
          {
            request: {
              body: {
                event_name: 'user_send_text',
              },
            },
          },
        ],
      },
      {
        displayName: 'My Send Message',
        name: 'onMySendMessage',
        filters: [
          {
            request: {
              body: {
                event_name: 'user_send_text',
              },
            },
          },
        ],
      },
      {
        displayName: 'My Send Message Anonymous',
        name: 'onMySendMessageAnonymous',
        filters: [
          {
            request: {
              body: {
                event_name: 'user_send_text',
              },
            },
          },
        ],
      },
      {
        displayName: 'Anonymous Send Message',
        name: 'onAnonymousSendMessage',
        filters: [
          {
            request: {
              body: {
                event_name: 'user_send_text',
              },
            },
          },
        ],
      },
      {
        displayName: 'User Seen Message',
        name: 'onUserSeenMessage',
        filters: [
          {
            request: {
              body: {
                event_name: 'user_send_text',
              },
            },
          },
        ],
      },
      {
        displayName: 'User Receive Message',
        name: 'oneUserReceiveMessage',
        filters: [
          {
            request: {
              body: {
                event_name: 'user_send_text',
              },
            },
          },
        ],
      },
    ],
    value: 'Quota Management',
  },
  {
    name: 'default',
    value: 'default',
    description: '',
  },
]

export const resourceSelect: INodeProperties = {
  displayName: 'Resource',
  name: 'resource',
  type: 'options',
  noDataExpression: true,
  options: [
    {
      name: 'Message',
      value: 'Message',
      description: '',
    },
    {
      name: 'default',
      value: 'default',
      description: '',
    },
  ],
  default: 'Message',
  routing: {
    send: {
      preSend: [
        async function (this: any, options) {
          // @ts-ignore
          const credentials = await this.getCredentials('zaloOath2Api')

          options.headers = {
            ...options.headers,
            access_token: credentials.oauthTokenData.access_token,
          }

          return Promise.resolve(options)
        },
      ],
    },
  },
}

export const events: INodeProperties[] = [
  {
    displayName: 'Event',
    name: 'event',
    type: 'options',
    options: [
      {
        name: 'onUserSendMessage',
        value: 'onUserSendMessage',
      },
      {
        name: 'onUserOpenMessage',
        value: 'onUserOpenMessage',
      },
      {
        name: 'onUserReactionMessage',
        value: 'onUserReactionMessage',
      },
      {
        name: 'onMyReactionMessage',
        value: 'onMyReactionMessage',
      },
      {
        name: 'onMySendMessage',
        value: 'onMySendMessage',
      },
      {
        name: 'onMySendMessageAnonymous',
        value: 'onMySendMessageAnonymous',
      },
      {
        name: 'onAnonymousSendMessage',
        value: 'onAnonymousSendMessage',
      },
      {
        name: 'onUserSeenMessage',
        value: 'onUserSeenMessage',
      },
      {
        name: 'oneUserReceiveMessage',
        value: 'oneUserReceiveMessage',
      },
    ],
    default: 'onUserSendMessage',
  },
]

export const properties: INodeProperties[] = [resourceSelect, ...events]
