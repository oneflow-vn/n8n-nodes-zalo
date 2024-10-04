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
    displayName: 'POST /oa/group/creategroupwithoa',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Default'],
        operation: ['Tao Nhom Moi'],
      },
    },
  },
  {
    displayName: 'Group Name',
    name: 'group_name',
    type: 'string',
    default: '',
    description: 'Tên nhóm',
    routing: {
      request: {
        body: {
          group_name: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Default'],
        operation: ['Tao Nhom Moi'],
      },
    },
  },
  {
    displayName: 'Group Description',
    name: 'group_description',
    type: 'string',
    default: '',
    description: 'Mô tả nhóm',
    routing: {
      request: {
        body: {
          group_description: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Default'],
        operation: ['Tao Nhom Moi'],
      },
    },
  },
  {
    displayName: 'Asset Id',
    name: 'asset_id',
    type: 'string',
    default: '',
    description: 'ID gói GMF, sử dụng để làm dịch vụ hoạt động của Nhóm',
    routing: {
      request: {
        body: {
          asset_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Default'],
        operation: ['Tao Nhom Moi'],
      },
    },
  },
  {
    displayName: 'Member User Ids',
    name: 'member_user_ids',
    type: 'fixedCollection',
    default: [],
    typeOptions: {
      multipleValues: true,
    },
    description: 'Danh sách các user trong nhóm',
    placeholder: 'Add item',
    options: [
      {
        displayName: 'Items',
        name: 'items',
        values: [
          {
            displayName: 'Item',
            name: 'Item',
            type: 'string',
            default: '',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          member_user_ids: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Default'],
        operation: ['Tao Nhom Moi'],
      },
    },
  },
]
