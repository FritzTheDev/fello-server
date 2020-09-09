import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';
import { IsEmail, Length, IsEmpty } from 'class-validator';

@Entity({ name: "app_user" })
export class AppUser {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @IsEmail()
  @Index()
  @Column({ unique: true })
  email: string;

  @Length(3)
  @Column({ unique: true })
  username: string;

  // hashed password
  @Length(8)
  @Column()
  password: string;

  @IsEmpty()
  @Column({ default: true })
  isActive: boolean;
}
