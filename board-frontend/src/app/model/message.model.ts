export class Message {
  constructor(
    public id: string,
    public message: string,
    public author: string,
    public image: string,
  ) {}
}

export interface MessageData {
  [key: string]: any;
  message: string;
  author: string | null;
  image: File | null;
}
