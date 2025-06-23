import { Injectable } from '@nestjs/common';
import { AddLikeDto } from './dto/add-like.dto';
import { LikesRepository } from './likes.repository';
import { LikesEntity } from './entities/likes.entity';
import { DeleteResult } from 'typeorm';

@Injectable()
export class LikesService {
  constructor(private readonly likesRepository: LikesRepository) {}

  getLikesList(): Promise<LikesEntity[]> {
    return this.likesRepository.getLikesList();
  }

  addLike(addLikeDto: AddLikeDto): Promise<LikesEntity> {
    return this.likesRepository.addLike(addLikeDto);
  }

  deleteLikeById(id: string): Promise<DeleteResult> {
    return this.likesRepository.deleteLikeById(id);
  }
}
