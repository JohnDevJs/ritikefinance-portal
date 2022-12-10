import React from 'react'
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";

function LoanForm() {

    const [state, setstate] = useState({
        amount: 500,
        months: 6,
        interestRate: 0,
        monthlyPayment: 0,
        numPayments: 0
    });

    return (
        <>
            <form>
                <div className="form-group">
                    <InputRange
                        maxValue={5000}
                        minValue={500}
                        value={state.amount}
                        onChange={amount => setstate({ ...state, amount })}
                        formatLabel={(val) => `$${val}`}
                    />
                    <label>Loan Amount</label>
                </div>
                <div className="form-group">
                    <InputRange
                        maxValue={24}
                        minValue={6}
                        value={state.months}
                        onChange={months => setstate({ ...state, months: months })}
                    />
                    <label>Loan Duration (in months)</label>
                </div>
            </form>


            <div className="current-status">
                <h4>Interest Details</h4>
                <div className="row">
                    <div className="col-2"> Interest Rate  </div>
                    <div className="col-2"> {`$ ${state.interestRate}`} </div>
                </div>
                <div className="row">
                    <div className="col-2"> Monthly Payment  </div>
                    <div className="col-2"> {`$ ${state.monthlyPayment}`} </div>
                </div>
                <div className="row">
                    <div className="col-2"> Number of Payments  </div>
                    <div className="col-2"> {state.numPayments} </div>
                </div>
            </div>
        </>
    )
}

export default LoanForm