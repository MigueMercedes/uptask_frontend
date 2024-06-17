import { isAxiosError } from 'axios';

export const errorCatcher = (error: unknown) => {
  console.error(error);
  if (isAxiosError(error) && error.response) {
    throw new Error(error.response.data.message);
  } else {
    throw error;
  }
};
