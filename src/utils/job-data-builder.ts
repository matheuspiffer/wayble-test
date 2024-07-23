import { faker } from "@faker-js/faker";
type Props = {
  id: string;
  companyName: string;
  title: string;
  description: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
};

export function JobDataBuilder(props: Partial<Props>) {
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
