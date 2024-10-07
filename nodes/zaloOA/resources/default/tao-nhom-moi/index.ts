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

export const name = 'Tao nhom moi'

const rawOption: INodePropertyOptions = {
  name: 'Tao nhom moi',
  value: 'Tao nhom moi',
  action: 'Tao Nhom Moi Default',
  description: 'T o nh m m i',
  routing: {
    request: {
      method: 'POST',
      url: '=/v3.0/oa/group/creategroupwithoa',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
