import './button.css'

type ButtonVariant = 'solid' | 'ghost'

type ButtonProps = {
  children: string
  variant?: ButtonVariant
  onClick?: () => void
}

export function Button({ children, variant = 'solid', onClick }: ButtonProps) {
  const className = variant === 'solid' ? 'bb-button bb-button-solid' : 'bb-button bb-button-ghost'

  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  )
}
