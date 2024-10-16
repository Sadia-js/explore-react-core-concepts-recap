export default function({post}){
    const {title, userId, id, body} = post;
    const postStyle = {
        border : '2px solid tomato',
        borderRadius : '20px',
        margin : '20px',
        padding : '20px'

    }
    return(
        <div style={postStyle}>
            <h5>Title : {title}</h5>
            <p><small>User Id : {userId}</small></p>
            <p><small>Post Id : {id}</small></p>
            <p><small>Body : {body}</small></p>
        </div>
    )
}