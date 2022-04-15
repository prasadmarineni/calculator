export const config = { amp: 'hybrid' }

import Layout from "../../src/components/layout"
import React from "react";

function SipCalculator() {

    const [pageData, setPageData] = React.useState({
        investment: 20000,
        returnRate: 14,
        timePeriod: 32
    });

    function handleChange(e) {
        //calcObj[event.target.name] = event.target.value;
        setPageData({ ...pageData, [e.target.name] : e.target.value});
        console.log("On Change", pageData, e);
        
        //debugger;
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log("On Submit", pageData, e);
        //debugger;
        calculate();
        return false;
    }

    function calculate() {
        console.log("calculate", pageData);

        let investment = Number(pageData.investment);
        let returnRate = Number(pageData.returnRate);
        let timePeriod = Number(pageData.timePeriod);

        let rate = (returnRate/12);
        let months = (timePeriod*12);

        let r = Math.pow((1 + rate), months);

        let futureValue = (investment * (r - 1) * (1 + rate));

        let futureValue2 = futureValue / rate;

        debugger;
    }

    return (
        <Layout>
            <h2>SIP Calculator</h2>

            <form action="/" method="post" onSubmit={handleSubmit} >

                <label htmlFor="investment"  className="form-label">Monthly investment</label>
                <div className="input-group mb-3">
                    <input type="text" name="investment" value={pageData.investment} 
                    onChange={handleChange}
                    className="form-control" aria-describedby="basic-addon3" />
                    <span className="input-group-text">₹</span>
                </div>

                <label htmlFor="returnRate" className="form-label">Expected return rate(p.a)</label>
                <div className="input-group mb-3">
                    <input type="text" name="returnRate" value={pageData.returnRate} onChange={handleChange} className="form-control" aria-describedby="basic-addon3" />
                    <span className="input-group-text">%</span>
                </div>

                <label htmlFor="timePeriod" className="form-label">Time period</label>
                <div className="input-group mb-3">
                    <input type="text" name="timePeriod" value={pageData.timePeriod} onChange={handleChange} className="form-control" aria-describedby="basic-addon3" />
                    <span className="input-group-text">years</span>
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-primary m-3">Calculate</button>
                </div>
            </form>

        </Layout>
    );
}

export default SipCalculator