import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsDate, IsString } from 'class-validator';

export class AddLikeDto {
  @ApiProperty({
    description: 'Id сущности кота',
    type: String,
  })
  @IsString()
  @Expose()
  cat_id: string;

  @ApiProperty({
    description: 'Дата добавления',
    type: Date,
    required: false,
  })
  @IsDate()
  created_at: Date;
}
