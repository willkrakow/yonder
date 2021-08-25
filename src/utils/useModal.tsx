import React from "react";
import { globalHistory } from '@reach/router'
interface Props {
    modalRef: React.RefObject<any>;
}

const useModal = ({ modalRef }: Props) => {
    const [ isOpen, setIsOpen ] = React.useState(false);
    const handleClick = () => setIsOpen(!isOpen);
    const handleClose = () => setIsOpen(false);
    const handleOpen = () => setIsOpen(true);
    

    React.useEffect(() => {
        globalHistory.listen(location => {
            if (location.action === 'PUSH') {
                handleClose();
            }
        })

        if (isOpen) {
            modalRef.current.focus();
        }

        return () => {
        }
    }, [history])
    return { isOpen, handleClick, handleClose, handleOpen };
}

export default useModal;