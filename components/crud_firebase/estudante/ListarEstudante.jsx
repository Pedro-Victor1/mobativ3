import {View, Text, Button} from 'react-native';
import EstudanteService from '../service/EstudanteService';
import { firestoreDb } from '../firebase/firebase_config';
import { useEffect } from 'react';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native';
import { estilos } from "../css/css";


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

    const apagarEstudante = (id) => {
        EstudanteService.apagar(
            firestoreDb,
            (resultado)=>{},id)
    }

    return(
            <SafeAreaView style={estilos.container}>
                <Text style={estilos.cabecalho}>Lista de Estudantes</Text>

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
                                        <Button title='Apagar' 
                                        onPress={()=>apagarEstudante(item.id)}></Button>
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