import { IsDefined, IsString, MinLength, MaxLength } from 'class-validator';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    Index,
} from 'typeorm';

@Entity('jobs')
export class Jobs {
    @PrimaryGeneratedColumn({ name: 'id', type: 'integer' })
    id: number;

    @Index()
    @Column("varchar", { length: 20, nullable: false })
    @IsDefined({ always: true })
    @IsString({ always: true })
    @MinLength(5, { always: true })
    @MaxLength(20, { always: true })
    name: string;

    @Index()
    @Column("varchar", { nullable: false })
    @IsDefined({ always: true })
    @IsString({ always: true })
    @MinLength(5, { always: true })
    description: string;
}
