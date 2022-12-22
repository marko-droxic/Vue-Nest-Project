import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { JobService } from "./job.service";
import {Jobs} from "../../models/job.entity";

@Crud({
    model: {
        type: Jobs
    }
})
@Controller('jobs')
export class JobController implements CrudController<Jobs>{
    constructor(public service: JobService){}
}
