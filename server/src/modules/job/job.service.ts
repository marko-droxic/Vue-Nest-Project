import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import {Jobs} from "../../models/job.entity";
import * as fs from 'fs-extra'

const mapFieldtoColumn = (fieldNames) => {
    return function (element) {
        let fields = fieldNames.map(n => element[n] ? JSON.stringify(element[n]) : '""');
        return fields.join(',');
    }
}

@Injectable()
export class JobService extends TypeOrmCrudService<Jobs>{
    constructor(@InjectRepository(Jobs) private readonly  jobsRepository: Repository<Jobs>){
        super(jobsRepository);
    }

    async exportJobs() {
        const allJobs = await this.jobsRepository.find();
        const fieldNames = Object.keys(allJobs[0]); // get fields
        let csvText = allJobs.map(mapFieldtoColumn(fieldNames));
        csvText.unshift(fieldNames.join(',')); // append fields to top
        csvText.join("\n");
        return csvText;
    }

}
