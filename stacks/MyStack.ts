import { StackContext, Api } from "@serverless-stack/resources";

export function MyStack({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    routes: {
      "GET /notes": "functions/list.handler",
      "GET /notes/{id}": "functions/get.handler",
      "PUT /notes/{id}": "functions/update.handler",
    },
  });
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
