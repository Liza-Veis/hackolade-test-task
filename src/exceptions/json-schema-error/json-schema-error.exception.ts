import { ExceptionName } from '~/common/enums/enums';

const DEFAULT_ERROR_MESSAGE = 'Failed to generate JSON Schema';

type Constructor = {
  message?: string;
};

class JSONSchemaError extends Error {
  public constructor({ message = DEFAULT_ERROR_MESSAGE }: Constructor = {}) {
    super(message);

    this.message = message;
    this.name = ExceptionName.JSON_SCHEMA_ERROR;
  }
}

export { JSONSchemaError };
