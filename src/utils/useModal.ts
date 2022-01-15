import { useCallback, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  return {
    isOpen,
    onOpen,
    onClose,
  };
}
