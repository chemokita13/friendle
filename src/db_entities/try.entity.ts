// tries/entities/try.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Word } from './word.entity';
import { Letter } from './letter.entity';

@Entity()
export class Try {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  completed: boolean;

  @OneToMany(() => Word, (word) => word.try)
  words: Word[];

  @OneToMany(() => Letter, (letter) => letter.try)
  letters: Letter[];
}
