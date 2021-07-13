import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import duanwu from '../images/duanwu.jpg'
import {useDispatch} from 'react-redux'
import { useSelector } from "react-redux"
import {fetchAllPosts} from '../toolkit/postAction'
const Rightbar = () => {
    const dispatch = useDispatch()
    const [dispost,setdispost] = useState([]);
    const { post, isLoading, error } = useSelector((state) =>state.post);
    
    useEffect(()=>{
        dispatch(fetchAllPosts());
    },[dispost,dispatch])
    return (
        <div className=" p-4 flex-row justify-center items-center">
            {post.map((ps) => (
            <div key={ps._id}>
           <h1 className="flex justify-center "> <Link to="/newsupdate">{ps.title}</Link></h1>
            <img className="mx-auto w-10/12 h-52 rounded-3xl object-center" src={duanwu}></img>
            
            <h1 className="flex justify-center">{ps.desc}</h1>
            </div>
             )
            )}
        </div>
    )
}

export default Rightbar
