export const Button = (
    {
        className = '',
        children,
        ...props
    }
)=>{
    return (
        <button {...props} className={['btn',className].join(' ')}>
            {children}
        </button>
    )
}