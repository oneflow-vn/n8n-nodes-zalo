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

export const name = 'Uploads A Gif Image'

const rawOption: INodePropertyOptions = {
  name: 'Uploads A Gif Image',
  value: 'Uploads A Gif Image',
  action: 'Uploads A Gif Image Default',
  description: 'Make a POST request to this API to upload a GIF image',
  routing: {
    request: {
      method: 'POST',
      url: '=/oa/upload/gif',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
