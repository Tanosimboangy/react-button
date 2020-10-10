import React from "react";
import Button from "./Button.js";

function App()  {
    const style = {
        marginBlockEnd: '1rem'
    }
    return (
        <div>
            <div style={style}>
                <Button default='default'>Default</Button>
            </div>
            <div style={style}>
                <Button variant="outline">Default</Button>
            </div>
            <div style={style}>
                <Button variant="text">Default</Button>
            </div>
            <div style={style}>
                <Button disableShadow="disableShadow">Default</Button>
            </div>
            <ul style={{maxWidth: '320px', marginBlockEnd:'1rem'}}>
                <li><Button disabled="disabled">Disabled</Button></li>
                <li><Button variant="text">Disabled</Button></li>
            </ul>
            <ul style={{maxWidth: '330px', marginBlockEnd:'1rem'}}>
                <li><Button startIcon="startIcon" color='color'>Default</Button></li>
                <li><Button startIcon="endIcon" color='color'>Default</Button></li>
            </ul>
            <ul style={{maxWidth: '560px', marginBlockEnd:'1rem'}}>
                <li><Button sm="sm" color='color'>Default</Button></li>
                <li><Button md="md" color='color'>Default</Button></li>
                <li><Button lg="lg" color='color'>Default</Button></li>
            </ul>
            <ul style={{maxWidth: '800px', marginBlockEnd:'1rem'}}>
                <li><Button default_color="default_color">Default</Button></li>
                <li><Button primary="primary" color='color'>Default</Button></li>
                <li><Button secondary="secondary">secondary</Button></li>
                <li><Button danger="danger">Danger</Button></li>
            </ul>
        </div>
    )
}

export default App;