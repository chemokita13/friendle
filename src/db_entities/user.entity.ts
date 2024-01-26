// users/entities/user.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { UserGroupAssociation } from './user-group.entity';
import { Group } from './group.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @ManyToMany(() => User)
  @JoinTable()
  friends: User[];

  @ManyToMany(() => User)
  @JoinTable()
  friends_requests_sended: User[];

  @ManyToMany(() => User)
  @JoinTable()
  friends_requests_got: User[];

  @OneToMany(
    () => UserGroupAssociation,
    (userGroupAssociation) => userGroupAssociation.user,
  )
  groupAssociations: UserGroupAssociation[];

  @ManyToMany(() => Group, { cascade: true })
  @JoinTable({
    name: 'user_groups',
    joinColumn: { name: 'user_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'group_id', referencedColumnName: 'id' },
  })
  groups: Group[];
}
