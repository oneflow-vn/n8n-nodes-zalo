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

export const name = 'get all groups by user'

const rawOption: INodePropertyOptions = {
  name: 'get all groups by user',
  value: 'get all groups by user',
  action: 'Get All Groups By User Groups',
  description: 'get all groups by user',
  routing: {
    request: {
      method: 'GET',
      url: '=/api/v1/groups',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
