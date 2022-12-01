import { View, Button, Text } from "react-native";
import { estilos } from "../css/css";

const HomeScreen = (props) =>{

    return(
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>Qual opção você quer?</Text>
            <View style={{margin: 5}}>
                <Button 
                    title="CRUD Professor"
                    onPress={()=>props.navigation.navigate("HomeProfessor")}
                ></Button>
            </View>
            <View style={{margin: 5}}>
                <Button
                    title="CRUD Estudante"
                    onPress={()=>props.navigation.navigate("HomeEstudante")}
                ></Button>
            </View>

        </View>
    )


}

export default HomeScreen