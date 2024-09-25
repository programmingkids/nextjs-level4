'use client';

import { createContext } from 'react';

type UserProviderProps = { children: React.ReactNode };

// User型のエイリアスタイプ
type UserType = {
  name: string;
  age: number;
  hobby: string;
};

// Contextの初期値
const defaultUser: UserType = {
  name: 'Bob',
  age: 15,
  hobby: 'piano',
};

// Context作成
export const UserContext = createContext<UserType>(defaultUser);

// ContextProviderのコンポーネント定義
export const UserProvider = ({ children }: UserProviderProps) => {
  return (
    <UserContext.Provider value={defaultUser}>{children}</UserContext.Provider>
  );
};
