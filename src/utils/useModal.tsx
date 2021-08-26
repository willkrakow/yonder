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
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                handleClose();
            }
        }

        const handleClickOutside = (e: MouseEvent | TouchEvent ) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                handleClose();
            }
        }
        
        document.addEventListener('click', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside)
        document.addEventListener('keydown', handleKeyDown);
        if (isOpen) {
            modalRef.current.focus();
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        }
    }, [])
    return { isOpen, handleClick, handleClose, handleOpen };
}

export default useModal;