import {Entity, hasMany, model, property} from '@loopback/repository';
import {Comment} from './comment.model';

@model({
  settings: {
    mysql: {schema: 'post', table: 'post'}
  }
})
export class Post extends Entity {
  @property({
    mysql: {
      id: "id"
    },
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    mysql: {
      text: "text"
    },
    type: 'string',
    required: true,
  })
  text: string;

  @property({
    mysql: {
      date: "date"
    },
    type: 'date',
    default: new Date,
  })
  created_at?: string;

  @hasMany(() => Comment)
  comments: Comment[];

  constructor(data?: Partial<Post>) {
    super(data);
  }
}

export interface PostRelations {
  // describe navigational properties here
}

export type PostWithRelations = Post & PostRelations;
