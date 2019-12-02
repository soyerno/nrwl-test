import { Test, TestingModule } from '@nestjs/testing';
import { RmService } from './rm.service';

describe('RmService', () => {
  let service: RmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RmService],
    }).compile();

    service = module.get<RmService>(RmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
