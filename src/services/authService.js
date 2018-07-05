class AuthService {

    isUserLogged = () => {
        let sessionId = localStorage.getItem("sessionId");
        if (sessionId) {
            return true;
        } else {
            return false;
        }
    };
}
export const authService = new AuthService;
