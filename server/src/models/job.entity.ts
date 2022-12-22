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
    @Column()
    name: string;

    @Index()
    @Column()
    description: string;
}
