import { InputBase } from 'apps/ticmas/src/app/home/dynamic-form/generators/input-base';
import { DropdownInput } from 'apps/ticmas/src/app/home/dynamic-form/generators/input-dropdown';
import { TextboxInput } from 'apps/ticmas/src/app/home/dynamic-form/generators/input-textbox';

export interface Cat {
  readonly _id?: string;
  name: string;
  age: number;
  breed: string;
  owner: string;
}

export const catsFormStructure = () => {
  const inputs: InputBase<any>[] = [
    // new DropdownInput({
    //   key: 'name',
    //   label: 'Fluffy',
    //   options: [
    //     { key: 'solid', value: 'Solid' },
    //     { key: 'great', value: 'Great' },
    //     { key: 'good', value: 'Good' },
    //     { key: 'unproven', value: 'Unproven' }
    //   ],
    //   order: 3
    // }),

    new TextboxInput({
      key: 'name',
      label: 'Name',
      value: 'Fluffy Kings',
      required: true,
      order: 1
    }),

    new TextboxInput({
      key: 'age',
      label: 'Age',
      type: 'number',
      order: 2
    }),

    new TextboxInput({
      key: 'breed',
      label: 'Breed',
      type: 'text',
      order: 3
    })
  ];

  return inputs.sort((a, b) => a.order - b.order);
};
