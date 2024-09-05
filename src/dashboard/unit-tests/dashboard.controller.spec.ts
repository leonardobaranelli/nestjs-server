import { Test, TestingModule } from '@nestjs/testing';
import { DashboardController } from '../dashboard.controller';
import { DashboardModel } from '../dashboard.model';

describe('DashboardController', () => {
  let controller: DashboardController;
  let model: DashboardModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DashboardController],
      providers: [
        {
          provide: DashboardModel,
          useValue: {
            getDashboardMessage: jest
              .fn()
              .mockReturnValue('Hi, this is the dashboard module'),
          },
        },
      ],
    }).compile();

    controller = module.get<DashboardController>(DashboardController);
    model = module.get<DashboardModel>(DashboardModel);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return the correct message', () => {
    expect(controller.getDashboardMessage()).toBe(
      'Hi, this is the dashboard module',
    );
    expect(model.getDashboardMessage).toHaveBeenCalled();
  });
});
