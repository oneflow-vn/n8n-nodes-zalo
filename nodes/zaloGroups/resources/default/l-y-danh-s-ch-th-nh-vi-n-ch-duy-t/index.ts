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

export const name = 'L Y Danh S Ch Th Nh Vi N Ch Duy T'

const rawOption: INodePropertyOptions = {
  name: 'L Y Danh S Ch Th Nh Vi N Ch Duy T',
  value: 'L Y Danh S Ch Th Nh Vi N Ch Duy T',
  action: 'L Y Danh S Ch Th Nh Vi N Ch Duy T Default',
  description: 'Ứng dụng cần được cấp quyền quản lý thông tin nhóm',
  routing: {
    request: {
      method: 'GET',
      url: '=/oa/group/listpendinginvite',
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
