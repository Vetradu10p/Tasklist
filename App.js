import React from 'react';
import { View } from 'react-native';
import Header from './components/header';
import TaskList from "./components/task-list";

const taskList = [
    {
        id: 0,
        content: 'Faire des photos',
        status: 'En cours'
    },
    {
        id: 1,
        content: 'Scéance ménage',
        status: 'En cours'
    },
    {
        id: 2,
        content: 'Dormir',
        status: 'Terminé'
    }
];

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { taskList : taskList };
    }

    render() {
        return (
            <View>
                <Header content="Liste de tâches" />
                <TaskList taskList={this.state.taskList} />
            </View>
        );
    }
}