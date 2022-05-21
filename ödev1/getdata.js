import axios from "axios";

async function getdata(user_id) {
    try {
    const {data: user} = await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`);
    const {data:posts} =await axios(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);
    user.posts =posts;
    console.log("users",user);
}
catch(e) {
console.log(e.message);
}
};
export default getdata;