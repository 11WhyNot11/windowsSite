const modals = () => {
    function bindModal(trigger, modal, close){
        trigger.addEventListener('click', (e) => {
            if(e.target){
                e.preventDefault();
            }

            modal.style.display = "block";
            document.body.style.overflow = "hidden";

            
        })
    }
};

export default modals;