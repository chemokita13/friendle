// user-group-association/entities/user-group-association.entity.ts
import {
  Entity,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';
import { User } from './user.entity';
import { Group } from './group.entity';

@Entity()
export class UserGroupAssociation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Group, { eager: true })
  @JoinColumn({ name: 'group_id' })
  group: Group;

  @Column({ default: false })
  is_admin: boolean;
}
