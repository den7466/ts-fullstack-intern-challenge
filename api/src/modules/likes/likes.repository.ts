import { InjectRepository } from '@nestjs/typeorm';
import { LikesEntity } from './entities/likes.entity';
import { DeepPartial, DeleteResult, Repository } from 'typeorm';

export class LikesRepository {
  constructor(
    @InjectRepository(LikesEntity)
    private readonly likesRepository: Repository<LikesEntity>,
  ) {}

  async getLikesList(): Promise<LikesEntity[]> {
    return this.likesRepository.find({});
  }

  async addLike<T extends DeepPartial<LikesEntity>>(
    entity: T,
  ): Promise<LikesEntity> {
    const result = await this.likesRepository.findOne({
      where: { cat_id: entity.cat_id },
    });
    if (!result) return this.likesRepository.save(entity);
  }

  async deleteLikeById(id: string): Promise<DeleteResult> {
    return this.likesRepository.delete({ cat_id: id });
  }
}
