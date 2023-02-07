const AccountBusiness = require("./account-business");
const DataBusiness = require("./data-business");

function getClientElement(client) {
    const allAccounts = DataBusiness.dataBusinessGetAccounts();
    const clientAccounts = [];
    for (let account of allAccounts) {
        if (account.clientId === client.id) {
            clientAccounts.push(account);
        }
    }

    const node = getClientNode(client);
    const ul = AccountBusiness.accountBusiness(clientAccounts);

    node.appendChild(ul);

    return node;
}

function getClientNode(client) {
    const li = document.createElement("li");
    li.append(getFullName(client));

    return li;
}

function getFullName(client) {
    return client.first_name + " " + client.last_name;
};

module.exports = {
    clientBusiness: getClientElement
}