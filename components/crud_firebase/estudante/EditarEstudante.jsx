import { View, Button, Text, TextInput } from "react-native";
import { useEffect, useState } from "react";
import EstudanteService from "../service/EstudanteService";
import { firestoreDb } from "../firebase/firebase_config";

const EditarEstudante = (props) =>{

    const [nome, setNome] = useState(' ');
    const [curso, setCurso] = useState(' ');
    const [ira, setIra] = useState(' ')

    useEffect(
        ()=>{
            EstudanteService.recuperar(
                firestoreDb,
                (estudante) => {
                    console.log(estudante)
                    setNome(estudante.nome)
                    setCurso(estudante.curso)
                    setIra(estudante.ira)
                },
                props.route.params.id
            )
            //console.log(props.route.params.id)
        },
        []
    )

    const cadastro = () => {
        
        EstudanteService.atualizar(
            firestoreDb, 
            ()=>{
                alert(`Estudante atualizado`)
                props.navigation.navigate('ListarEstudante')
            },
            props.route.params.id,
            {nome, curso, ira}

            )
    }

    return(
        <View>
            <Text>Criar Estudante</Text>
            <TextInput placeholder="Nome:" value={nome} onChangeText={(nome) => setNome(nome)}></TextInput>
            <TextInput placeholder="Curso:" value={curso} onChangeText={(curso) => setCurso(curso)}></TextInput>
            <TextInput placeholder="IRA:" value={ira} onChangeText={(ira) => setIra(ira)}></TextInput>

            <View>
                <Button title="Editar" onPress={cadastro}></Button>
            </View>

        </View>
    )


}

export default EditarEstudante