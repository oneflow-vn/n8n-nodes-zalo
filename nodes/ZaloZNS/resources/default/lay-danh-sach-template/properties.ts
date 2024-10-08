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
    displayName: 'GET /template/all',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['default'],
        operation: ['Lay danh sach template'],
      },
    },
  },
  {
    displayName: 'Offset',
    name: 'offset',
    required: true,
    description: 'Thứ tự của template đầu tiên trong danh sách trả về.',
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
        operation: ['Lay danh sach template'],
      },
    },
  },
  {
    displayName: 'Limit',
    name: 'limit',
    required: true,
    description: 'Số lượng template muốn lấy.',
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
        operation: ['Lay danh sach template'],
      },
    },
  },
  {
    displayName: 'Status',
    name: 'status',
    description:
      'Trạng thái của template muốn lấy.\nCác giá trị:\n- 1: Enable\n- 2: Pending review\n- 3: Reject\n- 4: Disable\n',
    default: 0,
    type: 'number',
    routing: {
      request: {
        qs: {
          status: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['default'],
        operation: ['Lay danh sach template'],
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
        operation: ['Lay danh sach template'],
      },
    },
  },
]
