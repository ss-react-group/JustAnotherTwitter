export interface IAsset {
  id: number;
  filePath: string;
  createdAt: any;
  updatedAt: any;
  user_id: number;
  type_id: number;
  assets_type: {
    id: number;
    type: string;
    createdAt: any;
    updatedAt: any;
  };
}
