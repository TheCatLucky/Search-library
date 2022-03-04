export type Class = {
  id: number;
  name: string;
  links: number;
  objects: number;
  created: Date;
  lastUpdate: Date;
  tags: Array<string>;
};

export type DataSource = {
  id: number;
  name: string;
  linkedClasses: number;
  linkedDataSources: number;
  created: Date;
  lastUpdate: Date;
  tags: Array<string>;
};

export type DataObject = {
  id: number;
  name: string;
  requestRate: number;
  linkedObjects: number;
  created: Date;
  lastUpdate: Date;
  tags: Array<string>;
};

export type Data = {
  classes: Array<Class>;
  dataSources: Array<DataSource>;
  objects: Array<DataObject>;
};
