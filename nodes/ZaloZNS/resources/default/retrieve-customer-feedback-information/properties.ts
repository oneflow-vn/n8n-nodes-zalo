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
    displayName: 'POST /rating/get',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['default'],
        operation: ['Retrieve customer feedback information'],
      },
    },
  },
  {
    displayName: 'Template Id',
    name: 'template_id',
    required: true,
    description: undefined,
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          template_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['default'],
        operation: ['Retrieve customer feedback information'],
      },
    },
  },
  {
    displayName: 'From Time',
    name: 'from_time',
    required: true,
    description: undefined,
    default: 0,
    type: 'number',
    routing: {
      request: {
        qs: {
          from_time: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['default'],
        operation: ['Retrieve customer feedback information'],
      },
    },
  },
  {
    displayName: 'To Time',
    name: 'to_time',
    required: true,
    description: undefined,
    default: 0,
    type: 'number',
    routing: {
      request: {
        qs: {
          to_time: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['default'],
        operation: ['Retrieve customer feedback information'],
      },
    },
  },
  {
    displayName: 'Offset',
    name: 'offset',
    required: true,
    description: undefined,
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
        resource: ['default'],
        operation: ['Retrieve customer feedback information'],
      },
    },
  },
  {
    displayName: 'Limit',
    name: 'limit',
    required: true,
    description: undefined,
    default: 0,
    type: 'number',
    routing: {
      request: {
        qs: {
          limit: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['default'],
        operation: ['Retrieve customer feedback information'],
      },
    },
  },
  {
    displayName: 'Access Token',
    name: 'access_token',
    required: true,
    description: undefined,
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
        operation: ['Retrieve customer feedback information'],
      },
    },
  },
]
