export type ExtendedTerm = {
  id?: number
  name?: string
  linkedClasses?: number
  linkedDataSources?: number
  requestRate?: number
  linkedObjects?: number
  links?: number
  created?: Date
  lastObjectUpdate?: Date
  lastUpdate?: Date
  attributes?: Array<string>
};
