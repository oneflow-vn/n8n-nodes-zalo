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

import * as createExpense from './create-expense'
import * as getAllExpensesByGroupId from './get-all-expenses-by-group-id'
import * as updateExpense from './update-expense'
import * as updateExpenseCopy from './update-expense-copy'

const operations: INodePropertyOptions[] = [
  createExpense.option,
  getAllExpensesByGroupId.option,
  updateExpense.option,
  updateExpenseCopy.option,
]

export const name = 'Expense'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Expense'],
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
  ...createExpense.properties,
  ...getAllExpensesByGroupId.properties,
  ...updateExpense.properties,
  ...updateExpenseCopy.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
