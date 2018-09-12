import { observable } from 'mobx';

export class Image {
  @observable
  background: string = '/background.jpg';

  @observable
  avatar: string = 'https://api.adorable.io/avatars/285/abott@adorable.png';
}

export const image = new Image();
