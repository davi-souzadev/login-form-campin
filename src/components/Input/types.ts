export interface IInput extends React.InputHTMLAttributes<HTMLInputElement>{
  id: string
  type: string
  name: string
  errorMessage?: string
}