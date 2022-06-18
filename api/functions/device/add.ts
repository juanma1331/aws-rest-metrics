// THIRD PARTY
import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import AddDeviceRequestDTO from "src/domain/dto/AddDeviceRequestDTO";
// LOCAL
import DeviceServiceFactory from "src/domain/factory/DeviceServiceFactory";
import validator from "src/domain/validator";

// UTILS
const deviceHasAllFields = (body: any): boolean => {
  if (body.name) {
    return true;
  }

  return false;
};

// HANDLER
export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({ type: "BAD_REQUEST" }),
    };
  }
  const body = JSON.parse(event.body);

  if (!deviceHasAllFields(body)) {
    return {
      statusCode: 200,
      body: JSON.stringify({ type: "FIELDS_MISSING" }),
    };
  }

  const { valid, fieldsErrors } = validator.validateDevice(body);
  if (!valid) {
    return {
      statusCode: 200,
      body: JSON.stringify(fieldsErrors),
    };
  }

  try {
    const deviceService = DeviceServiceFactory.create();
    const dto = new AddDeviceRequestDTO(body);
    const device = await deviceService.add(dto);

    return {
      statusCode: 200,
      body: JSON.stringify(device),
    };
  } catch (_error) {
    return {
      statusCode: 404,
      body: JSON.stringify({ type: _error }),
    };
  }
};
