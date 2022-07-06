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
} from "./styles/styles";
import { MagnifyingGlass, NotePencil, Trash, UserPlus } from "phosphor-react";

function App() {
  return (
    <Container>
      <Header>
        <SearchItem>
          <input type="text" placeholder="Buscar..." />
          <MagnifyingGlass size={18} weight="bold" />
        </SearchItem>
      </Header>

      <Main>
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
            <User>
              <td>Ana Burringtonn</td>
              <td>Back-end developer</td>
              <td>123247328578</td>
              <td>userlastname@gmail.com</td>
              <td>
                <UpdateButton type="button">
                  <NotePencil size={17} weight="bold" />  
                  Editar
                </UpdateButton>
              </td>
              <td>
                <DeleteButton type="button">
                  <Trash size={17} weight="bold" /> 
                  Excluir
                </DeleteButton>
              </td>
            </User>

            <User>
              <td>John</td>
              <td>Designer</td>
              <td>123247328578</td>
              <td>user@gmail.com</td>
              <td>
                <UpdateButton type="button">
                  <NotePencil size={17} weight="bold" />  
                  Editar
                </UpdateButton>
              </td>
              <td>
                <DeleteButton type="button">
                  <Trash size={17} weight="bold" /> 
                  Excluir
                </DeleteButton>
              </td>
            </User>
          </tbody>
        </Table>

        <AddUserButton type="button">
          <UserPlus size={20} weight="fill" />
          Adicionar
        </AddUserButton>
      </Main>
    </Container>
  );
}

export default App;
