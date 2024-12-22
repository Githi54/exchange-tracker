import { Test, TestingModule } from '@nestjs/testing';
import { RulesController } from '../controllers/rules.controller';
import { RulesService } from '../services/rules.service';

describe('RulesController', () => {
  let rulesController: RulesController;
  let rulesService: RulesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RulesController],
      providers: [
        {
          provide: RulesService,
          useValue: {
            createRule: jest.fn(),
            getAllRules: jest.fn(),
            getUserRules: jest.fn(),
            deleteRule: jest.fn(),
          },
        },
      ],
    }).compile();

    rulesController = module.get<RulesController>(RulesController);
    rulesService = module.get<RulesService>(RulesService);
  });

  describe('createRule', () => {
    it('should call RulesService.createRule and return the result', async () => {
      const ruleData = {
        userId: '1',
        currencyA: 'USD',
        currencyB: 'EUR',
        percentage: 10,
        period: 30,
        createdAt: new Date(),
        isPopular: false,
      };
      const expectedResult = { id: '123', ...ruleData };
      jest.spyOn(rulesService, 'createRule').mockResolvedValue(expectedResult);

      expect(await rulesController.createRule(ruleData)).toEqual(
        expectedResult,
      );
      expect(rulesService.createRule).toHaveBeenCalledWith(
        ruleData.userId,
        ruleData,
      );
    });
  });

  describe('getAllRules', () => {
    it('should call RulesService.getRules and return the result', async () => {
      const expectedResult = [
        {
          id: '123',
          userId: '1',
          currencyA: 'USD',
          currencyB: 'EUR',
          percentage: 10,
          period: 30,
          createdAt: new Date(),
          isPopular: false,
        },
        {
          id: '124',
          userId: '5',
          currencyA: 'USD',
          currencyB: 'EUR',
          percentage: 10,
          period: 30,
          createdAt: new Date(),
          isPopular: false,
        },
      ];
      jest.spyOn(rulesService, 'getAllRules').mockResolvedValue(expectedResult);

      expect(await rulesController.getAllRules()).toEqual(expectedResult);
    });
  });

  describe('getUserRules', () => {
    it('should call RulesService.getRules and return the result', async () => {
      const userId = '1';
      const expectedResult = [
        {
          id: '123',
          userId: '1',
          currencyA: 'USD',
          currencyB: 'EUR',
          percentage: 10,
          period: 30,
          createdAt: new Date(),
          isPopular: false,
        },
      ];
      jest
        .spyOn(rulesService, 'getUserRules')
        .mockResolvedValue(expectedResult);

      expect(await rulesController.getUserRules(userId)).toEqual(
        expectedResult,
      );
      expect(rulesService.getUserRules).toHaveBeenCalledWith(userId);
    });
  });

  describe('deleteRule', () => {
    it('should call RulesService.deleteRule and return the result', async () => {
      const ruleId = '123';
      const expectedResult = {
        id: ruleId,
        userId: 'user1',
        currencyA: 'USD',
        currencyB: 'EUR',
        percentage: 5.0,
        period: 30,
        createdAt: new Date(),
        isPopular: false,
      };

      jest.spyOn(rulesService, 'deleteRule').mockResolvedValue(expectedResult);

      const result = await rulesController.deleteRule(ruleId);

      expect(result).toEqual(expectedResult);
      expect(rulesService.deleteRule).toHaveBeenCalledWith(ruleId);
    });
  });
});
