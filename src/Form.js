import React from 'react';
import NameForm from './NameForm.js';
import FruitSelect from './FruitSelect.js';

class Form extends React.Component{
    render(){
        return(
            <div class="example">
                <NameForm />
                <FruitSelect />
            </div>
        )
    }
}
export default Form;