import  {fetchPostLoading,fetchpostSuccess,fetchPostFail} from "./postSlice"
import axios from "axios"
export const fetchAllPosts = () =>async (dispatch) =>{

    dispatch(fetchPostLoading());
    try {
        const post = await axios.get("http://localhost:5000/api/posts")
    console.log(post)

    dispatch(fetchpostSuccess(post.data));
}catch(error){
    dispatch(fetchPostFail(error.message));
}
};