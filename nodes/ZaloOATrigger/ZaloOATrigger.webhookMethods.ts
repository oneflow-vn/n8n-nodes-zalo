import { IDataObject, NodeApiError, JsonObject } from 'n8n-workflow'
import { IHookFunctions } from 'n8n-workflow'
import { NodeOperationError } from 'n8n-workflow/dist/errors/index.js'

export const webhookMethods = {
  default: {
    async checkExists (this: IHookFunctions): Promise<boolean> {
      throw new NodeOperationError(this.getNode(), 'Not implemented yet!')
    },
    async create (this: IHookFunctions): Promise<boolean> {
      throw new NodeOperationError(this.getNode(), 'Not implemented yet!')
    },
    async delete (this: IHookFunctions): Promise<boolean> {
      throw new NodeOperationError(this.getNode(), 'Not implemented yet!')
    },
  },
}
