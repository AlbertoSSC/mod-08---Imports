var DataBusiness = require("./data-business");
var ClientBusiness = require("./client-business");

function printClientsAccounts() {
    const clients = DataBusiness.dataBusinessGetClients();
    const ul = document.createElement("ul");
    for (let client of clients) {
        const element = ClientBusiness.clientBusiness(client);
        ul.appendChild(element);
    }

    document.getElementById("root").appendChild(ul);
}

module.exports = {
    clientListBusiness: printClientsAccounts,
};