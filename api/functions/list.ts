import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import notes from "../notes";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify(notes),
  };
};
