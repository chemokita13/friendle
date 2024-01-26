import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './db_entities/user.entity';
import { Word } from './db_entities/word.entity';
import { UserGroupAssociation } from './db_entities/user-group.entity';
import { Try } from './db_entities/try.entity';
import { Letter } from './db_entities/letter.entity';
import { Group } from './db_entities/group.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'friendle',
      synchronize: true,
      logging: true,
      entities: [User, Word, UserGroupAssociation, Try, Letter, Group],
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
