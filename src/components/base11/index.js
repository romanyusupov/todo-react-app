const Base11 = () => {
    const formStyle = {
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
    }

    const itemsStyle = {
        marginTop: '5px',
    }

    let email, password;

    // const onEmailChange = (event) => {
    //     email = event.target.id
    // }

    // const onPasswordChange = (event) => {
    //     password = event.target.id

    // }

    const onValueChange = (event) => {
        if (event.target.id === 'email') {
            email = event.target.value;
        } else {
            password = event.target.value;
        }
    }

    const handleSubmit = () => {
      if (email && password && !email.includes(' ') && !password.includes(' ')) {
        console.log({email, password})
      } else {
        alert('заполните все поля!')
      }
    } 


    return (
        <div>
            <br />
            <p>Base11</p>
            <form onSubmit={handleSubmit} style={formStyle} action="">
                <input id='email' onChange={onValueChange} style={itemsStyle} placeholder='E-mail' type="text" />
                <input id='pass' onChange={onValueChange} style={itemsStyle} placeholder='Пароль' type="password" />
                <button style={itemsStyle} >Войти</button>
            </form>
        </div>
    )
} 

export default Base11;




