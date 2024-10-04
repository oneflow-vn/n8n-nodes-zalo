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

import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import { runHooks } from './hooks'

import * as getAllGroupsByUser from './get-all-groups-by-user'
import * as createGroup from './create-group'
import * as addMembersToGroup from './add-members-to-group'
import * as reportDetail from './report-detail'

const operations: INodePropertyOptions[] = [
  getAllGroupsByUser.option,
  createGroup.option,
  addMembersToGroup.option,
  reportDetail.option,
]

export const name = 'Groups'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Groups'],
    },
  },
  default: '',
}

// overwrite the options of the operationSelect
operationSelect.options = operations

// set the default operation
operationSelect.default = operations.length > 0 ? operations[0].value : ''

export const rawProperties: INodeProperties[] = [
  operationSelect,
  ...getAllGroupsByUser.properties,
  ...createGroup.properties,
  ...addMembersToGroup.properties,
  ...reportDetail.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
