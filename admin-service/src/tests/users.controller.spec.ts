import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '../controllers/user.controller';
import { UserService } from '../services/user.service';

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: {
            createUser: jest.fn(),
            findUserById: jest.fn(),
            findUsers: jest.fn(),
          },
        },
      ],
    }).compile();

    userController = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  describe('getAllUsers', () => {
    it('should call UserService.findUsers and return the result', async () => {
      const expectedResult = [
        { id: '1', nickname: 'User1' },
        { id: '2', nickname: 'User2' },
      ];
      jest.spyOn(userService, 'findUsers').mockResolvedValue(expectedResult);

      expect(await userController.getAllUsers()).toEqual(expectedResult);
      expect(userService.findUsers).toHaveBeenCalled();
    });
  });

  describe('getUserById', () => {
    it('should call UserService.findUserById and return the result', async () => {
      const userId = '1';
      const expectedResult = { id: '1', nickname: 'User1' };
      jest.spyOn(userService, 'findUserById').mockResolvedValue(expectedResult);

      expect(await userController.getUserById(userId)).toEqual(expectedResult);
      expect(userService.findUserById).toHaveBeenCalledWith(userId);
    });
  });

  describe('createUser', () => {
    it('should call UserService.createUser and return the result', async () => {
      const userData = { nickname: 'NewUser' };
      const expectedResult = { id: '3', nickname: 'NewUser' };
      jest.spyOn(userService, 'createUser').mockResolvedValue(expectedResult);

      expect(await userController.createUser(userData)).toEqual(expectedResult);
      expect(userService.createUser).toHaveBeenCalledWith(userData);
    });
  });
});
