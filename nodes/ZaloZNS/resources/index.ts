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

import * as defaultResource from './default'

const authenticationProperties: INodeProperties[] = []

const resourceSelect: INodeProperties[] = [
  {
    displayName: 'Resource',
    name: 'resource',
    type: 'hidden',
    noDataExpression: true,
    options: [
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
      '{\n  "phone": "84987654321",\n  "template_id": "217489",\n  "template_data": {}\n}',
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
        operation: ['Gui ZNS voi Journey Token'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "hash_phone": "string",\n  "template_id": "string",\n  "template_data": {\n    "ky": "string",\n    "thang": "string",\n    "start_date": "string",\n    "end_date": "string",\n    "customer": "string",\n    "cid": "string",\n    "address": "string",\n    "amount": "string",\n    "total": "string"\n  },\n  "tracking_id": "string"\n}',
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
        operation: ['Send ZNS using hash phone'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default: '{}',
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
        operation: ['Retrieve customer feedback information'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "rsa_phone": "string",\n  "template_id": "string",\n  "template_data": {},\n  "tracking_id": "string"\n}',
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
        operation: ['Send Encrypted Message'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "phone": "84987654321",\n  "token_type": "token_logistics_7"\n}',
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
        operation: ['Khoi tao Journey Token'],
      },
    },
  },
]

const rawProperties: INodeProperties[] = [
  ...authenticationProperties,
  ...resourceSelect,
  ...defaultResource.properties,
  ...extraProperties,
]

const { properties, methods: selfMethods } = runHooks(rawProperties)

const methods = aggregateNodeMethods([selfMethods, defaultResource.methods])

export { properties, methods }
