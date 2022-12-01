import {View, Text, Button} from 'react-native';
import ProfessorService from '../service/ProfessorService';
import { firestoreDb } from '../firebase/firebase_config';
import { useEffect } from 'react';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native';

const ListarProfessor = (props) => {

    const [professor, setProfessor] = useState([]);

    useEffect(
        ()=>{
            ProfessorService.listar(
                firestoreDb,
                (professor)=>{
                    setProfessor(professor)
                }
                )
        }
    )

    const apagarProfessor = (id) => {
        ProfessorService.apagar(
            firestoreDb,
            (resultado)=>{},id)
    }

    
    

    return(
            <SafeAreaView>
                <FlatList
                    data={professor}
                    renderItem={
                        ({item})=>{
                            return(
                                <View style={{flexDirection:'row', justifyContent:'center'}}>
                                    <Text style={{margin:5}}>{item.nome}</Text>
                                    <Text style={{margin:5}}>{item.curso}</Text>
                                    <Text style={{margin:5}}>{item.salario}</Text>

                                    <View style={{margin:5}}>
                                        <Button title='Editar' 
                                        onPress={()=>props.navigation.navigate("EditarProfessor",{id:item.id})}></Button>
                                    </View>
                                    <View style={{margin:5}}>
                                        <Button title='Apagar'
                                        onPress={()=>apagarProfessor(item.id)}></Button>
                                    </View>
                                </View>



                            )
                        }
                    }
                    keyExtractor={item => item.id}

                ></FlatList>
            </SafeAreaView>
    )
}

export default ListarProfessor;