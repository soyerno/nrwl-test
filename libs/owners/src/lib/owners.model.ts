import { InputBase } from 'apps/ticmas/src/app/home/dynamic-form/generators/input-base';
import { DropdownInput } from 'apps/ticmas/src/app/home/dynamic-form/generators/input-dropdown';
import { TextboxInput } from 'apps/ticmas/src/app/home/dynamic-form/generators/input-textbox';

export interface Owner {
  readonly _id?: string;
  name: string,
  cats: string[],
}


export const ownersFormStructure = () => {
  const inputs: InputBase<any>[] = [
    new DropdownInput({
      key: 'cats',
      label: 'Cats',
      options: [],
      order: 2
    }),

    new TextboxInput({
      key: 'name',
      label: 'Name',
      value: 'My Name',
      required: true,
      order: 1
    }),

  ];

  return inputs.sort((a, b) => a.order - b.order);
};
