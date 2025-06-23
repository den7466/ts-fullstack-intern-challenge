import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { LikesService } from './likes.service';
import { AddLikeDto } from './dto/add-like.dto';
import { LikesEntity } from './entities/likes.entity';
import { DeleteResult } from 'typeorm';

@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Get()
  getLikesList(): Promise<LikesEntity[]> {
    return this.likesService.getLikesList();
  }

  @Post()
  addLike(@Body() addLikeDto: AddLikeDto): Promise<LikesEntity> {
    return this.likesService.addLike(addLikeDto);
  }

  @Delete(':id')
  deleteLikeById(@Param('id') id: string): Promise<DeleteResult> {
    return this.likesService.deleteLikeById(id);
  }
}
