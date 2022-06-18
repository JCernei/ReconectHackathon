export const getCurrentUser = () => {
    const user = localStorage.getItem('user')
    if(user){
        return JSON.parse(user) 
    }
    return null
}

export const setCurrentUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user))
}