import { useState, useEffect } from "react";
import {
  Text,
  Button,
  IconButton,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserTable = () => {

  const [users, setUsers] = useState([
    // {
    //   userId: "2345678",
    //   userName: "John Doe",
    // },
    // {
    //   userId: "2345679",
    //   userName: "Jane Doe",
    // },
    // {
    //   userId: "2345680",
    //   userName: "John Smith",
    // },
    // {
    //   userId: "2345681",
    //   userName: "Jane Smith",
    // },
  ]);

  const getUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/user/bulk",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setUsers(response.data.user);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const sendMoney = (userId) => {

  };

  return (
    <>
      <Stack direction={"row"} p={"5"} justify={"space-between"}>
        <Text fontSize="xl">Users</Text>
        <InputGroup size={"md"} maxW={"sm"}>
          <Input placeholder="Search users" />
          <InputRightElement width={"2.5rem"}>
            <IconButton
              colorScheme="blue"
              size={"sm"}
              icon={<SearchIcon />}
            ></IconButton>
          </InputRightElement>
        </InputGroup>
      </Stack>
      <TableContainer px={"3"}>
        <Table variant="striped" colorScheme="blue">
          <Tbody>
            {users.map((user) => (
              <Tr key={user.userId}>
                <Td>{user.firstName} {user.lastName}</Td>
                <Td isNumeric>
                  <Button colorScheme={"blue"}>Send</Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UserTable;
