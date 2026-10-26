export default function({ children, isEditing, ...props}){

    return(
<button {...props}>{children} </button>
    );
}