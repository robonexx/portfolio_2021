import './Dancer.scss'
import React, { useState } from 'react';


const Dancer = () => {

    function ToggleBox({ title, children }) {
        const [isOpened, setIsOpened] = useState(false);
      
        function toggle() {
            setIsOpened(wasOpened => !wasOpened);
        }
        return (
            <div>
                DANCER
                <div className="box">
                    <div className="boxTitle" onClick={toggle}>
                        {title}
                    </div>
                    {isOpened && (
                        <div className="boxContent">
                            {children}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
 
export default Dancer;