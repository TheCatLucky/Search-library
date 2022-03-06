export type Class = {
  id: number;
  name: string;
  created: Date;
  lastUpdate: Date;
  data?: {
    links: number;
    objects: number;
    tags: Array<string>;
  };
};

export type DataSource = {
  id: number;
  name: string;
  created: Date;
  lastUpdate: Date;
  data?: {
    tags: Array<string>;
    linkedClasses: number;
    linkedDataSources: number;
  };
};

export type DataObject = {
  id: number;
  name: string;
  created: Date;
  lastUpdate: Date;
  data?: {
    requestRate: number;
    linkedObjects: number;
    tags: Array<string>;
  };
};

export type Data = Class[] | DataSource[] | DataObject[];
