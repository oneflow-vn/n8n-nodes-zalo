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
            match: {
              request: {
                body: {
                  event_name: 'user_send_text',
                },
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
            match: {
              request: {
                body: {
                  event_name: 'user_send_text',
                },
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
            match: {
              body: {
                request: {
                  event_name: 'user_send_text',
                },
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
            match: {
              request: {
                body: {
                  event_name: 'user_send_text',
                },
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
            match: {
              request: {
                body: {
                  event_name: 'user_send_text',
                },
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
            match: {
              request: {
                body: {
                  event_name: 'user_send_text',
                },
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
            match: {
              request: {
                body: {
                  event_name: 'user_send_text',
                },
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
            match: {
              request: {
                body: {
                  event_name: 'user_send_text',
                },
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
            match: {
              request: {
                body: {
                  event_name: 'user_send_text',
                },
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
}

export const events: INodeProperties[] = [
  {
    displayName: 'Event',
    name: 'event',
    type: 'options',
    options: [
      {
        name: 'User Send Message',
        value: 'onUserSendMessage',
      },
      {
        name: 'User Open Message',
        value: 'onUserOpenMessage',
      },
      {
        name: 'User Reaction Message',
        value: 'onUserReactionMessage',
      },
      {
        name: 'My Reaction Message',
        value: 'onMyReactionMessage',
      },
      {
        name: 'My Send Message',
        value: 'onMySendMessage',
      },
      {
        name: 'My Send Message Anonymous',
        value: 'onMySendMessageAnonymous',
      },
      {
        name: 'Anonymous Send Message',
        value: 'onAnonymousSendMessage',
      },
      {
        name: 'User Seen Message',
        value: 'onUserSeenMessage',
      },
      {
        name: 'User Receive Message',
        value: 'oneUserReceiveMessage',
      },
    ],
    default: 'onUserSendMessage',
    displayOptions: {
      show: {
        resource: ['Message'],
      },
    },
  },
]

export const properties: INodeProperties[] = [resourceSelect, ...events]
