import schema from "./schema";
import { handlerPath } from "@libs/handlerResolver";
import type { LambdaFunction } from "@libs/types/config";
import { getAttribute } from "@libs/getAttribute";
import { EventBus } from "@resources/eventBus/eventBus";

export const uploadCsvToDynamo: LambdaFunction = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "post",
        path: "hello",
        request: {
          schemas: {
            "application/json": schema,
          },
        },
      },
    },
    {
      eventBridge: {
        eventBus: getAttribute({ EventBus }, "Arn"),
        schedule: "rate(10 minutes)",
      },
    },
  ],
};
