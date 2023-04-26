import { UserInfo, FirebaseResponse } from './interfaces';

const baseUrl = "https://social-media-68d76-default-rtdb.europe-west1.firebasedatabase.app/";

export async function getUsers(): Promise<UserInfo[]> {
    try {
      const response = await fetch(`${baseUrl}users.json`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const users: FirebaseResponse | null = await response.json();
      if (!users) {
        return [];
      }
      const usersArray: UserInfo[] = Object.values(users);
      return usersArray;
    } catch (err) {
      throw new Error("Failed to fetch users");
    }
  }
  

  export async function saveUser(user: UserInfo): Promise<void> {
    const arrData = await getUsers();
    const url = `${baseUrl}users/${user.userName}.json`;
    const init = {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
  
    try {
      const response = await fetch(url, init);
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
  
    } catch (err) {
      console.log(err);
      throw new Error("Failed to save user information.");
    }
  }
  


export async function deleteUser(username: string): Promise<void> {
    const url = `${baseUrl}users/${username}.json`;
    const init = {
        method: "DELETE",
    };

    try {
        const response = await fetch(url, init);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
    } catch (err) {
        console.log(err);
        throw new Error("Failed to delete user.");
    }
}

export async function addStatusUpdate(newStatus: string): Promise<void> {
  const currentUser = await getLoggedInUser(); // Use getLoggedInUser() instead of getCurrentUser()
  if (!currentUser) {
    throw new Error("User not found.");
  }

  currentUser.status = newStatus;

  const url = `${baseUrl}users/${currentUser.userName}.json`;
  const init = {
    method: "PUT",
    body: JSON.stringify(currentUser),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  try {
    const response = await fetch(url, init);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
  } catch (err) {
    console.log(err);
    throw new Error("Failed to add status update.");
  }
}


export async function getCurrentUser(): Promise<UserInfo | null> {
  const loggedInUserName = localStorage.getItem("loggedInUser");
  if (loggedInUserName) {
    return await getUserByUsername(loggedInUserName);
  }
  return null;
}

// Export getUserByUsername function
export async function getUserByUsername(username: string): Promise<UserInfo | null> {
  const users = await getUsers();
  const currentUser = users.find((user) => user.userName === username);
  return currentUser || null;
}


export async function getLoggedInUser(): Promise<UserInfo | null> {
  const loggedInUserName = localStorage.getItem("loggedInUser");
  if (loggedInUserName) {
    return await getUserByUsername(loggedInUserName);
  }
  return null;
}

  