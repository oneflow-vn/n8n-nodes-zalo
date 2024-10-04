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
    displayName: 'GET /api/v1/expenses/groups/2',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Expense'],
        operation: ['Get All Expenses By Group Id'],
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
        operation: ['Get All Expenses By Group Id'],
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
        operation: ['Get All Expenses By Group Id'],
      },
    },
  },
]
