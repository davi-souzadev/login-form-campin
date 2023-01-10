import React, { FC } from 'react'
import {IInput} from './types'

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