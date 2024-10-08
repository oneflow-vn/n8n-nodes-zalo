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
import * as helpers from '../../../helpers'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST v3.0/oa/group/message',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['default'],
        operation: ['Send a group message'],
      },
    },
  },
  {
    displayName: 'Access Token',
    name: 'access_token',
    required: true,
    description:
      'The access token allows the app to call the API on behalf of OA',
    default: '',
    type: 'string',
    routing: {
      request: {
        headers: {
          access_token: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['default'],
        operation: ['Send a group message'],
      },
    },
  },
  {
    displayName: 'Recipient',
    required: true,
    name: 'recipient',
    type: 'fixedCollection',
    default: {},
    description: '',
    options: [
      {
        displayName: 'Items',
        name: 'items',
        values: [
          {
            displayName: 'Group Id',
            type: 'string',
            default: '',
            description: 'ID of the group',
            name: 'group_id',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          recipient: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['default'],
        operation: ['Send a group message'],
      },
    },
  },
  {
    displayName: 'Message',
    required: true,
    name: 'message',
    type: 'fixedCollection',
    default: {},
    description: '',
    options: [
      {
        displayName: 'Items',
        name: 'items',
        values: [
          {
            displayName: 'Text',
            type: 'string',
            default: '',
            description: 'Text message content',
            name: 'text',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          message: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['default'],
        operation: ['Send a group message'],
      },
    },
  },
]
