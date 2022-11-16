import { View, Button, Text } from "react-native";

const HomeProfessor = (props) =>{



    return(
        <View>
            <Text>Estudante Home</Text>
            <View>
                <Button 
                    title="Criar Professor"
                    onPress={()=>props.navigation.navigate("CriarProfessor")}
                ></Button>
            </View>

            <View>
                <Button
                    title="Listar Professor"
                    onPress={()=>props.navigation.navigate("ListarProfessor")}
                ></Button>
            </View>

        </View>
    )


}

export default HomeProfessor