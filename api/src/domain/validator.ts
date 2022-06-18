import isLength from "validator/es/lib/isLength";

interface FieldValidationError {
  msg: string;
  field: string;
}
interface ValidationResult {
  fieldsErrors: FieldValidationError[];
  valid: boolean;
}

type ValidatorFunction = (s: string) => FieldValidationError[];
type ValidateDeviceParams = {
  pk: string;
  sk: string;
  name: string;
};

const validateDeviceName: ValidatorFunction = (name) => {
  let fieldErrors: FieldValidationError[] = [];

  if (!isLength(name, { min: 1, max: 120 })) {
    fieldErrors.push({
      field: "Name",
      msg: "The name field should be between 1 and 120 characters",
    });
  }

  return fieldErrors;
};

const validateDevice = (params: ValidateDeviceParams): ValidationResult => {
  const nameErrors = validateDeviceName(params.name);

  let errors = [...nameErrors];
  return {
    valid: errors.length === 0,
    fieldsErrors: errors,
  };
};

export default {
  validateDevice,
};
