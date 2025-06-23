import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'likes',
})
export class LikesEntity {
  @PrimaryGeneratedColumn('uuid', {
    comment: 'Идентификатор лайка',
    name: 'like_id',
  })
  readonly like_id: string;

  @Column('varchar', {
    comment: 'Идентификатор котика из https://thecatapi.com',
    nullable: false,
  })
  cat_id: string;

  @Column('date', {
    comment: 'Время создания лайка',
    nullable: true,
  })
  created_at?: Date;
}
