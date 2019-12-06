import { IsString } from 'class-validator';

export class CreateOwnerDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly cats: string[];
}
