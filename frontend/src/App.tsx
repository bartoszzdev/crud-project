import { useState, useEffect, useContext } from "react";
import {
  Container,
  Header,
  SearchItem,
  Main,
  Table,
  TableHead,
  User,
  UpdateButton,
  DeleteButton,
  AddUserButton,
  EmptyList,
} from "./styles/styles";
import { Link } from "react-router-dom"
import { MagnifyingGlass, NotePencil, Trash, UserPlus, FolderNotchOpen } from "phosphor-react";
import Popup from "./components/Popup/Popup";

// Data from mongoDB with axios
import Users, { IUserData } from "./services/users";

// Context
import { UserContext } from "./context/context";

function App() {
  const [users, setUsers] = useState<IUserData[]>([]);
  const [searchUsers, setSearchUsers] = useState("")
  const { isUserAdded, setIsUserAdded, isUserUpdated, setIsUserUpdated, isUserDeleted, setIsUserDeleted } = useContext(UserContext)

  
  useEffect(() => {
    console.log('Added: ', isUserAdded)
    console.log('Deleted: ', isUserDeleted)
    console.log('Updated: ', isUserUpdated)
    getUsers();
  }, []);

  const getUsers = () => {
    Users.getAllUsers()
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteUser = (id : string) => {
    Users.deleteUser(id)
      .then(() => {
        setIsUserDeleted(true)
        getUsers()
      })
      .catch((e) => {
        console.log(e);
      });

      setTimeout(() => {
        setIsUserDeleted(false)
      }, 2000);
  }

  const filteredUsers = searchUsers.length > 0 ? (
    users.filter(user => {
      if (user.name.includes(searchUsers) || user.job.includes(searchUsers)) {
        return user
      }
    })) : []

  return (
    <Container>
      <Header>
        <SearchItem>
          <input 
            type="text" 
            placeholder="Buscar..." 
            value={searchUsers}
            onChange={(e) => {
              const search = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)

              setSearchUsers(search)
            }}
          />
          <MagnifyingGlass size={20} weight="bold" />
        </SearchItem>
      </Header>

      <Main>
        {!users.length ? (
          <EmptyList>
            <FolderNotchOpen size={100} weight="duotone" />
            <h1>Hmm...</h1>
            <h3>Não há usuários nessa lista...</h3>
          </EmptyList>
        ) : (
          <Table>
            <TableHead>
              <tr>
                <th>Nome</th>
                <th>Profissão</th>
                <th>Telefone</th>
                <th>Email</th>
                <th></th>
                <th></th>
              </tr>
            </TableHead>

            <tbody>
              {searchUsers.length > 0 ? (
                filteredUsers.map((user) => {
                  const { _id, name, job, phone, email } = user;
    
                  return (
                    <User key={_id}>
                      <td>{name}</td>
                      <td>{job}</td>
                      <td>{phone}</td>
                      <td>{email}</td>
                      <td>
                        <Link to={`/user/${_id}`}>
                          <UpdateButton type="button">
                            <NotePencil size={17} weight="bold" />
                            Editar
                          </UpdateButton>
                        </Link>
                      </td>
                      <td>
                        <DeleteButton type="button" onClick={() => deleteUser(_id as string)}>
                          <Trash size={17} weight="bold" />
                          Excluir
                        </DeleteButton>
                      </td>
                    </User>
                  );
                })
              ) : (
                users.map((user) => {
                  const { _id, name, job, phone, email } = user;
    
                  return (
                    <User key={_id}>
                      <td>{name}</td>
                      <td>{job}</td>
                      <td>{phone}</td>
                      <td>{email}</td>
                      <td>
                        <Link to={`/user/${_id}`}>
                          <UpdateButton type="button">
                            <NotePencil size={17} weight="bold" />
                            Editar
                          </UpdateButton>
                        </Link>
                      </td>
                      <td>
                        <DeleteButton type="button" onClick={() => deleteUser(_id as string)}>
                          <Trash size={17} weight="bold" />
                          Excluir
                        </DeleteButton>
                      </td>
                    </User>
                  );
                })
              )}
            </tbody>
          </Table>
        )}

        <Link to="/user">
          <AddUserButton type="button">
            <UserPlus size={20} weight="fill" />
            Adicionar
          </AddUserButton>
        </Link>    
      </Main>

      {isUserAdded || isUserDeleted || isUserUpdated ? (
        <Popup />
      ) : null}
    </Container>
  );
}

export default App;
