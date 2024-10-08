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
    displayName: 'GET /v3.0/oa/group/listpendinginvite',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['default'],
        operation: ['Lay danh sach thanh vien cho duyet'],
      },
    },
  },
  {
    displayName: 'Access Token',
    name: 'access_token',
    required: true,
    description: 'Token cho phép ứng dụng đại diện OA gọi API.',
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
        operation: ['Lay danh sach thanh vien cho duyet'],
      },
    },
  },
  {
    displayName: 'Group Id',
    name: 'group_id',
    required: true,
    description: 'ID của nhóm',
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
        resource: ['default'],
        operation: ['Lay danh sach thanh vien cho duyet'],
      },
    },
  },
  {
    displayName: 'Offset',
    name: 'offset',
    description: 'Offset muốn query.Mặc định: 0',
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
        operation: ['Lay danh sach thanh vien cho duyet'],
      },
    },
  },
  {
    displayName: 'Count',
    name: 'count',
    description: 'Số lượng mong muốn query.Mặc định: 5',
    default: 5,
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
        resource: ['default'],
        operation: ['Lay danh sach thanh vien cho duyet'],
      },
    },
  },
]
