import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import {Jobs} from "../../models/job.entity";

@Injectable()
export class JobService extends TypeOrmCrudService<Jobs>{
    constructor(@InjectRepository(Jobs) jobsRepository: Repository<Jobs>){
        super(jobsRepository);
    }
}
