import { View, Button, Text } from "react-native";

const HomeScreen = (props) =>{

    return(
        <View>
            <Text>Estudante Home</Text>
            <View>
                <Button 
                    title="CRUD Professor"
                    onPress={()=>props.navigation.navigate("HomeProfessor")}
                ></Button>
            </View>

            <View>
                <Button
                    title="CRUD Estudante"
                    onPress={()=>props.navigation.navigate("HomeEstudante")}
                ></Button>
            </View>

        </View>
    )


}

export default HomeScreen