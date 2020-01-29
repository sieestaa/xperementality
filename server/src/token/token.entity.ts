import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm'
import { User } from "../users/user.entity";

@Entity()
export class Token extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @OneToOne(type => User)
  @Column()
  uId: number 

  @Column()
  token: string;

  @Column()
  refreshToken: string;

  @Column()
  createTime: string;

  @Column()
  fingerPrint: string;
}