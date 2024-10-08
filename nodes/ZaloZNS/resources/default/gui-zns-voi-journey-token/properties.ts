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
    displayName: 'POST /message/template',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['default'],
        operation: ['Gui ZNS voi Journey Token'],
      },
    },
  },
  {
    displayName: 'Access Token',
    name: 'access_token',
    required: true,
    description: 'Đoạn mã cần truyền vào để xác minh quyền sử dụng API.',
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
        operation: ['Gui ZNS voi Journey Token'],
      },
    },
  },
  {
    displayName: 'Journey Token',
    name: 'journey_token',
    required: true,
    description: 'Đoạn mã xác minh mẫu tin thuộc hành trình vừa kích hoạt',
    default: '',
    type: 'string',
    routing: {
      request: {
        headers: {
          journey_token: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['default'],
        operation: ['Gui ZNS voi Journey Token'],
      },
    },
  },
  {
    displayName: 'Phone',
    required: true,
    name: 'phone',
    type: 'string',
    default: '84987654321',
    description: 'S T c a ng i nh n m u tin',
    routing: {
      request: {
        body: {
          phone: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['default'],
        operation: ['Gui ZNS voi Journey Token'],
      },
    },
  },
  {
    displayName: 'Template Id',
    required: true,
    name: 'template_id',
    type: 'string',
    default: '7895417a7d3f9461cd2e',
    description: 'ID c a template mu n s d ng',
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
        operation: ['Gui ZNS voi Journey Token'],
      },
    },
  },
  {
    displayName: 'Template Data',
    required: true,
    name: 'template_data',
    type: 'fixedCollection',
    default: {},
    description: 'C c thu c t nh c a template',
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
            default: '4/2020',
            description: '',
            name: 'thang',
          },
          {
            displayName: 'Start Date',
            type: 'string',
            default: '20/03/2020',
            description: '',
            name: 'start_date',
          },
          {
            displayName: 'End Date',
            type: 'string',
            default: '20/04/2020',
            description: '',
            name: 'end_date',
          },
          {
            displayName: 'Customer',
            type: 'string',
            default: 'Nguyễn Thị Hoàng Anh',
            description: '',
            name: 'customer',
          },
          {
            displayName: 'Cid',
            type: 'string',
            default: 'PE010299485',
            description: '',
            name: 'cid',
          },
          {
            displayName: 'Address',
            type: 'string',
            default: 'VNG Campus, TP.HCM',
            description: '',
            name: 'address',
          },
          {
            displayName: 'Amount',
            type: 'string',
            default: '100',
            description: '',
            name: 'amount',
          },
          {
            displayName: 'Total',
            type: 'string',
            default: '100000',
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
        operation: ['Gui ZNS voi Journey Token'],
      },
    },
  },
  {
    displayName: 'Tracking Id',
    required: true,
    name: 'tracking_id',
    type: 'string',
    default: 'tracking_id',
    description: 'Custom tracking ID defined by the partner',
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
        operation: ['Gui ZNS voi Journey Token'],
      },
    },
  },
  {
    displayName: 'Mode',
    name: 'mode',
    type: 'string',
    default: 'development',
    description: '',
    routing: {
      request: {
        body: {
          mode: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['default'],
        operation: ['Gui ZNS voi Journey Token'],
      },
    },
  },
]
