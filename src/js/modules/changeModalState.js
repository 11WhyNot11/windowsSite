import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');
    let counter = 0;
    
    checkNumInputs('#width');
    checkNumInputs('#height');

    const windowBtn1 = document.querySelector('.popup_calc_button'),
          windowBtn2 = document.querySelector('.popup_calc_profile_button');

    windowBtn1.disabled = true;
    windowBtn2.disabled = true;

    const bindActionToElems = (event, elem, prop) => {
        elem.forEach((item, i) => {
            item.addEventListener(event , () => {
                switch(item.nodeName){
                    case 'SPAN':
                            state[prop] = i;
                        break;
                    case 'INPUT':
                        if(item.getAttribute('type') === 'checkbox'){
                            i === 0 ? state[prop] = 'Холодное' : state[prop] = "Теплое";
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if(i === j){
                                    box.checked = true;
                                }
                            })
                        }else{
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT':
                        state[prop] = item.value;
                        break;
                }
                if(windowWidth[0].value != '' && windowHeight[0].value != ''){
                    windowBtn1.removeAttribute('disabled');
                } 
                if(item.checked){
                    windowBtn2.removeAttribute('disabled');
                } 

                console.log(state);
            });
            

        });
    }

    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('input', windowHeight, 'height');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'profile');
    
    
    


          
};

export default changeModalState;