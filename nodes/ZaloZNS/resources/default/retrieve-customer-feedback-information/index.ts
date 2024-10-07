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

export const name = 'Retrieve customer feedback information'

const rawOption: INodePropertyOptions = {
  name: 'Retrieve customer feedback information',
  value: 'Retrieve customer feedback information',
  action: 'Retrieve Customer Feedback Information Default',
  description: 'Retrieve customer feedback information',
  routing: {
    request: {
      method: 'POST',
      url: '=/rating/get',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
