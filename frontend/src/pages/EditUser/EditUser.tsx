import React, { useState, useEffect, useContext, BaseSyntheticEvent } from "react";
import Users, { IUserData } from "../../services/users"
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Form,
  Title,
  Header,
  EditForm,
  EditInput,
  AddButton,
} from "./styles";
import { User, Bag, Phone, EnvelopeSimple } from "phosphor-react";
import { UserContext } from "../../context/context";

const EditUser = () => {
  const [user, setUser] = useState<IUserData>({
    name: "",
    job: "",
    phone: "",
    email: "",
  })
  const { id } = useParams();
  const { setIsUserUpdated } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    getSingleUser(id as string)
  }, [])

  const getSingleUser = (id: string) => {
    Users.getSingleUser(id)
      .then((response) => {
        const { name, job, phone, email } = response.data.user
        const singleUser = {
            name,
            job,
            phone,
            email
        }

        setUser(singleUser);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const updateUser = (e: BaseSyntheticEvent, id: string, user: IUserData) => {
    e.preventDefault()

    Users.updateUser(id, user)
      .then(() => {
        setIsUserUpdated(true)
        navigate(-1)
      })
      .catch((e) => {
        console.log(e);
      });

      setTimeout(() => {
        setIsUserUpdated(false)
      }, 2000);
  }

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
          <Title>Editar usuário</Title>
        </Header>

        <EditForm>
          <div>
            <User size={29} weight="fill" color="#5f6368" />
            <EditInput 
              type="text" 
              placeholder="Nome" 
              value={user?.name} 
              onChange={(e) => {
                setUser(prevState => {
                  return { ...prevState, name: e.target.value }
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
              value={user?.job} 
              onChange={(e) => {
                setUser(prevState => {
                  return { ...prevState, job: e.target.value }
                })
              }} 
              required 
            />
          </div>

          <div>
            <Phone size={29} weight="fill" color="#5f6368" />
            <EditInput
              type="tel"
              placeholder="Telefone (xxxx-xxxx)"
              pattern="\([0-9]{2}\)\s[0-9]{1}\s[0-9]{4}-[0-9]{4}"
              maxLength={14}
              value={user?.phone}
              onChange={(e) => {
                e.target.value = phoneInputValidation(e.target.value)
                setUser(prevState => {
                  return { ...prevState, phone: e.target.value }
                })
              }} 
              required
            />
          </div>

          <div>
            <EnvelopeSimple size={29} weight="fill" color="#5f6368" />
            <EditInput
              type="email"
              placeholder="Email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              value={user?.email}
              onChange={(e) => {
                setUser(prevState => {
                  return { ...prevState, email: e.target.value }
                })
              }} 
              required
            />
          </div>

          <AddButton type="submit" onClick={(e) => updateUser(e, id as string, user)}>
            Editar usuário
          </AddButton>
        </EditForm>
      </Form>
    </Container>
  );
};

export default EditUser;
