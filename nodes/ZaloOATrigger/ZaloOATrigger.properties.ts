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

export const properties: INodeProperties[] = []
