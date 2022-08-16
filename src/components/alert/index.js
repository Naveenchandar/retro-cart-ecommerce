import ReactDOM from 'react-dom';

export const Alert = ({ children, open, close }) => {
    if (!open) return null;
    return (
        ReactDOM.createPortal(
            children,
            document.getElementById('root-modal')
        )
    )
}