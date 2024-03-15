


const getUsersUsingnFetch = async( url ) =>{

    try {
        const response = await fetch(url);
        const data = await response.json();
        const users = data.data;
        return users;

    } catch (error) {
        console.error( error );
    }


}

export {getUsersUsingnFetch};