
export function RestrictedPage({isLoggedIn, user, login, logout}){
    return(
        <>
             {isLoggedIn ? ( 
             <>
             <h1>Bem vindo {user}</h1>
             <button onClick={logout}>Logout</button>
             </>
            ):(
              <>
              <h1>Você não pode acessar essa página</h1>
              <button onClick={login}>Login</button>
              </>
            )}
        </>
    )
}
