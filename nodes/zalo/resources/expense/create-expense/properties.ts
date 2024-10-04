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
    displayName: 'POST /api/v1/expenses/groups/2',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Expense'],
        operation: ['Create Expense'],
      },
    },
  },
  {
    displayName: 'Accept',
    name: 'accept',
    description: undefined,
    default: '*/*',
    type: 'string',
    routing: {
      request: {
        headers: {
          accept: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Expense'],
        operation: ['Create Expense'],
      },
    },
  },
  {
    displayName: 'Authorization',
    name: 'Authorization',
    description: undefined,
    default: '111',
    type: 'number',
    routing: {
      request: {
        headers: {
          Authorization: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Expense'],
        operation: ['Create Expense'],
      },
    },
  },
  {
    displayName: 'Content Type',
    name: 'Content-Type',
    description: undefined,
    default: 'application/json',
    type: 'string',
    routing: {
      request: {
        headers: {
          'Content-Type': '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Expense'],
        operation: ['Create Expense'],
      },
    },
  },
  {
    displayName: 'Amount',
    name: 'amount',
    type: 'number',
    default: 0,
    description: undefined,
    routing: {
      request: {
        body: {
          amount: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Expense'],
        operation: ['Create Expense'],
      },
    },
  },
  {
    displayName: 'User Id',
    name: 'userId',
    type: 'number',
    default: 0,
    description: undefined,
    routing: {
      request: {
        body: {
          userId: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Expense'],
        operation: ['Create Expense'],
      },
    },
  },
  {
    displayName: 'Participants',
    name: 'participants',
    type: 'json',
    default: '[\n  null\n]',
    description: undefined,
    routing: {
      request: {
        body: {
          participants: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Expense'],
        operation: ['Create Expense'],
      },
    },
  },
  {
    displayName: 'Category',
    name: 'category',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          category: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Expense'],
        operation: ['Create Expense'],
      },
    },
  },
  {
    displayName: 'Title',
    name: 'title',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          title: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Expense'],
        operation: ['Create Expense'],
      },
    },
  },
  {
    displayName: 'Date',
    name: 'date',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          date: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Expense'],
        operation: ['Create Expense'],
      },
    },
  },
]
