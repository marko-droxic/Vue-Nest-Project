import { faker } from '@faker-js/faker';
import { define } from 'typeorm-seeding';
import { Jobs } from '../models/job.entity';

define(Jobs, (fake: typeof faker) => {

    const job = new Jobs()

    job.name = fake.lorem.word({ length: { min: 6, max: 20 }, strategy: "fail" });

    job.description = fake.lorem.text();

    return job;
})