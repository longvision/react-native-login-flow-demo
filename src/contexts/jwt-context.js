import React, {createContext, useEffect, useReducer} from 'react';
import PropTypes from 'prop-types';
import AuthApi from '../api/auth-api';
import AsyncStorage from '@react-native-async-storage/async-storage';
const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const handlers = {
  INITIALIZE: (state, action) => {
    const {isAuthenticated, user} = action.payload;

    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  },
  LOGIN: (state, action) => {
    const {user} = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  SET_USER: (state, action) => {
    const {user} = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  LOGOUT: state => ({
    ...state,
    isAuthenticated: false,
    user: null,
  }),
  REGISTER: (state, action) => {
    const {user} = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
};

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

export const AuthContext = createContext({
  ...initialState,
  platform: 'JWT',
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve(),
  setUser: () => Promise.resolve(),
});

export const AuthProvider = props => {
  const {children} = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  // const router = useRouter();

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = AsyncStorage.getItem('accessToken');

        if (accessToken) {
          //   const user = await AuthApi.me(accessToken);

          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: true,
              user: 'user',
            },
          });
        } else {
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initialize();
  }, []);

  const login = async (email, password) => {
    const accessToken = await AuthApi.login(email, password);
    // const user = await AuthApi.me(accessToken);
    try {
      if (accessToken) {
        AsyncStorage.setItem('accessToken', accessToken);
        dispatch({
          type: 'LOGIN',
          payload: {
            user: 'user',
          },
        });
      } else {
        AsyncStorage.removeItem('accessToken');
        // AsyncStorage.removeItem("currentProject");
      }
    } catch (e) {
      //console.log(e, "Login Error");
    }
  };

  const logout = async () => {
    dispatch({type: 'LOGOUT'});
    // AsyncStorage.removeItem("currentProject");
    AsyncStorage.removeItem('accessToken');
  };

  const setUser = async payload => {
    const {userId, update} = payload;

    const accessToken = await AuthApi.updateUser({
      userId,
      update,
    });

    // const user = await AuthApi.me(accessToken);

    AsyncStorage.removeItem('accessToken');
    AsyncStorage.setItem('accessToken', accessToken);

    dispatch({type: 'SET_USER', payload: {user}});
  };

  const register = async (email, username, password, role) => {
    const accessToken = await AuthApi.register({
      email,
      username,
      password,
    });
    // const user = await AuthApi.me(accessToken);

    AsyncStorage.setItem('accessToken', accessToken);

    dispatch({
      type: 'REGISTER',
      payload: {
        user: 'user',
      },
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        platform: 'JWT',
        login,
        logout,
        register,
        setUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const AuthConsumer = AuthContext.Consumer;
