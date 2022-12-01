import { View, Button, Text } from "react-native";
import { estilos } from "../css/css";

const HomeEstudante = (props) =>{

    return(
        <View style={estilos.container}> 
            <Text style={estilos.cabecalho}>Estudante Home</Text>
            <View style={{margin:5}}>
                <Button 
                    title="Criar Estudante"
                    onPress={()=>props.navigation.navigate("CriarEstudante")}
                ></Button>
            </View>

            <View style={{margin: 5}}>
                <Button
                    title="Listar Estudante"
                    onPress={()=>props.navigation.navigate("ListarEstudante")}
                ></Button>
            </View>

        </View>
    )


}

export default HomeEstudante