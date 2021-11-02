import { UseFormRegisterReturn } from 'react-hook-form'

export const registerMui = ({ ref, name, onChange, onBlur }: UseFormRegisterReturn) => ({ inputRef: ref, onChange, onBlur, name })
