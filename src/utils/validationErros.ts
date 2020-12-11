import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationErros: Errors = {};

  err.inner.forEach(error => {
    const key = error.path as string;

    validationErros[key] = error.message;
  });

  return validationErros;
}
