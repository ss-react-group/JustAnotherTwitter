import {Md5} from 'ts-md5/dist/md5';

export function encrypt(textToEncrypt:string) {
  return Md5.hashStr(textToEncrypt);
}
