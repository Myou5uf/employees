import React from "react";
import "./App.css";
import AppInfo from "../app-info/App-info";
import SearchPanel from "../search-panel/Search-panel";
import AppFilter from "../app-filter/App-filter";
import EmployeesList from "../employees-list/Employees-list";
import EmployeesAddForm from "../employees-add-form/Employees-add-form";
import TestComponent from "../test/TestComponent";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [
                { id: 1, name: "John C.", salary: 800, increase: false, rise: true },
                { id: 2, name: "Alex M.", salary: 3000, increase: true, rise: false },
                { id: 3, name: "Carl W.", salary: 1200, increase: true, rise: false },
                { id: 4, name: "Max G.", salary: 950, increase: false, rise: false },
            ],
            searchQuery: "",
            filter: "all",
        };

        this.maxId = 4;
    }

    removeUser = (id) => {
        this.setState((state) => ({
            users: state.users.filter((user) => user.id !== id),
        }));
    };

    addUser = (user) => {
        const newUser = { ...user, id: ++this.maxId, increase: false, rise: false };
        this.setState((state) => ({
            users: [...state.users, newUser],
        }));
    };

    onToggleProp = (id, prop) => {
        this.setState((state) => ({
            users: state.users.map((user) => {
                if (user.id === id) {
                    return { ...user, [prop]: !user[prop] };
                }
                return user;
            }),
        }));
    };

    searchUser = (users, searchQuery) => {
        if (searchQuery) {
            return users.filter((user) => user.name.toLowerCase().includes(searchQuery.toLowerCase()));
        }
        return users;
    };

    setSearchQuery = (searchQuery) => {
        this.setState({
            searchQuery: searchQuery,
        });
    };

    filterUsers = (users, filter) => {
        switch (filter) {
            case "rise":
                return users.filter((user) => user.rise);
            case "moreThen1000":
                return users.filter((user) => user.salary > 1000);
            default:
                return users;
        }
    };

    setFilter = (filter) => {
        this.setState({
            filter: filter,
        });
    };

    render() {
        const totalUsers = this.state.users.length;
        const totalIncreaseUsers = this.state.users.filter((user) => user.increase === true).length;
        const { users, searchQuery, filter } = this.state;
        const searchedUsers = this.searchUser(users, searchQuery);
        const searchedAndFilteredUsers = this.filterUsers(searchedUsers, filter);

        return (
            <div className="app">
                <AppInfo totalUsers={totalUsers} totalIncreaseUsers={totalIncreaseUsers} />
                <div className="search-panel">
                    <SearchPanel setSearchQuery={this.setSearchQuery} />
                    <AppFilter filter={filter} setFilter={this.setFilter} />
                </div>
                <EmployeesList
                    users={searchedAndFilteredUsers}
                    onRemove={this.removeUser}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm onAdd={this.addUser} />
            </div>
        );
    }
}

export default App;
