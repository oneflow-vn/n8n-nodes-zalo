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

import { INodePropertyOptions } from 'n8n-workflow'

// @ts-ignore
import * as helpers from '../../../helpers'

import { properties as rawProperties } from './properties'
import { runHooks } from './hooks'

export const name = 'Lay Danh Sach Thanh Vien Cho Duyet'

const rawOption: INodePropertyOptions = {
  name: 'Lay Danh Sach Thanh Vien Cho Duyet',
  value: 'Lay Danh Sach Thanh Vien Cho Duyet',
  action: 'Lay Danh Sach Thanh Vien Cho Duyet Default',
  description: 'Ứng dụng cần được cấp quyền quản lý thông tin nhóm',
  routing: {
    request: {
      method: 'GET',
      url: '=/v3.0/oa/group/listpendinginvite',
    },
    output: {
      postReceive: [
        {
          type: 'setKeyValue',
          properties: {
            data: '={{$response.body}}',
          },
        },
      ],
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
