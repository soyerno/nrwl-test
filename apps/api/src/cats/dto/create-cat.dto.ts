import { IsInt, IsString } from 'class-validator';

export class CreateCatDto {
  @IsString()
  readonly name: string;

  @IsString()
  owner: string;

  @IsInt()
  readonly age: number;

  @IsString()
  readonly breed: string;
}
