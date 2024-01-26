// letters/entities/letter.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Try } from './try.entity';

@Entity()
export class Letter {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Try, { eager: true })
  @JoinColumn({ name: 'try_id' })
  try: Try;

  @Column()
  letter: string;

  @Column({ default: false })
  known: boolean;
}
