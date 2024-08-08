import {
  getUser,
  userReducer,
  registerUser,
  loginUser,
  updateUser,
  logout,
  checkLogin,
  checkIsAuth,
  clearError,
  initialStateUser
} from './user';

const userInfo = {
  email: 'lozhkina_2021@list.ru',
  name: 'Юлиана'
};

const userLoginData = { user: { ...userInfo } };

describe('Test user slice', () => {
  beforeAll(() => {
    global.localStorage = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      removeItem: jest.fn(),
      clear: jest.fn(),
      key: jest.fn(),
      length: 0
    };

    jest.mock('../utils/cookie', () => ({
      getCookie: jest.fn(),
      setCookie: jest.fn(),
      deleteCookie: jest.fn()
    }));
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('test get user', () => {
    const state = userReducer(initialStateUser, {
      type: getUser.fulfilled.type,
      payload: userLoginData
    });
    expect(state).toEqual({
      ...initialStateUser,
      isUserLoading: false,
      isChecked: true,
      isLogin: true,
      user: userInfo
    });
  });

  it('test get user pending', () => {
    const state = userReducer(initialStateUser, {
      type: getUser.pending.type
    });
    expect(state).toEqual({ ...initialStateUser, isUserLoading: true });
  });

  it('test get user rejected', () => {
    const state = userReducer(initialStateUser, {
      type: getUser.rejected.type,
      error: { message: 'failed get user' }
    });

    expect(state).toEqual({
      ...initialStateUser,
      error: 'failed get user',
      isUserLoading: false
    });
  });

  it('test check is login', () => {
    const state = userReducer(initialStateUser, checkIsAuth());
    expect(state).toEqual({ ...initialStateUser, isChecked: true });
  });

  it('test register user', () => {
    const state = userReducer(initialStateUser, {
      type: registerUser.fulfilled.type,
      payload: userLoginData
    });

    expect(state).toEqual({
      ...initialStateUser,
      isUserLoading: false,
      isChecked: true,
      isLogin: true,
      user: userInfo
    });
  });

  it('test register user pending', () => {
    const state = userReducer(initialStateUser, {
      type: registerUser.pending.type
    });
    expect(state).toEqual({ ...initialStateUser, isUserLoading: true });
  });

  it('test register user rejected', () => {
    const state = userReducer(initialStateUser, {
      type: registerUser.rejected.type,
      error: { message: 'failed register user' }
    });
    expect(state).toEqual({
      ...initialStateUser,
      error: 'failed register user',
      isUserLoading: false
    });
  });

  it('test login user', () => {
    const state = userReducer(initialStateUser, {
      type: loginUser.fulfilled.type,
      payload: userInfo
    });
    expect(state).toEqual({
      ...initialStateUser,
      isUserLoading: false, //изменила
      isChecked: true,
      isLogin: true,
      user: userInfo
    });
  });

  it('test login user pending', () => {
    const state = userReducer(initialStateUser, {
      type: loginUser.pending.type
    });
    expect(state).toEqual({ ...initialStateUser, isUserLoading: true });
  });

  it('test login user rejected', () => {
    const state = userReducer(initialStateUser, {
      type: loginUser.rejected.type,
      error: { message: 'failed login user' }
    });
    expect(state).toEqual({
      ...initialStateUser,
      error: 'failed login user',
      isUserLoading: false
    });
  });

  it('test update user', () => {
    const state = userReducer(initialStateUser, {
      type: updateUser.fulfilled.type,
      payload: userLoginData
    });

    expect(state).toEqual({
      ...initialStateUser,
      isUserLoading: false,
      isChecked: true,
      isLogin: true, //добавила
      user: userInfo
    });
  });

  it('test update user pending', () => {
    const state = userReducer(initialStateUser, {
      type: updateUser.pending.type
    });
    expect(state).toEqual({ ...initialStateUser, isUserLoading: true });
  });

  it('test update user rejected', () => {
    const state = userReducer(initialStateUser, {
      type: updateUser.rejected.type,
      error: { message: 'failed update user' }
    });
    expect(state).toEqual({
      ...initialStateUser,
      error: 'failed update user',
      isUserLoading: false
    });
  });

  describe('User slice', () => {
    it('test logout', () => {
      // Вызываем редьюсер
      const state = userReducer(initialStateUser, {
        type: logout.fulfilled.type,
      });
      const newState = userReducer(state, checkIsAuth());
      //состояние соответс ожидаемому
      expect(state).toEqual({
        ...initialStateUser,
        isChecked: true,
        isUserLoading: false,
      });
    });
  });

  it('test clear error', () => {
    const state = userReducer(
      { ...initialStateUser, error: 'error' },
      clearError()
    );
    expect(state).toEqual({ ...initialStateUser, error: null });
  });
});
