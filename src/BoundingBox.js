import React from 'react';
import './BoundingBox.css';

function BoundingBox({ deleteModeOn, role, submitCallback, itemNameCallback, deleteCallback, selectCallback, itemName, wizXOne, wizXTwo, wizYOne, wizYTwo }) {

    return (
        <div>
            { role === 'user' ?
                <div>
                    <div 
                    onClick={() => selectCallback(itemName)}
                    className='boundingBoxUserStyle' 
                    style={{
                        left: wizXOne+'px', 
                        top: wizYOne-20+'px', 
                        minWidth: (wizXTwo-wizXOne)+'px',
                        height: (wizYTwo-wizYOne+20)+'px'}}>
                        <div className='textBoxStyle' > 
                            {itemName} 
                        </div>
                    </div>
                </div>
            :
                <div>
                    { itemName !== '' ? 
                        <div>
                            { deleteModeOn ?
                            <div>
                                <div 
                                onClick={() => deleteCallback(itemName)}
                                className='boundingBoxDeleteStyle' 
                                style={{
                                    left: wizXOne+'px', 
                                    top: wizYOne-20+'px', 
                                    minWidth: (wizXTwo-wizXOne)+'px',
                                    height: (wizYTwo-wizYOne+20)+'px'}}>
                                    <div className='textBoxDeleteStyle'> 
                                        {itemName} 
                                    </div>
                                </div>
                            </div>
                            :
                            <div>
                                <div 
                                className='boundingBoxWizardStyle' 
                                style={{
                                    left: wizXOne+'px', 
                                    top: wizYOne-20+'px', 
                                    minWidth: (wizXTwo-wizXOne)+'px',
                                    height: (wizYTwo-wizYOne+20)+'px'}}>
                                    <div className='textBoxStyle'> 
                                        {itemName} 
                                    </div>
                                </div>
                            </div>
                            }
                        </div>
                    :
                    <form onSubmit={submitCallback}>
                        <div 
                        className='boundingBoxWizardStyle' 
                        style={{
                            left: wizXOne+'px', 
                            top: wizYOne-20+'px', 
                            minWidth: (wizXTwo-wizXOne)+'px',
                            height: (wizYTwo-wizYOne+20)+'px'}}>
                            <input 
                            type='text' 
                            className='textInputStyle' 
                            onChange={(e) => itemNameCallback(e)}/>
                            <input 
                            type='submit' 
                            className='submitStyle'/>
                        </div> 
                    </form>
                    }
                </div>
            }
        </div>
    )
}

export default BoundingBox;