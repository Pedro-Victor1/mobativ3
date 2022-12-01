import HomeScreen from "../home/HomeScreen"

import HomeEstudante from "../estudante/HomeEstudente"
import ListarEstudante from "../estudante/ListarEstudante"
import CriarEstudante from "../estudante/CriarEstudante"
import EditarEstudante from "../estudante/EditarEstudante"

import HomeProfessor from "../professor/HomeProfessor"
import ListarProfessor from "../professor/ListarProfessor"
import CriarProfessor from "../professor/CriarProfessor"
import EditarProfessor from "../professor/EditarProfessor"

import { createNativeStackNavigator } from "@react-navigation/native-stack"
const Stack = createNativeStackNavigator()

const RoutesCrud = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
            
            <Stack.Screen name='HomeEstudante' component={HomeEstudante}></Stack.Screen>
            <Stack.Screen name='CriarEstudante' component={CriarEstudante}></Stack.Screen>
            <Stack.Screen name='EditarEstudante' component={EditarEstudante}></Stack.Screen>
            <Stack.Screen name='ListarEstudante' component={ListarEstudante}></Stack.Screen>  
           
            <Stack.Screen name='HomeProfessor' component={HomeProfessor}></Stack.Screen>
            <Stack.Screen name='CriarProfessor' component={CriarProfessor}></Stack.Screen>
            <Stack.Screen name='EditarProfessor' component={EditarProfessor}></Stack.Screen>
            <Stack.Screen name='ListarProfessor' component={ListarProfessor}></Stack.Screen>  
        </Stack.Navigator>
    )

}
 
export default RoutesCrud;