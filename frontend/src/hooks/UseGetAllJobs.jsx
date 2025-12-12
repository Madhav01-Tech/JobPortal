import { Jobs_API_Endpoint } from '../Utils/constant.js';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setJobs } from '../../redux/jobSlice';

const UseGetAllJobs = (user) => {
    const dispatch = useDispatch();
    useEffect(() => { 
        const fetchJobs = async () => {
            try {
                const response = await axios.get(`${Jobs_API_Endpoint}/get`, {
                    withCredentials: true
                });
                if (response.data.success) {
                    dispatch(setJobs(response.data.jobs));
                }
                console.log("Jobs data:", response.data);
            } catch (error) {
                console.error("Error fetching jobs:", error);
                alert("Failed to fetch jobs");
            }
        };

        if(user){fetchJobs();}
    }, [])
        
        
        }

export default UseGetAllJobs