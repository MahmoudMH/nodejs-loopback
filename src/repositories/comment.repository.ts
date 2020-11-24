import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Comment, CommentRelations, Post} from '../models';
import {CommentDsDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {PostRepository} from './post.repository';

export class CommentRepository extends DefaultCrudRepository<
  Comment,
  typeof Comment.prototype.id,
  CommentRelations
> {

  public readonly post: BelongsToAccessor<Post, typeof Comment.prototype.id>;

  constructor(
    @inject('datasources.commentDS') dataSource: CommentDsDataSource, @repository.getter('PostRepository') protected postRepositoryGetter: Getter<PostRepository>,
  ) {
    super(Comment, dataSource);
    this.post = this.createBelongsToAccessorFor('post', postRepositoryGetter,);
    this.registerInclusionResolver('post', this.post.inclusionResolver);
  }
}
