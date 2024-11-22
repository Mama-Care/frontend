import { useState } from "react";

const useFormHook = (initialState: any) => {
  const [form, setForm] = useState(initialState);

  const onChange = (key: string, value: string | number) => {
    setForm((prevState: any) => ({
      ...prevState,
      [key]: value,
    }))
  }

  const clear = () => {
    setForm(initialState);
  }

  return [ form, onChange, clear ]
};

export default useFormHook;