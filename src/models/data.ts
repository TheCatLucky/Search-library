export type Class = {
  id: number;
  name: string;
  links: number;
  created: Date;
  lastObjectUpdate: Date;
  attributes: Array<string>;
};

export type DataSource = {
  id: number;
  name: string;
  linkedClasses: number;
  linkedDataSources: number;
  created: Date;
  lastUpdate: Date;
  attributes: Array<string>;
};

export type DataObject = {
  id: number;
  requestRate: number;
  linkedObjects: number;
  created: Date;
  lastUpdate: Date;
  attributes: Array<string>;
};

export type Data = {
  classes: Array<Class>;
  dataSources: Array<DataSource>;
  objects: Array<DataObject>;
};
