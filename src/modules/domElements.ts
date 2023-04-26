export const elements = {
    imageSelection: document.getElementById("image-selection") as HTMLSelectElement | null,
    createAccountButton: document.getElementById("create-account-button") as HTMLButtonElement | null,
    submitButton: document.getElementById("submit-button") as HTMLButtonElement | null,
    usernameInput: document.getElementById("username") as HTMLInputElement | null,
    passwordInput: document.getElementById("password") as HTMLInputElement | null,
    form: document.getElementById("form") as HTMLFormElement,
    errorMessage: document.createElement("p"),
    userDeletedSuccessfully: document.createElement('h1'),
    failedToDeleteUser: document.createElement('h1'),
    messageInput: document.createElement('input'),
    listItem: document.createElement("li"),
    body: document.getElementById('body') as HTMLBodyElement,
    accountCreated: document.createElement("h1"),
    logInpage: document.getElementById('logInpage') as HTMLDivElement,
    container: document.getElementById('container') as HTMLDivElement,
    currentUser: document.getElementById("current-user") as HTMLHeadingElement | null,
    statusUpdates: document.getElementById("status-updates") as HTMLUListElement | null,
    newStatusUpdate: document.getElementById("new-status-update") as HTMLInputElement | null,
    addStatusUpdate: document.getElementById("add-status-update") as HTMLButtonElement | null,
    loggedInUsersList: document.querySelector('.js-logged-in-users-list') as HTMLElement,
    otherUserPageHeader: document.querySelector('.js-other-user-page-header') as HTMLHeadingElement | null,
    deleteAccount: document.getElementById("delete-account") as HTMLButtonElement | null,
    deleteAccountButton: document.getElementById("delete-account-button") as HTMLButtonElement | null,
    statusInput: document.getElementById("status-input") as HTMLInputElement | null,
    statusUpdateButton: document.getElementById("status-update-button") as HTMLButtonElement | null,
    otherUserPage: document.getElementById("other-user-page") as HTMLElement,
    loggedInUsersPage: document.getElementById("logged-in-users-page") as HTMLDivElement | null,
    statusUpdatesList: document.getElementById("status-updates-list") as HTMLUListElement | null,
    submitStatus: document.getElementById("submit-status") as HTMLButtonElement,
    allUsersList: document.getElementById("allUsersList") as HTMLUListElement,
    userStatus: document.getElementById('userStatus') as HTMLElement,    
};






if (elements.logInpage) {
    elements.logInpage.style.display = "block";
}

elements.container.style.display = "none";
elements.body.appendChild(elements.container);


const errorMessage = document.createElement("div");
errorMessage.className = "error-message";
