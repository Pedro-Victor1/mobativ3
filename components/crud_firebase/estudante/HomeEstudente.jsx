import { View, Button, Text } from "react-native";

const HomeEstudante = (props) =>{



    return(
        <View>
            <Text>Estudante Home</Text>
            <View>
                <Button 
                    title="Criar Estudante"
                    onPress={()=>props.navigation.navigate("CriarEstudante")}
                ></Button>
            </View>

            <View>
                <Button
                    title="Listar Estudante"
                    onPress={()=>props.navigation.navigate("ListarEstudante")}
                ></Button>
            </View>

        </View>
    )


}

export default HomeEstudante