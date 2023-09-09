import React, { useState, useEffect } from 'react';
import "../css/Dashboard.css"
import Chart from './Chart';


const DashBoard = () => {
    const [work, setWork] = useState([]);
    const [workerName, setWorkerName] = useState("");
    const [startDate, setStartDate] = useState("");
    let [totalWorkingHrs, setTotalWorkingHrs] = useState(0)
    let [overTime, setOverTime] = useState(0)

    const [workerID, setWorkerID] = useState("")

    //  Handle input 

    const handleInput = (e) => {
        setWorkerID(e.target.value)
    }



    const fetchData = async () => {
        if (workerID.trim() === '') {
            alert('Please enter a workerID');
            return
        }

        try {
            let response = await fetch(`http://localhost:3030/work-time/${workerID}`, {
                mode: "cors",
                method: "GET",
            })
            response = await response.json();
            response = response.result;

            if (response.length != 0) {
                response = response.sort((a, b) => {
                    return a.work_date - b.work_date
                })


                // Settting Name, and work details as an array
                setStartDate(response[0].work_date.slice(0, 10))
                setWorkerName(response[0].Name)
                setWork(response)

                //  Calling function to calculate total working hours
                calculateHours(response)
            }
            else {
                ;
                alert("No working day found");
                //  Clear all the state if now data is found
                setWorkerName("");
                setStartDate("")
                setWork([])
                setWorkerID(0)
                setTotalWorkingHrs(0);
                setOverTime(0)

            }


        } catch (error) {
            console.error("Error : ", error);
        }

    }




    //  Calculating Total working hours ;

    function calculateHours(days) {
        let totalHours = 0;
        let overtimeHours = 0;
        for (let i = 0; i < days.length; i++) {
            let day = days[i]
            let startTime = new Date(`2023-08-08T${day.start_time}Z`);
            let endTime = new Date(`2023-08-08T${day.end_time}Z`);
            let oneDayWork = 12 - (endTime - startTime) / (1000 * 60 * 60);

            if (oneDayWork > 8) {
                overtimeHours += oneDayWork - 8;
            }
            totalHours += oneDayWork;

        }
        setOverTime(overtimeHours.toFixed(1));
        setTotalWorkingHrs(totalHours.toFixed(1));

        // overTime = overTime.toString()
        // totalWorkingHrs = totalWorkingHrs.toString();
        console.log(totalWorkingHrs)

        //  converting the total time into string to show in cards ;
        // totalWorkingHrs = totalWorkingHrs.split(".")[0] + " hrs " + totalWorkingHrs.split(".")[1].slice(0, 1) + " minutes ";

    }

    useEffect(() => {



    }, []);




    return (
        <div className="container">

            <div className='searchBar'>
                <input type="text" name="workerID" placeholder='Enter workerID' onChange={handleInput} />
                <button onClick={() => fetchData()}>Search</button>

            </div>

            <div className='name'>
                <h4>{workerName}</h4>
                <h4 >Working Date : {startDate} to {new Date().toISOString().slice(0, 10)} Today</h4>
            </div>


            <div className='chart-detail-container'>
                <div className='detail-container'>
                    {/* Total working days */}
                    <div>
                        <p>Total Working Days</p>
                        <h4>{work.length} days</h4>

                    </div>
                    <div>
                        <p>Total Working Hours </p>
                        <h4>{(typeof totalWorkingHrs == "string") ? totalWorkingHrs.split(".")[0] + " hrs " + totalWorkingHrs.split(".")[1].slice(0, 1) + " minutes " : 0}</h4>

                    </div>

                    <div>
                        <p>Overtime </p>
                        <h4>{typeof overTime == "string" ? overTime.split(".")[0] + " hrs " + overTime.split(".")[1].slice(0, 1) + " minutes" : 0}</h4>
                    </div>

                </div>

                <div>
                    {work.length !== 0 ? <Chart work={work} /> : null}
                </div>

            </div>

        </div>
    )
}

export default DashBoard
