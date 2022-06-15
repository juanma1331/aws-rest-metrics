import { APIGatewayProxyEventV2, APIGatewayProxyHandlerV2 } from "aws-lambda";
import notes from "../notes";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  const note = notes.find((n) => n.noteId === event.pathParameters?.id);

  return note
    ? {
        statusCode: 200,
        body: JSON.stringify(note),
      }
    : {
        statusCode: 404,
        body: JSON.stringify({ error: true }),
      };
};
