import stringify from '@/utils/stringify';
import request from '@/utils/myRequest';

export async function unit(params: object): Promise<any>  {
  return request(`/iot/api/v1/unit?${stringify(params)}`);
}

