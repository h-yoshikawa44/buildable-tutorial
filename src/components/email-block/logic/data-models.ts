import { SetState } from 'zustand';
import { Content, content } from '../fallback';

type InitContentModel = {
  content: Content;
  currentButtonText: string;
  setButtonText: (buttonText: string) => void;
  getContent: VoidFunction;
  setContent: (content: Content) => void;
};

type InitLoadingModel = {
  loading: boolean;
  processing: boolean;
  setLoading: VoidFunction;
  clearLoading: VoidFunction;
  setProcessing: VoidFunction;
  clearProcessing: VoidFunction;
};

type Store = InitContentModel & InitLoadingModel;

const initContentModel = (set: SetState<Store>): InitContentModel => ({
  content,
  currentButtonText: content.button?.states?.initial,
  setButtonText: (buttonText: string) =>
    set((state) => ({ ...state, currentButtonText: buttonText })),
  getContent: () => {},
  setContent: (content: Content) => {
    set((state) => ({ ...state, content }));
  },
});

const initLoadingModel = (set: SetState<Store>): InitLoadingModel => ({
  loading: false,
  processing: false,
  setLoading: () => {
    set((state) => ({ ...state, loading: true }));
  },
  clearLoading: () => {
    set((state) => ({ ...state, loading: false }));
  },
  setProcessing: () => {
    set((state) => ({ ...state, processing: true }));
  },
  clearProcessing: () => {
    set((state) => ({ ...state, processing: false }));
  },
});

export type { Store };
export { initContentModel, initLoadingModel };
