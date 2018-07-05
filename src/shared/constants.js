const baseEndpoint = 'http://bitbookapi.azurewebsites.net/api';
const postEndpoint = 'http://bitbookapi.azurewebsites.net/api/Posts';
const commentsEndpoint = 'http://bitbookapi.azurewebsites.net/api/Comments?postId=';
const newCommentEndpoint = "http://bitbookapi.azurewebsites.net/api/Comments";
const userEndpoint = 'http://bitbookapi.azurewebsites.net/api/users';
const textPostEndpoint = 'http://bitbookapi.azurewebsites.net/api/TextPosts';
const imagePostEndpoint = 'http://bitbookapi.azurewebsites.net/api/ImagePosts';
const videoPostEndpoint = 'http://bitbookapi.azurewebsites.net/api/VideoPosts';
const profileEndpoint = 'http://bitbookapi.azurewebsites.net/api/profile';
const userEditProfileEndpoint = 'http://bitbookapi.azurewebsites.net/api/Profiles';
const photoUploadEndpoint = 'http://bitbookapi.azurewebsites.net/api/upload';
const registerEndpoint = "http://bitbookapi.azurewebsites.net/api/register";
const loginEndpoint = "http://bitbookapi.azurewebsites.net/api/login";


const registerPostHeaders = {
    'Content-Type': 'application/json',
    'Key': 'bitbookdev',
}

export { 
    baseEndpoint, 
    postEndpoint, 
    commentsEndpoint, 
    userEndpoint, 
    newCommentEndpoint, 
    textPostEndpoint, 
    imagePostEndpoint, 
    videoPostEndpoint, 
    profileEndpoint, 
    userEditProfileEndpoint, 
    registerEndpoint, 
    registerPostHeaders, 
    loginEndpoint, 
    photoUploadEndpoint 
}
