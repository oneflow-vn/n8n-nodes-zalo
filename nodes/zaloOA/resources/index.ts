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
        name: 'default',
        value: 'default',
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
        resource: ['default'],
        operation: ['Accept new member into a group'],
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
        resource: ['default'],
        operation: ['Rejects a pending membership invite from a group.'],
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
        resource: ['default'],
        operation: ['Adds admins to a group'],
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
        resource: ['default'],
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
        resource: ['default'],
        operation: ['Disbanding a group'],
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
        operation: ['Quota check for groups'],
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
        resource: ['default'],
        operation: ['Gui tin nhan nhom dang Sticker'],
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
        resource: ['default'],
        operation: ['Send a group message'],
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
        resource: ['default'],
        operation: ['Tao nhom moi'],
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
        resource: ['default'],
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
        resource: ['default'],
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
        resource: ['default'],
        operation: ['Invite Interested People to Group'],
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
