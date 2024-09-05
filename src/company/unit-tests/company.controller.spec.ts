import { Test, TestingModule } from '@nestjs/testing';
import { CompanyController } from '../company.controller';
import { CompanyModel } from '../company.model';

describe('CompanyController', () => {
  let controller: CompanyController;
  let model: CompanyModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanyController],
      providers: [
        {
          provide: CompanyModel,
          useValue: {
            getCompanyMessage: jest
              .fn()
              .mockReturnValue('Hi, this is the company module'),
          },
        },
      ],
    }).compile();

    controller = module.get<CompanyController>(CompanyController);
    model = module.get<CompanyModel>(CompanyModel);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return the correct message', () => {
    expect(controller.getCompanyMessage()).toBe(
      'Hi, this is the company module',
    );
    expect(model.getCompanyMessage).toHaveBeenCalled();
  });
});
