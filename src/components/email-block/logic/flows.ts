import { useStore } from './store';
import { content as fallbackContent } from '../fallback';

const wait = async (time: number) =>
  new Promise((resolve) => setTimeout(() => resolve(true), time));

const useDispatchEmailFlow = () => {
  const [setProcessing, clearProcessing, setButtonText, buttonStates] =
    useStore((store) => [
      store.setProcessing,
      store.clearProcessing,
      store.setButtonText,
      store.content?.button?.states,
    ]);

  const dispatch = async () => {
    setProcessing();
    setButtonText(buttonStates?.processing);
    await wait(2000);
    setButtonText(buttonStates?.success);
    await wait(1000);
    setButtonText(buttonStates?.initial);
    clearProcessing();
  };
  return dispatch;
};

const useDispatchGetContentFlow = () => {
  const [setLoading, clearLoading, getContent, setContent] = useStore(
    (store) => [
      store.setLoading,
      store.clearLoading,
      store.getContent,
      store.setContent,
    ]
  );

  const dispatch = async () => {
    setLoading();
    try {
      await getContent();
    } catch (error) {
      setContent(fallbackContent);
    }
    clearLoading();
  };
  return dispatch;
};

export { useDispatchEmailFlow, useDispatchGetContentFlow };
