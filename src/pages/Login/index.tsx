import Logo from '../../assets/logo.svg'
import LoginLogo from '../../assets/log-in.svg'
import sideImage from '../../assets/side-image-2x.jpg'
import './styles.css'

import { Input } from '../../components/Input'
import { IFormInputs } from './types'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

const schema = yup.object({
  email: yup.string().email('E-mail deverá ser um e-mail válido').required('Campo obrigatório!'),
  password: yup.string().min(8, 'No mínimo 8 caracteres').max(16, 'Máximo de 16 caracteres').required('Campo obrigatório!')
}).required()

export function Login() {
  const [isMailFocused, setIsMailFocused] = useState(false)
  const [isPassFocused, setIsPassFocused] = useState(false)

  const { register, handleSubmit, formState: { errors, isValid } } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    reValidateMode: 'onChange'
  });

  function passBlur() {
    setIsPassFocused(false)
  }

  function mailBlur() {
    setIsMailFocused(false)
  }

  async function onSubmit(data: IFormInputs) {
    console.log(data)
  }

  return (
    <div className="form-wrapper">
      <main>
        <div className="logo-container">
          <img src={Logo} alt="Camp.in Logo" />
        </div>
        <section className="form-container">
          <div className="title-container">
            <img src={LoginLogo}/>
            <h1>Faça seu Login</h1>
          </div>
          <div className="subtitle-container">
            <p className="signup-text">Entre com suas informações de cadastro.</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group">
              <label htmlFor="email">E-mail</label>
              <div className="input-container">
                <i className={isMailFocused ? "mail-logo-focus" : "mail-logo"}/>
                <Input  
                  type="email" 
                  id="email" 
                  placeholder="Digite seu email"
                  onFocus={() => setIsMailFocused(true)}
                  {...register("email", {
                    onBlur: mailBlur,
                  })}
                  errorMessage={errors.email?.message}
                />
                {errors.email && <span>{errors.email?.message}</span>}
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="password">Senha</label>
              <div className="input-container">
              <i className={isPassFocused ? "pass-logo-focus" : "pass-logo"} />
                <Input 
                  type="password"  
                  id="password"
                  placeholder="Digite sua senha"
                  onFocus={() => setIsPassFocused(true)}
                  {...register("password", {
                    onBlur: passBlur
                  })}
                />
                {errors.password && <span>{errors.password?.message}</span>}
              </div>
            </div>
            <div className="input-group check-area">
              <div className="checkbox-container">
                <Input 
                  type="checkbox" 
                  id="remember" 
                  {...register("rememberMe")}
                />
                <label htmlFor="remember">Lembre-me</label>
              </div>
              <a href="#">Esqueci minha senha</a>
            </div>
            <button type="submit" disabled={!isValid}>Entrar</button>
            <p>Não tem uma conta? <a href="#">Registre-se</a></p>
          </form>
        </section>
      </main>
      <div className="side-image">
        <img src={sideImage} alt="Imagem ilustrativa" />
      </div>
    </div>
  )
}
