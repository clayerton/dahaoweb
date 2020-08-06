import stringify from '@/utils/stringify';
import request from '@/utils/myRequest';

export async function overview(params: object): Promise<any>  {
  return request(`/iot/api/v1/home?${stringify(params)}`);
}

