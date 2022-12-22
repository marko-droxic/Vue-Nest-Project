import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { JobService } from "./job.service";
import {Jobs} from "../../models/job.entity";
import { Response } from 'express';
@Crud({
    model: {
        type: Jobs
    }
})
@Controller('jobs')
export class JobController implements CrudController<Jobs>{
    constructor(public service: JobService){}

    @Get('/export')
    async exportSome(@Res({ passthrough: true }) res: Response) {
       const jobs = await this.service.exportJobs();
        res.status(HttpStatus.OK);
        return jobs;
    }


}
