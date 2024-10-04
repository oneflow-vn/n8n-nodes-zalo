/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-description-boolean-without-whether */
/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */

/**
 * The following code was generated create-n8n-nodes tool.
 *
 * This file was automatically generated and should not be edited.
 *
 * If changes are required, please refer to the templates and scripts in the repository.
 * Repository: https://github.com/oneflow-vn/create-n8n-nodes
 */

import { INodeProperties } from 'n8n-workflow'

// @ts-ignore
import * as helpers from '../helpers'

import { aggregateNodeMethods } from '../helpers/methods'
import { runHooks } from './hooks'

import * as quotaManagement from './quota-management'
import * as defaultResource from './default'

const authenticationProperties: INodeProperties[] = []

const resourceSelect: INodeProperties[] = [
  {
    displayName: 'Resource',
    name: 'resource',
    type: 'options',
    noDataExpression: true,
    options: [
      {
        name: 'Quota Management',
        value: 'Quota Management',
        description: '',
      },
      {
        name: 'Default',
        value: 'Default',
        description: '',
      },
    ],
    default: '',
  },
]

const extraProperties: INodeProperties[] = [
  {
    displayName: 'Use Custom Body',
    name: 'useCustomBody',
    type: 'boolean',
    description: 'Whether to use a custom body',
    required: false,
    default: false,
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "group_id": "f414c8f76fa586fbdfb4",\n  "member_user_ids": [\n    8756287263669629000\n  ]\n}',
    description: 'Custom body to send',
    routing: {
      request: {
        body: {
          customBody: '={{JSON.parse($value)}}',
        },
      },
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        useCustomBody: [true],
        resource: ['Default'],
        operation: ['Accept New Member Into A Group'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "group_id": "string",\n  "member_user_ids": [\n    "string"\n  ]\n}',
    description: 'Custom body to send',
    routing: {
      request: {
        body: {
          customBody: '={{JSON.parse($value)}}',
        },
      },
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        useCustomBody: [true],
        resource: ['Default'],
        operation: ['Rejects A Pending Membership Invite From A Group'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "group_id": "string",\n  "member_user_ids": [\n    "string"\n  ]\n}',
    description: 'Custom body to send',
    routing: {
      request: {
        body: {
          customBody: '={{JSON.parse($value)}}',
        },
      },
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        useCustomBody: [true],
        resource: ['Default'],
        operation: ['Adds Admins To A Group'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default: '{\n  "group_id": "string",\n  "member_user_ids": "string"\n}',
    description: 'Custom body to send',
    routing: {
      request: {
        body: {
          customBody: '={{JSON.parse($value)}}',
        },
      },
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        useCustomBody: [true],
        resource: ['Default'],
        operation: ['Delete Subgroup'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default: '{\n  "group_id": "f414c8f76fa586fbdfb4"\n}',
    description: 'Custom body to send',
    routing: {
      request: {
        body: {
          customBody: '={{JSON.parse($value)}}',
        },
      },
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        useCustomBody: [true],
        resource: ['Default'],
        operation: ['Disbanding A Group'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "quota_owner": "string",\n  "product_type": "gmf10",\n  "quota_type": "sub_quota"\n}',
    description: 'Custom body to send',
    routing: {
      request: {
        body: {
          customBody: '={{JSON.parse($value)}}',
        },
      },
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        useCustomBody: [true],
        resource: ['Quota Management'],
        operation: ['Quota Check For Groups'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "recipient": {\n    "group_id": "string"\n  },\n  "message": {\n    "attachment": {\n      "type": "template",\n      "payload": {\n        "template_type": "media",\n        "elements": [\n          {\n            "media_type": "sticker",\n            "attachment_id": "bfe458bf64fa8da4d4eb"\n          }\n        ]\n      }\n    }\n  }\n}',
    description: 'Custom body to send',
    routing: {
      request: {
        body: {
          customBody: '={{JSON.parse($value)}}',
        },
      },
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        useCustomBody: [true],
        resource: ['Default'],
        operation: ['Gui Tin Nhan Nhom Dang Sticker'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "recipient": {\n    "group_id": "f414c8f76fa586fbdfb4"\n  },\n  "message": {\n    "text": "hello from Zalo"\n  }\n}',
    description: 'Custom body to send',
    routing: {
      request: {
        body: {
          customBody: '={{JSON.parse($value)}}',
        },
      },
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        useCustomBody: [true],
        resource: ['Default'],
        operation: ['Send A Group Message'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "group_name": "string",\n  "group_description": "string",\n  "asset_id": "string",\n  "member_user_ids": [\n    "string"\n  ]\n}',
    description: 'Custom body to send',
    routing: {
      request: {
        body: {
          customBody: '={{JSON.parse($value)}}',
        },
      },
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        useCustomBody: [true],
        resource: ['Default'],
        operation: ['Tao Nhom Moi'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "group_id": "string",\n  "group_name": "string",\n  "group_avatar": "string",\n  "group_description": "string",\n  "lock_send_msg": true,\n  "join_appr": true,\n  "enable_msg_history": true,\n  "enable_link_join": true\n}',
    description: 'Custom body to send',
    routing: {
      request: {
        body: {
          customBody: '={{JSON.parse($value)}}',
        },
      },
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        useCustomBody: [true],
        resource: ['Default'],
        operation: ['Update Group'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default: '{\n  "group_id": "string",\n  "asset_id": "string"\n}',
    description: 'Custom body to send',
    routing: {
      request: {
        body: {
          customBody: '={{JSON.parse($value)}}',
        },
      },
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        useCustomBody: [true],
        resource: ['Default'],
        operation: ['Update Group Chat Service'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "group_id": "string",\n  "member_user_ids": [\n    "string"\n  ]\n}',
    description: 'Custom body to send',
    routing: {
      request: {
        body: {
          customBody: '={{JSON.parse($value)}}',
        },
      },
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        useCustomBody: [true],
        resource: ['Default'],
        operation: ['Invite Interested People To Group'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "recipient": {\n    "user_id": "string"\n  },\n  "message": {\n    "text": "string"\n  }\n}',
    description: 'Custom body to send',
    routing: {
      request: {
        body: {
          customBody: '={{JSON.parse($value)}}',
        },
      },
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        useCustomBody: [true],
        resource: ['Default'],
        operation: ['Gui Tin Tu Van Dang Van Ban'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "recipient": {\n    "user_id": "string"\n  },\n  "message": {\n    "text": "string",\n    "attachment": {\n      "type": "string",\n      "payload": {\n        "template_type": "string",\n        "elements": [\n          {\n            "media_type": "string",\n            "attachment_id": "string",\n            "url": "string"\n          }\n        ]\n      }\n    }\n  }\n}',
    description: 'Custom body to send',
    routing: {
      request: {
        body: {
          customBody: '={{JSON.parse($value)}}',
        },
      },
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        useCustomBody: [true],
        resource: ['Default'],
        operation: ['Gui Tin Tu Van Dinh Kem Anh'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "recipient": {\n    "user_id": "string"\n  },\n  "message": {\n    "attachment": {\n      "type": "string",\n      "payload": {\n        "template_type": "string",\n        "elements": [],\n        "buttons": []\n      }\n    }\n  }\n}',
    description: 'Custom body to send',
    routing: {
      request: {
        body: {
          customBody: '={{JSON.parse($value)}}',
        },
      },
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        useCustomBody: [true],
        resource: ['Default'],
        operation: ['Send Personal Media Messages'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "recipient": {\n    "anonymous_id": "string",\n    "conversation_id": "string"\n  },\n  "message": {\n    "attachment": {\n      "type": "string",\n      "payload": {\n        "template_type": "string",\n        "elements": [\n          {\n            "media_type": "string",\n            "url": "string"\n          }\n        ]\n      }\n    }\n  }\n}',
    description: 'Custom body to send',
    routing: {
      request: {
        body: {
          customBody: '={{JSON.parse($value)}}',
        },
      },
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        useCustomBody: [true],
        resource: ['Default'],
        operation: ['Message'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "recipient": {\n    "target": {\n      "ages": "0",\n      "gender": "0",\n      "locations": "4",\n      "cities": "4",\n      "platform": "1"\n    }\n  },\n  "message": {\n    "attachment": {\n      "type": "template",\n      "payload": {\n        "template_type": "media",\n        "elements": [\n          {\n            "media_type": "article",\n            "attachment_id": "bd5ea46bb32e5a0033f"\n          }\n        ]\n      }\n    }\n  }\n}',
    description: 'Custom body to send',
    routing: {
      request: {
        body: {
          customBody: '={{JSON.parse($value)}}',
        },
      },
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        useCustomBody: [true],
        resource: ['Default'],
        operation: ['Multiple Message Sending Options Via Zalo Oa Api'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "recipient": {\n    "user_id": "string"\n  },\n  "message": {\n    "template_type": "string",\n    "template_data": {}\n  }\n}',
    description: 'Custom body to send',
    routing: {
      request: {
        body: {
          customBody: '={{JSON.parse($value)}}',
        },
      },
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        useCustomBody: [true],
        resource: ['Default'],
        operation: ['Sendminiappmessage'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default: '{\n  "user_id": "string"\n}',
    description: 'Custom body to send',
    routing: {
      request: {
        body: {
          customBody: '={{JSON.parse($value)}}',
        },
      },
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        useCustomBody: [true],
        resource: ['Default'],
        operation: ['Check The Specific User S Message Send Limit'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default: '{\n  "file": "string"\n}',
    description: 'Custom body to send',
    routing: {
      request: {
        body: {
          customBody: '={{JSON.parse($value)}}',
        },
      },
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        useCustomBody: [true],
        resource: ['Default'],
        operation: ['Upload Image'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default: '{\n  "file": "string"\n}',
    description: 'Custom body to send',
    routing: {
      request: {
        body: {
          customBody: '={{JSON.parse($value)}}',
        },
      },
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        useCustomBody: [true],
        resource: ['Default'],
        operation: ['Upload A File'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default: '{\n  "file": "string"\n}',
    description: 'Custom body to send',
    routing: {
      request: {
        body: {
          customBody: '={{JSON.parse($value)}}',
        },
      },
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        useCustomBody: [true],
        resource: ['Default'],
        operation: ['Uploads A Gif Image'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "recipient": {\n    "user_id": "5373093274852641073"\n  },\n  "message": {\n    "attachment": {\n      "type": "template",\n      "payload": {\n        "template_type": "transaction_order",\n        "language": "VI",\n        "elements": [\n          {\n            "attachment_id": "string",\n            "type": "string",\n            "content": "string"\n          }\n        ],\n        "buttons": [\n          {\n            "title": "string",\n            "image_icon": "string",\n            "type": "string",\n            "payload": {}\n          }\n        ]\n      }\n    }\n  }\n}',
    description: 'Custom body to send',
    routing: {
      request: {
        body: {
          customBody: '={{JSON.parse($value)}}',
        },
      },
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        useCustomBody: [true],
        resource: ['Default'],
        operation: ['Gui Tin Giao Dich'],
      },
    },
  },
]

const rawProperties: INodeProperties[] = [
  ...authenticationProperties,
  ...resourceSelect,
  ...quotaManagement.properties,
  ...defaultResource.properties,
  ...extraProperties,
]

const { properties, methods: selfMethods } = runHooks(rawProperties)

const methods = aggregateNodeMethods([
  selfMethods,
  quotaManagement.methods,
  defaultResource.methods,
])

export { properties, methods }
