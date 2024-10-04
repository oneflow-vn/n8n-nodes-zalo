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

export const name = 'Get A List Of Recent Group Messages'

const rawOption: INodePropertyOptions = {
  name: 'Get A List Of Recent Group Messages',
  value: 'Get A List Of Recent Group Messages',
  action: 'Get A List Of Recent Group Messages Default',
  description:
    'This endpoint requires that the application is granted the permission to manage group information.',
  routing: {
    request: {
      method: 'GET',
      url: '=/v3.0/oa/group/listrecentchat',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
