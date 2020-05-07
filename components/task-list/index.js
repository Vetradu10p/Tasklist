import React from "react";
import {Badge, ListItem} from "react-native-elements";
import {View} from "react-native";
import { TASK } from '../model';
import {APP_COLORS} from "../../styles/color";
import { style } from './style';
import Text from "react-native-web/src/exports/Text";

const TaskList = ({ taskList }) => (
    <View containerStyle={style.list}>
        <Text>{taskList[0].status}</Text>
        {taskList.map(task => (
            <ListItem
                key={task.id}
                title={task.content}
                badge={{
                    element: (
                        <Badge
                            value={task.status}
                            containerStyle={
                                task.status===TASK.todoStatus
                                    ? {backgroundColor: APP_COLORS.accent}
                                    : {backgroundColor : APP_COLORS.lightPrimaryColor}
                            }
                        />
                    )
                }}
            />
            ))}
    </View>
);

export default TaskList;