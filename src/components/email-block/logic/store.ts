import create, { SetState } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Store, initContentModel, initLoadingModel } from './data-models';

const useStore = create<Store>(
  devtools(
    (set: SetState<Store>) => ({
      ...initContentModel(set),
      ...initLoadingModel(set),
    }),
    'smart-blocks-store'
  )
);

export { useStore };
