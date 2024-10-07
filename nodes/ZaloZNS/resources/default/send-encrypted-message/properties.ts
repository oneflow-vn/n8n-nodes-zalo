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
    displayName: 'POST /rsa/message/template',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['default'],
        operation: ['Send Encrypted Message'],
      },
    },
  },
  {
    displayName: 'Rsa Phone',
    name: 'rsa_phone',
    type: 'string',
    default: '',
    description: 'Recipient s encrypted phone number using the public key',
    routing: {
      request: {
        body: {
          rsa_phone: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['default'],
        operation: ['Send Encrypted Message'],
      },
    },
  },
  {
    displayName: 'Template Id',
    name: 'template_id',
    type: 'string',
    default: '',
    description: 'ID of the message template to use',
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
        operation: ['Send Encrypted Message'],
      },
    },
  },
  {
    displayName: 'Template Data',
    name: 'template_data',
    type: 'json',
    default: '{}',
    description: 'Encrypted template data using the public key',
    routing: {
      request: {
        body: {
          template_data: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['default'],
        operation: ['Send Encrypted Message'],
      },
    },
  },
  {
    displayName: 'Tracking Id',
    name: 'tracking_id',
    type: 'string',
    default: '',
    description: 'Unique tracking ID from the partner',
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
        operation: ['Send Encrypted Message'],
      },
    },
  },
]
