import request from '@/utils/myRequest';
const core = 'http://core.alpha.dahaoyun.net';

export interface LoginParamsType {
  user: string;
  password: string;
  mobile: string;
  captcha: string;
}

export async function fakeAccountLogin(params: LoginParamsType) {
  return request('/core/api/v1/user/login', {
    method: 'POST',
    data: params,
  });
}