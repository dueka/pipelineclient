import faker from "faker";

interface ProjectDataProps {
  id: number;
  backgroundImg: any;
  img: any;
  name: string;
  beneficiary: string;
  cost: number;
  returns: number;
  category: string;
  slots: number;
  slotPerCap: number;
  duration: number;
}

export const ProjectData: ProjectDataProps[] = [
  {
    id: 1,
    backgroundImg: faker.image.image(),
    img: faker.image.image(),
    name: "Rachel Super Mall Construction",
    beneficiary: "Rachel Riley",
    cost: 5000,
    returns: 13,
    category: "REAL ESTATE",
    slots: 200,
    slotPerCap: 20,
    duration: 6,
  },
  {
    id: 2,
    backgroundImg: faker.image.image(),
    img: faker.image.image(),
    name: "Donald Corn Foods",
    beneficiary: "Donald Dalia",
    cost: 5000,
    returns: 13,
    category: "AGRICULTURE",
    slots: 200,
    slotPerCap: 20,
    duration: 6,
  },
];
