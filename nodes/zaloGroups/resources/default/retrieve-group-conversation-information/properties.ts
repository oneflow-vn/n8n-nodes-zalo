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
    displayName: 'GET /v3.0/oa/group/conversation',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Default'],
        operation: ['Retrieve Group Conversation Information'],
      },
    },
  },
  {
    displayName: 'Group Id',
    name: 'group_id',
    required: true,
    description: 'The ID of the group to query.',
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          group_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Default'],
        operation: ['Retrieve Group Conversation Information'],
      },
    },
  },
  {
    displayName: 'Offset',
    name: 'offset',
    description: 'The offset to query. Default: 0',
    default: 0,
    type: 'number',
    routing: {
      request: {
        qs: {
          offset: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Default'],
        operation: ['Retrieve Group Conversation Information'],
      },
    },
  },
  {
    displayName: 'Count',
    name: 'count',
    description: 'The number of results to query. Default: 5',
    default: 0,
    type: 'number',
    routing: {
      request: {
        qs: {
          count: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Default'],
        operation: ['Retrieve Group Conversation Information'],
      },
    },
  },
]
