export type ISubscription = (id: string, nextValue: any) => void;

export interface IGroupItemBase {
  id: string;
  label: string;
}

export type IGroupItem = ICheckboxItemGroup | ISelectItemGroup;

export interface ICheckboxItemGroup extends IGroupItemBase {
  initial: boolean;
  type: "checkbox";
}

export interface ISelectItemGroup extends IGroupItemBase {
  initial: string;
  type: "select";
  options: { label: string; value: string }[];
}

export interface IGroup {
  label: string;
  items: IGroupItem[];
}

export type IGroups = IGroup[];

export interface IStore {
  [key: string]: string | boolean | number;
}
