import { IsInt, IsString } from 'class-validator';

export class CreateCatDto {
  @IsString()
  administrator: string;

  @IsString()
  readonly name: string;

  @IsString()
  readonly owner: string;

  @IsInt()
  readonly age: number;

  @IsString()
  readonly breed: string;
}
