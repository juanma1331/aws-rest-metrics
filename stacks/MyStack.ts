import { StackContext, Api, Table } from "@serverless-stack/resources";

export function MyStack({ stack }: StackContext) {
  const table = new Table(stack, "ApiMetricReports", {
    fields: {
      pk: "string",
      sk: "string",
    },
    primaryIndex: { partitionKey: "pk", sortKey: "sk" },
  });

  const api = new Api(stack, "api", {
    defaults: {
      function: {
        permissions: [table],
        environment: {
          Table: table.tableName,
        },
      },
    },
    routes: {
      "POST /devices": "functions/device/add.handler",
      "GET /devices/{id}": "functions/device/find.handler",
      "DELETE /devices/{id}": "functions/device/remove.handler",
      "POST /reports": "functions/report/add.handler",
      "GET /reports": "functions/report/findAll.handler",
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
