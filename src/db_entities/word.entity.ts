// words/entities/word.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Group } from './group.entity';
import { Try } from './try.entity';

@Entity()
export class Word {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Group, { eager: true })
  @JoinColumn({ name: 'group_id' })
  group: Group;

  @Column()
  word_posted: string;

  @Column()
  word_given: string;

  @ManyToOne(() => Try, { eager: true })
  @JoinColumn({ name: 'try_id' })
  try: Try;
}
