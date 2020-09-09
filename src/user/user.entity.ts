import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, Length, IsEmpty } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @IsEmail()
  @Column()
  email: string;

  @Length(3)
  @Column()
  username: string;

  // hashed password
  @Length(8)
  @Column()
  password: string;

  @IsEmpty()
  @Column({ default: true })
  isActive: boolean;
}
