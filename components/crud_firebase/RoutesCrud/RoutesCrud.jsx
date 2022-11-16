import ListarProfessor from "../estudante/ListarEstudante"
import HomeProfessor from "../estudante/HomeEstudente"
import CriarProfessor from "../estudante/CriarEstudante"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import EditarProfessor from "../estudante/EditarEstudante"
const Stack = createNativeStackNavigator()

const RoutesCrud = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='HomeProfessor' component={HomeProfessor}></Stack.Screen>
            <Stack.Screen name='CriarProfessor' component={CriarProfessor}></Stack.Screen>
            <Stack.Screen name='EditarProfessor' component={EditarProfessor}></Stack.Screen>
            <Stack.Screen name='ListarProfessor' component={ListarProfessor}></Stack.Screen>  
        </Stack.Navigator>
    )

}
 
export default RoutesCrud;