import axios, { AxiosRequestConfig } from 'axios';

const POST = 'POST';

const config = {
  recipeUrl: 'https://api.buildable.dev/trigger',
  recipeEnv: process.env.NODE_ENV === 'development' ? 'test' : 'live',
  version: 'v2',
};

const { recipeUrl, recipeEnv, version } = config;

type Request = {
  url: string;
  headers?: any;
  payload: any;
  options?: Omit<AxiosRequestConfig, 'payload' | 'url' | 'headers'>;
};

type RecipeRequest = {
  triggerId: string;
  payload?: any;
  options?: Omit<AxiosRequestConfig, 'payload'>;
};

const api = async ({ url, headers = {}, payload, ...options }: Request) => {
  const { data } = await axios({
    method: POST,
    url,
    headers,
    data: payload,
    ...options,
  });

  return data;
};

const dispatchRecipe = ({
  triggerId,
  payload = {},
  options = {},
}: RecipeRequest) =>
  api({
    url: `${recipeUrl}/${version}/${recipeEnv}-${triggerId}`,
    payload,
    ...options,
  });

export default dispatchRecipe;
