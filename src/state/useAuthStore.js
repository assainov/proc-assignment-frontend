import { create } from 'zustand';

const user = JSON.parse(localStorage.getItem('user'));

export const useAuthStore = create((set) => ({
  user: user || null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  setUser: (user) => set({ user }),
  setIsError: (isError) => set({ isError }),
  setIsSuccess: (isSuccess) => set({ isSuccess }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setMessage: (message) => set({ message }),
}));