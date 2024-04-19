import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
// color: $(prop => props.color);
export const FormLogin = styled.div`
  display: inline-block;
  background-color: white;
  width: 500px;
  height: fit-content;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export const FieldName = styled.div`
  font-weight: Bold;
  text-align: left;
  font-size: 24px;
`;

export const Input = styled.input`
  background-color: white;
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  height: 45px;
  border: 1px solid gray;
  padding-left: 5px;
`;

export const ButtonLogIn = styled.button`
  background-color: #00ffff;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 50px;
  border: none;
  border-radius: 5px;
`;

export const ButtonSignUp = styled.button`
  background-color: white;
  text-align: center;
  height: 50px;
  border: none;
  border-radius: 5px;
`;
// function App() {
//     const handleClick = () =>{
//       console.log('Dang nhap thanh cong')
//     }

//     // const [username, setUsername] = useState("abc");

//     const [state,setState] = useState({
//       username: "",
//       password: ""
//     })

//     const handleChangeUserName = (event) => {
//       console.log("new value",event.target.value)
//         // setUsername(event.target.value)
//       setState({
//         ...state,
//         username: event.target.value
//       })
//     }

//     // const [password, setPass] = useState("xyz");

//     const handleChangePassword = (event) => {
//       console.log("new value",event.target.value)
//         // setPass(event.target.value)
//       setState({
//         ...state,
//         password:event.target.value
//       })
//     }

//   return (
//     <Wrapper>
//       <FormLogin>
//         <FieldName>Login</FieldName>
//         <Input
//         placeholder='Username'
//         value={state.username}
//         onChange={handleChangeUserName}
//         />
//         <Input placeholder='Password'
//         value={state.password}
//         onChange={handleChangePassword}
//         type='password'
//         />
//         <ButtonLogIn onClick={handleClick}>Login</ButtonLogIn>
//         <ButtonSignUp>or sign up</ButtonSignUp>
//         </FormLogin>
//     </Wrapper>
//   );
// }
