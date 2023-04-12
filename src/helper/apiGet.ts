import { pokeApi } from '../api/pokeApi';

enum method {
  get,
  post,
  delete,
  patch,
}

interface ControlAxiosProps {
  url: string;
  method?: MethodType;
}

type MethodType = keyof typeof method;

export const controlAxios = async <T>({
  url,
  method = 'get',
}: ControlAxiosProps): Promise<T> => {
  const { data } = await pokeApi[method]<T>(url);
  return data;
};
