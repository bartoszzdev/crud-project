import { BaseSyntheticEvent, useState, useContext } from "react";
import Users, { IUserData } from "../../services/users";
import {
  Container,
  Form,
  Title,
  Header,
  EditForm,
  EditInput,
  AddButton
} from "./styles";
import { User, Bag, Phone, EnvelopeSimple } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/context";

const AddNewUser = () => {
  const [userData, setUserData] = useState<IUserData>({
    name: "",
    job: "",
    phone: "",
    email: "",
  });
  //const [isUserAdded, setIsUserAdded] = useState<boolean>()
  const { isUserAdded, setIsUserAdded } = useContext(UserContext)
  let navigate = useNavigate();

  const sentUserDataToDB = (e: BaseSyntheticEvent, data: IUserData) => {
    e.preventDefault()
    
    
    Users.createNewUser(data)
    .then(() => {
        setIsUserAdded(true)
        navigate(-1)
      })
      .catch((e) => {
        console.log(e);
      });

      setTimeout(() => {
        setIsUserAdded(false)
      }, 2000);
  };

  const phoneInputValidation = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d{1})/, '($1) $2')
      .replace(/(\d{1})(\d{4})(\d{4})/, '$1 $2-$3')
  }

  return (
    <Container>
      <Form>
        <Header>
          <Title>Adicionar usuário</Title>
        </Header>

        <EditForm>
          <div>
            <User size={29} weight="fill" color="#5f6368" />
            <EditInput
              type="text"
              placeholder="Nome"
              value={userData.name}
              onChange={(e) => {
                const name = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)

                setUserData((prevState) => {
                  return { ...prevState, name };
                })
              }}
              required
            />
          </div>

          <div>
            <Bag size={29} weight="fill" color="#5f6368" />
            <EditInput
              type="text"
              placeholder="Profissão"
              value={userData.job}
              onChange={(e) => {
                const job = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)

                setUserData((prevState) => {
                  return { ...prevState, job };
                })
              }}
              required
            />
          </div>

          <div>
            <Phone size={29} weight="fill" color="#5f6368" />
            <EditInput
              type="tel"
              placeholder="Telefone (xx) x xxxx-xxxx"
              pattern="\([0-9]{2}\)\s[0-9]{1}\s[0-9]{4}-[0-9]{4}"
              maxLength={14}
              value={userData.phone}
              onChange={(e) => {
                e.target.value = phoneInputValidation(e.target.value)
                setUserData((prevState) => {
                  return { ...prevState, phone: e.target.value };
                })}
              }
              required
            />
          </div>

          <div>
            <EnvelopeSimple size={29} weight="fill" color="#5f6368" />
            <EditInput
              type="email"
              placeholder="Email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              value={userData.email}
              onChange={(e) => {
                setUserData((prevState) => {
                  return { ...prevState, email: e.target.value };
                })
              }}
              required
            />
          </div>

          <AddButton type="submit" onClick={(e) => sentUserDataToDB(e, userData)}>
            Adicionar usuário
          </AddButton>
        </EditForm>
      </Form>
    </Container>
  );
};

export default AddNewUser;
