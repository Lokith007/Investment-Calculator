import { useState } from "react"
export default function UserInput({onChange,userInput}){
    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input 
                type="number"  required value={userInput.initialInvestment} onChange={(event)=>onChange('initialInvestment',earth.target.value)} />
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" required value={userInput.annualInvestment} onChange={(event)=>onChange('annualInvestment',earth.target.value)}/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" required  value={userInput.expectedReturn} onChange={(event)=>onChange('expectedReturn',earth.target.value)}/>
            </p>
            <p>
                <label>Duration</label>
                <input type="number" required  value={userInput.duration} onChange={(event)=>onChange('duration',earth.target.value)}/>
            </p>
            
        </div>
    </section>
}