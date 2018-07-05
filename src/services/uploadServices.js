import { photoUploadEndpoint } from "../shared/constants";

class UploadServices {

    uploadUserPicture(imageFile) {
        const formData = new FormData();
        formData.append('file', imageFile)

        return fetch(photoUploadEndpoint, {
            body: formData,
            headers: {
                'Key': 'bitbookdev',
                'SessionId': localStorage.getItem('sessionId')
            },
            method: 'POST'
        })
            .then(response => response.json())
    }

}

export const uploadServices = new UploadServices;