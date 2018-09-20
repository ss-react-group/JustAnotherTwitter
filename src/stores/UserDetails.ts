import { IAsset } from './../interfaces/asset';
import { action, computed } from 'mobx';
import { observable } from 'mobx';
import { IUser } from '../interfaces';
import { UserDetailsService } from '../services/user';
import { host } from '../env';

export class UserDetails {
  @observable
  user: IUser;
  @observable
  userPage: IUser;

  @computed
  get canUpload() {
    if (this.userPage && this.user) {
      return this.userPage.id === this.user.id ? true : false;
    }
    return false;
  }

  @computed
  get avatar() {
    if (this.userPage) {
      const assetsArray: IAsset[] = this.userPage.assets;
      if (assetsArray.length > 0) {
        const avatarImage = assetsArray.filter(
          asset => asset.assets_type.type === 'avatar'
        );

        return Object.assign({}, avatarImage[0], {
          filePath: `${host}${avatarImage[0].filePath}`
        });
      }
    }

    return {
      filePath: `${host}assets/static/avatar.jpg`
    };
  }

  get background() {
    if (this.userPage) {
      const assetsArray: IAsset[] = this.userPage.assets;
      if (assetsArray.length > 0) {
        const avatarImage = assetsArray.filter(
          asset => asset.assets_type.type === 'background'
        );

        return Object.assign({}, avatarImage[0], {
          filePath: `${host}${avatarImage[0].filePath}`
        });
      }
    }

    return {
      filePath: `${host}assets/static/background.jpg`
    };
  }

  @action
  get(userId: number | string) {
    if (userId === 'me') {
      this.userPage = this.user;
    } else {
      new UserDetailsService()
        .getUserDetails(String(userId))
        .then((response: any) => {
          this.userPage = { ...response };
        });
    }
  }
}

export const userDetails = new UserDetails();
