export const parse = <T extends {}>(str?: string): T => {
  if (!str) return {} as T;

  try {
    return JSON.parse(str) as T;
  } catch (e) {
    return {} as T;
  }
};

export const stringify = <T extends {}>(content?: T): string => {
  if (!content) return '';

  try {
    return JSON.stringify(content);
  } catch (e) {
    return '';
  }
};

export const fetchSchema = async (link: string): Promise<any> => {
  const requestOptions = {
    method: 'GET',
  };

  return fetch(link, requestOptions).then(handleResponse);
};

function handleResponse(response: any) {
  return response.text().then((data: string) => data);
}
