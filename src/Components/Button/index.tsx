
const Button = (props: { label: string; }) => {
    const { label } = props;

    return (
        <button>
            {label}
        </button>
    )
}

export default Button;