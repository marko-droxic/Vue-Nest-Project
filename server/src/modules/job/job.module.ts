import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobController } from './job.controller';
import { JobService } from "./job.service";
import { Jobs } from "../../models/job.entity";



@Module({
    imports: [
        TypeOrmModule.forFeature([Jobs])
    ],
    controllers: [JobController],
    providers: [JobService],
})
export class JobModule {}

