import { dynamoDBResources } from "./dynamoDb";
import { eventBusResources } from "./eventBus";
import { s3Resources } from "./s3";

export const resources = {
  Resources: {
    ...s3Resources,
    ...dynamoDBResources,
    ...eventBusResources,
  },
};
