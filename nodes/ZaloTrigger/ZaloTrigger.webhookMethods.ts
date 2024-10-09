import { IHookFunctions } from 'n8n-workflow'

export const webhookMethods = {
  default: {
    async checkExists (this: IHookFunctions): Promise<boolean> {
      return true
    },
    async create (this: IHookFunctions): Promise<boolean> {
      return true
    },
    async delete (this: IHookFunctions): Promise<boolean> {
      return true
    },
  },
}
