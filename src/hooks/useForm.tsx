import React, {
  ChangeEvent,
  createContext,
  FormEvent,
  HTMLAttributes,
  useCallback,
  useContext,
  useState,
} from 'react';

interface FormHandlerProps
  extends Omit<HTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  children?: React.ReactNode;
  onSubmit: (data?: FormValues) => Promise<void> | void;
}

export type FormValues = {
  [field: string]: string | boolean | number;
};

export type FormErrors = {
  [field: string]: string[];
};

type FormContextProps = {
  values: FormValues;
  isInvalidForm: boolean;
  isSubmitting: boolean;
  handleChangeField: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const formContext = createContext<FormContextProps>({} as any);

export const FormHandler = ({
  children,
  onSubmit,
  ...rest
}: FormHandlerProps): JSX.Element => {
  const [values, setValues] = useState<FormValues>({});
  const [isInvalidForm, setIsInvalidForm] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChangeField = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValues(currentValues => ({
      ...currentValues,
      [e.target.name]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    }));
  }, []);

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      try {
        await onSubmit(values);
      } catch (error) {
        console.log(error);
      }
      setIsSubmitting(false);
    },
    [values],
  );

  return (
    <formContext.Provider
      value={{
        values,
        isInvalidForm,
        isSubmitting,
        handleChangeField,
      }}
    >
      <form {...rest} onSubmit={handleSubmit}>
        {children}
      </form>
    </formContext.Provider>
  );
};

export function useFormHandler(): FormContextProps {
  const context = useContext(formContext);

  return context;
}
