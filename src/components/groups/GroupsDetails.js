import React, { useEffect, useState } from "react";
import {
  Avatar,
  Table,
  Group,
  Text,
  ScrollArea,
  Button,
  Input,
} from "@mantine/core";

import { Search } from 'tabler-icons-react';

import { useModals } from '@mantine/modals';

import groupsServices from "../../services/groupsServices";

export const GroupsDetails = () => {
  
  const user = JSON.parse(sessionStorage.getItem('user'));
  const [group, setGroup] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isReadonly, setIsReadonly] = useState(true);

  
  // Searches users in the database by their email to add them to the group.
  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  }
  const search = searchInput;

  // This is a big problem, 429 errors are getting out of hand.
  useEffect(() => {
      groupsServices.searchUser(search)
      .then(searchResult => {
        if (search !== "" && search.length >= 2) {
          setSearchResult(searchResult.data.filter(u => u.email.includes(search)));
        } else {
          setSearchResult("");
        } 
      })
    }, [search])
  
  // Adds an user to the group. The group id is hard coded for now.
  const addUser = (user) => {
    console.log(user)
    groupsServices.addUser(10, user.id)
    setGroup(group.concat(user));
  }
  
  // REMEMBER TO ADD THE DELETE USER FROM GROUP WHEN BACKEND IS READY
  const deleteUser = (user) => {
    let filteredGroup = group.filter((u) => u.name !== user.name);
     setGroup(filteredGroup);
  };

  const modals = useModals();

  const openDeleteModal = (user) =>
    modals.openConfirmModal({
      title: 'Delete user?',
      centered: true,
      children: (
        <Text size="sm">
          Are you sure you want to delete {user.name} from the group? You will be able to add them again.
        </Text>
      ),
      labels: { confirm: 'Delete user', cancel: "Cancel" },
      confirmProps: { color: 'red' },
      onCancel: () => console.log('Cancel'),
      onConfirm: () => deleteUser(user),
    });


  const rows = group.map((user) => (
    <tr key={user.id}>
      <td>
        <Group spacing="sm">
          <Avatar size={30} src={user.avatar} radius={30} />
          <Text size="sm" weight={500}>
            {user.first_name} {user.last_name}
          </Text>
          <Text size="sm" weight={500}>
            {user.email}
          </Text>
          <Button color="red" onClick={() => openDeleteModal(user)}> Delete </Button>
        </Group>
      </td>
    </tr>
  ));

  return (
    <>
      <ScrollArea>
        <Table sx={{ maxHeight: 800 }} verticalSpacing="sm">
          <thead>
            <tr>
            <input type="text" readOnly={isReadonly} /* onInput={e => setValue(e)} value={username} *//>
            
              <Button ml={10} mr={10} onClick={() => setIsReadonly(prevState => !prevState)}> Modify group name</Button>
               <Button color="red" ml={10}> Delete group </Button>
            </tr>
          </thead>
          <tbody>
            {rows}
            <tr>
              <Text>
                <div className="search">
                <Input
                  icon={<Search size={20} />}
                  placeholder="Search users (At least 2 characters)"
                  defaultValue={searchInput}
                  onChange={handleSearch}
                />
                </div>
                <ul
                  style={
                    searchResult.length === 0
                      ? { display: "none" }
                      : { display: "block" }
                  }
                >
                  {searchResult.length > 0
                    ? searchResult.map((user) => 
                      <li key={user.id}>  
                      <p> <Avatar size={30} src={user.avatar} radius={30} /> {user.first_name} {user.last_name} {user.email} <Button p={10} ml={10} onClick={() => addUser(user)}> Add </Button></p>
                      </li>)
                    : ""}
                </ul>
              </Text>
            </tr>
          </tbody>
        </Table>
      </ScrollArea>
    </>
  );
};
