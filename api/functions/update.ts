import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import notes from "../notes";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  const note = notes.find((n) => n.noteId === event.pathParameters?.id);

  if (!note) {
    return {
      statusCode: 404,
      body: JSON.stringify({ error: true }),
    };
  }

  if (event.body) {
    const { content } = JSON.parse(event.body);

    note.content = content;

    return {
      statusCode: 200,
      body: JSON.stringify(note),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ error: true }),
  };
};
