import {Controller as NestController} from '@nestjs/common'

const prefix = 'admin';

export function Controller(path: string) {
    return NestController(`${prefix}/${path}`);
}
