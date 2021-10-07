const posts = [
    {postID: 1, postContext:"Selam, ben Emre."},
    {postID: 2, postContext:"Nasılsın?"},
    {postID: 3, postContext:"Senin adın ne?"}
];

const listPosts = () =>{
    posts.map(post=>{
        console.log(post);
    })
}
listPosts();
console.log('---post added---');
const addPost = (newPost) =>{
    const prom1 = new Promise((resolve, reject)=>{
        posts.push(newPost);
        resolve(posts);
        reject('Post gönderilemedi !!!');
    })
    return prom1;
}

const showPosts = async () => {
    try{
        await addPost({postID: 4, postContext:"İyiyim, benim adım Mehmet." 
    })
        listPosts();
    }catch (e){
        console.log(e);
    }
}

showPosts();