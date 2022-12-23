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
    @Column({nullable: true})
    name: string;

    @Index()
    @Column({nullable: true})
    description: string;
}
