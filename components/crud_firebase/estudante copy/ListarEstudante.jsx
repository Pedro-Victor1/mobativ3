import {View, Text, Button} from 'react-native';
import EstudanteService from '../service/ProfessorService';
import { firestoreDb } from '../firebase/firebase_config';
import { useEffect } from 'react';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native';

const ListarEstudante = (props) => {

    const [estudantes, setEstudantes] = useState([]);

    useEffect(
        ()=>{
            EstudanteService.listar(
                firestoreDb,
                (estudantes)=>{
                    setEstudantes(estudantes)
                }
                )
        }
    )

    
    

    return(
            <SafeAreaView>
                <FlatList
                    data={estudantes}
                    renderItem={
                        ({item})=>{
                            return(
                                <View style={{flexDirection:'row', justifyContent:'center'}}>
                                    <Text style={{margin:5}}>{item.nome}</Text>
                                    <Text style={{margin:5}}>{item.curso}</Text>
                                    <Text style={{margin:5}}>{item.ira}</Text>

                                    <View style={{margin:5}}>
                                        <Button title='Editar' 
                                        onPress={()=>props.navigation.navigate("EditarEstudante",{id:item.id})}></Button>
                                    </View>
                                    <View style={{margin:5}}>
                                        <Button title='Apagar' ></Button>
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

export default ListarEstudante;