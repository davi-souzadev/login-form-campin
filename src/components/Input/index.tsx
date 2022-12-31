import React, { FC } from 'react'
import {IInput} from './types'

/* export function Input({ id, name, type, errorMessage, ...rest}: IInput) {

  return (
    <>
      <input 
        id={id}
        type={type}
        name={name}
        {...rest}
      />
      {errorMessage && <p>{errorMessage}</p>}
    </>
  )
} */


export const Input: FC<IInput> = React.forwardRef<HTMLInputElement, IInput>(({ id, name, type, errorMessage, ...rest}, ref) => {

  return (
    <>
      <input 
        id={id}
        type={type}
        name={name}
        ref={ref}
        {...rest}
      />
    </>
  )
})