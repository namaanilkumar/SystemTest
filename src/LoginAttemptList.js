import React, {useState} from "react";
import "./LoginAttemptList.css";

const LoginAttempt = (props) => <li {...props}>{props.children}</li>;

const LoginAttemptList = (props) => {

    const [filterText, setFilterText] = useState('');
    const handleFilterChange = (event) => {
        setFilterText(event.target.value);
    };

    const filteredAttempts = props.attempts.filter((attempt) =>
    attempt.login.toLowerCase().includes(filterText.toLowerCase()));

  return (
            <div className="Attempt-List-Main">
                <p>Recent activity</p>
                <input type="input" placeholder="Filter..."  value={filterText} onChange={handleFilterChange}/>
                <ul className="Attempt-List">

                    {filteredAttempts.map((attempt, index) => (
                        <LoginAttempt  key={index}>
                            Login: {attempt.login}
                        </LoginAttempt>
                    ))}

                </ul>
            </div>
        )
}

export default LoginAttemptList

 