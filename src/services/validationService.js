class ValidationService {

    validatePost(inputValue, typeValue) {
        if (!this.hasValidPostType(typeValue)) {
            return { error: "Post type is not supported!" };
        }

        if (!this.hasContent(inputValue)) {
            return { error: "Post content is required!" };
        }

        if (typeValue === 'imageUrl') {
            return this.validateImageForm(inputValue);
        } else if (typeValue === 'videoUrl') {
            return this.validateVideoForm(inputValue);  
        }

        return { valid: true };
    }

    hasValidPostType(typeValue) {
        return ['text', 'imageUrl', 'videoUrl'].includes(typeValue);
    }

    hasContent(inputValue) {
        return inputValue && inputValue !== "";
    }

    validateTextForm = (inputValue) => {
        if (inputValue) {
            return { valid: true };
        }
        return { error: "Post content is required!" };
    }

    validateImageForm = (inputValue) => {
        if ((inputValue.includes('http://')) && (inputValue.includes('jpg')) || (inputValue.includes('gif')) || (inputValue.includes('png')) || (inputValue.includes('bmp'))) {

            return { valid: true };
        }

        return { error: "Upload valid image format." };
    }

    validateVideoForm = (inputValue) => {
        if (inputValue.includes('https://www.youtube.com/')) {
            return { valid: true };
        }
        return { error: "Upload youtube file format." }
    }

    validateEmailForm = (inputValue) => {
        if (inputValue.includes("@")) {
            return { valid: true };
        }
        return { error: "Input valid e-mail address" }
    }

    validatePasswordForm = (inputValue) => {
        const isNum = (inputValue) => {
            for (let i = 0; i <inputValue.length; i++){
                if(!isNaN(inputValue[i])){
                    return true;
                }
            }
            return false;
        }
        if ((isNum(inputValue)) && (inputValue.length > 5)) {
            return { valid: true };
        }
        return { error: "Your password must include minimum six characters including number" }
    }

    validateRegisterForm = (inputValue, inputType) => {

        if (!this.hasContent(inputValue)) {
            return { error: "content is required!" };
        }

        if (inputType === "email") {
            return this.validateEmailForm(inputValue);
        }
        if (inputType === "password") {
            return this.validatePasswordForm(inputValue)
        }
        return { valid: true };
    }

}

export const validationService = new ValidationService;
