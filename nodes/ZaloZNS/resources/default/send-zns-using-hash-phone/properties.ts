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
    displayName: 'POST /message/template/hashphone',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['default'],
        operation: ['Send ZNS using hash phone'],
      },
    },
  },
  {
    displayName: 'Access Token',
    name: 'access_token',
    required: true,
    description: 'Token for API access authorization.',
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
        operation: ['Send ZNS using hash phone'],
      },
    },
  },
  {
    displayName: 'Hash Phone',
    name: 'hash_phone',
    type: 'string',
    default: '',
    description: 'SHA 256 hashed recipient phone number',
    routing: {
      request: {
        body: {
          hash_phone: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['default'],
        operation: ['Send ZNS using hash phone'],
      },
    },
  },
  {
    displayName: 'Template Id',
    name: 'template_id',
    type: 'string',
    default: '',
    description: 'Template ID provided by Zalo',
    routing: {
      request: {
        body: {
          template_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['default'],
        operation: ['Send ZNS using hash phone'],
      },
    },
  },
  {
    displayName: 'Template Data',
    name: 'template_data',
    type: 'fixedCollection',
    default: {},
    description: 'Attributes of the registered template with Zalo',
    options: [
      {
        displayName: 'Items',
        name: 'items',
        values: [
          {
            displayName: 'Ky',
            type: 'string',
            default: '',
            description: '',
            name: 'ky',
          },
          {
            displayName: 'Thang',
            type: 'string',
            default: '',
            description: '',
            name: 'thang',
          },
          {
            displayName: 'Start Date',
            type: 'string',
            default: '',
            description: '',
            name: 'start_date',
          },
          {
            displayName: 'End Date',
            type: 'string',
            default: '',
            description: '',
            name: 'end_date',
          },
          {
            displayName: 'Customer',
            type: 'string',
            default: '',
            description: '',
            name: 'customer',
          },
          {
            displayName: 'Cid',
            type: 'string',
            default: '',
            description: '',
            name: 'cid',
          },
          {
            displayName: 'Address',
            type: 'string',
            default: '',
            description: '',
            name: 'address',
          },
          {
            displayName: 'Amount',
            type: 'string',
            default: '',
            description: '',
            name: 'amount',
          },
          {
            displayName: 'Total',
            type: 'string',
            default: '',
            description: '',
            name: 'total',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          template_data: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['default'],
        operation: ['Send ZNS using hash phone'],
      },
    },
  },
  {
    displayName: 'Tracking Id',
    name: 'tracking_id',
    type: 'string',
    default: '',
    description: 'User defined tracking ID for API calls',
    routing: {
      request: {
        body: {
          tracking_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['default'],
        operation: ['Send ZNS using hash phone'],
      },
    },
  },
]
