const usePreventLeave = () => {
  window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    event.returnValue = '';
  });
  const preventClose = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = '';
  };
  const enablePrevent = () => window.addEventListener('beforeunload', preventClose);
  const disablePrevent = () => window.removeEventListener('beforeunload', preventClose);
  return { enablePrevent, disablePrevent };
};

export default usePreventLeave;
