import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Post, PostWithRelations} from './post.model';

@model({
  settings: {
    mysql: {schema: 'comment', table: 'comment'}
  }
})
export class Comment extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @belongsTo(() => Post, {keyTo: 'id'})
  postId: number;

  @property({
    type: 'string',
    required: true,
  })
  comment: string;

  constructor(data?: Partial<Comment>) {
    super(data);
  }
}

export interface CommentRelations {
  posts?: PostWithRelations;

}

export type CommentWithRelations = Comment & CommentRelations;
