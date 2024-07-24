import { faker } from "@faker-js/faker";
import { Job } from "../../types/job";

export function JobDataBuilder(props: Partial<Job>) {
  return {
    id: props.id ?? faker.string.uuid(),
    companyName: props.companyName ?? faker.company.name(),
    title: props.title ?? faker.person.jobTitle(),
    description: props.description ?? faker.lorem.paragraphs(),
    address: props.address ?? faker.location.streetAddress(),
    city: props.city ?? faker.location.city(),
    state: props.state ?? faker.location.state(),
    zipCode: props.zipCode ?? faker.location.zipCode(),
  };
}
