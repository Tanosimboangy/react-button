import React from "react";
import Button from "./Button.js";

function App()  {
    return (
        <div>
            <div>
                <p>{"<button />"}</p>
                <Button default='default'>Default</Button>
            </div>
            <div>
                <p>{`<button variant="outline" />`}</p>
                <Button variant="outline">Default</Button>
            </div>
            <div>
                <p>{`<button variant="text" />`}</p>
                <Button variant="text">Default</Button>
            </div>
            <div>
                <p>{`<button disableShadow="disableShadow" />`}</p>
                <Button disableShadow="disableShadow">Default</Button>
            </div>
            <div>
                <p>{`<button disabled="disabled" />`}</p>
                <Button disabled="disabled">Disabled</Button>
            </div>
            <div>
                <p>{`<button variant="text" disabled="disabled />`}</p>
                <Button variant="text">Disabled</Button>
            </div>
            <div>
                <p>{`<button startIcon="startIcon" />`}</p>
                <Button startIcon="startIcon" color='color'>Default</Button>
            </div>
            <div>
                <p>{`<button endIcon="startIcon" />`}</p>
                <Button startIcon="endIcon" color='color'>Default</Button>
            </div>
            <div>
                <p>{`<button sm="sm" />`}</p>
                <Button sm="sm" color='color'>Default</Button>
            </div>
            <div>
                <p>{`<button md="md" />`}</p>
                <Button md="md" color='color'>Default</Button>
            </div>
            <div>
                <p>{`<button lg="lg" />`}</p>
                <Button lg="lg" color='color'>Default</Button>
            </div>
            <div>
                <p>{`<button default_color="default_color />`}</p>
                <Button default_color="default_color">Default</Button>
            </div>
            <div>
                <p>{`<button primary="primary" />`}</p>
                <Button primary="primary" color='color'>Default</Button>
            </div>
            <div>
                <p>{`<button secondary="secondary" />`}</p>
                <Button secondary="secondary">secondary</Button>
            </div>
            <div>
                <p>{`<button danger="danger" />`}</p>
                <Button danger="danger">Danger</Button>
            </div>
        </div>
    )
}

export default App;