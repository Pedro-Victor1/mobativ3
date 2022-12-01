import { View, Button, Text } from "react-native";
import { estilos } from "../css/css";

const HomeProfessor = (props) =>{

    return(
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>Professor Home</Text>
            <View style={{margin: 5}}>
                <Button 
                    title="Criar Professor"
                    onPress={()=>props.navigation.navigate("CriarProfessor")}
                ></Button>
            </View>

            <View style={{margin: 5}}>
                <Button
                    title="Listar Professor"
                    onPress={()=>props.navigation.navigate("ListarProfessor")}
                ></Button>
            </View>

        </View>
    )


}

export default HomeProfessor