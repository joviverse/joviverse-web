import { useState, useCallback, ChangeEvent } from 'react'

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue)
  const handler:
    | ((event: ChangeEvent<HTMLInputElement>) => void)
    | undefined = useCallback((e) => {
    setValue(e.target.value)
  }, [])
  return [value, handler]
}
export default useInput
