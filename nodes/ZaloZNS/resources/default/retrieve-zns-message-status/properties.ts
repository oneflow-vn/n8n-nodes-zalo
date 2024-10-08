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
    displayName: 'GET /message/status',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['default'],
        operation: ['Retrieve ZNS message status'],
      },
    },
  },
  {
    displayName: 'Access Token',
    name: 'access_token',
    required: true,
    description: 'Access token for API authentication.',
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
        operation: ['Retrieve ZNS message status'],
      },
    },
  },
  {
    displayName: 'Message Id',
    name: 'message_id',
    required: true,
    description: 'ID of the message to retrieve status information.',
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          message_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['default'],
        operation: ['Retrieve ZNS message status'],
      },
    },
  },
  {
    displayName: 'Phone',
    name: 'phone',
    description: undefined,
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          phone: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['default'],
        operation: ['Retrieve ZNS message status'],
      },
    },
  },
]
