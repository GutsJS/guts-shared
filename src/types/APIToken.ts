export type APIToken = {
  name: string;
  token: string;
};

export type TransformedAPIToken = APIToken & {
  id: string;
};
