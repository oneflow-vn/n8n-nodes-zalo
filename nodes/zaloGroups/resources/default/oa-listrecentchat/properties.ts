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
    displayName: 'GET /oa/listrecentchat',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Default'],
        operation: ['Oa Listrecentchat'],
      },
    },
  },
  {
    displayName: 'Data',
    name: 'data',
    required: true,
    description: 'Information to fetch the message',
    default: {},
    type: 'fixedCollection',
    options: [
      {
        displayName: 'Items',
        name: 'items',
        values: [
          {
            displayName: 'Offset',
            type: 'number',
            default: 0,
            description:
              'The order of the first message in the returned list. The most recent message has an order of 0',
            name: 'offset',
          },
          {
            displayName: 'Count',
            type: 'number',
            default: 0,
            description:
              'The number of messages to fetch. Note: each request is limited to fetching at most 10 messages',
            name: 'count',
          },
        ],
      },
    ],
    routing: {
      request: {
        qs: {
          data: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Default'],
        operation: ['Oa Listrecentchat'],
      },
    },
  },
]
