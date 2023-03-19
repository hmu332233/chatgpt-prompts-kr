import { useNavigate, To, NavigateOptions } from 'react-router-dom';

// TODO: 별도 파일로 옮기기
declare global {
  interface Document {
    startViewTransition: (callback: () => void) => void;
  }
}

function useViewTransitionNavigate() {
  const navigate = useNavigate();

  return (to: To, options?: NavigateOptions) => {
    if (!document.startViewTransition) {
      return navigate(to, options);
    }

    document.startViewTransition(() => {
      navigate(to, options);
    });
  };
}

export default useViewTransitionNavigate;
