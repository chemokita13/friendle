// groups/entities/group.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  started_party: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @ManyToMany(() => User, { cascade: true })
  @JoinTable()
  winners_history: User[];
}
