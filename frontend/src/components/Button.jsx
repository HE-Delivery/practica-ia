export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyles = 'px-4 py-2 rounded font-medium transition-colors duration-200'
  
  const variants = {
    primary: 'bg-primary hover:bg-blue-600 text-white',
    secondary: 'bg-secondary hover:bg-gray-800 text-white',
    success: 'bg-success hover:bg-green-600 text-white',
    error: 'bg-error hover:bg-red-600 text-white',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
