import {Factory, Seeder} from "typeorm-seeding";
import {Connection} from "typeorm";
import {Jobs} from "../../models/job.entity";

export default class CreateJobs implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        await factory(Jobs)().createMany(30)
    }
}