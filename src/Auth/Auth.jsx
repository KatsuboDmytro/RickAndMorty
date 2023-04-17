import React from 'react';
import {getAuth, signInWithPopup} from 'firebase/auth'
import {app, googleAuthProvider} from './firebase';

export const AuthProvider = () => {
    const auth = getAuth(app);
    const [user, setUser] = React.useState(auth.currentUser);
    
    React.useEffect(() => {
        const unsub = auth.onAuthStateChanged((maybeUser) => {
            if(maybeUser != null){
                return setUser(maybeUser);
            }
            signInWithPopup(auth, googleAuthProvider)
            .then(credentioanls => setUser(credentioanls.user))
            .catch((error) => console.error(error));
        });

        return unsub;
    }, [auth]);

    return user != null ? <>{user.displayName}</> : <>loading</>;

}
