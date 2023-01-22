export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAdress;
  phone: string;
}

interface IAdress {
  street: string;
  suite: string;
  city: string;
}

export interface IPost {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface IAlbum {
  id: number;
  url: string;
}
