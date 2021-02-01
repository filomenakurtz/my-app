import React from 'react';




function Welcome(props){



    let name=props.match && props.match.params.name || props.name ||'Default';
    return(
        <div className="Welcome">
            Welcome,{name}!
        </div>
    );
}

export default Welcome;