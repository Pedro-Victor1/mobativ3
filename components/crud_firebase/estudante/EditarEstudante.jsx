import { View, Button, Text, TextInput } from "react-native";
import { useEffect, useState } from "react";
import EstudanteService from "../service/EstudanteService";
import { firestoreDb } from "../firebase/firebase_config";
import { estilos } from "../css/css";


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
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>Criar Estudante</Text>
            <Text>Nome:</Text><TextInput placeholder="Nome:"  style={estilos.input} value={nome} onChangeText={(nome) => setNome(nome)}></TextInput>
            <Text>Curso:</Text><TextInput placeholder="Curso:" style={estilos.input} value={curso} onChangeText={(curso) => setCurso(curso)}></TextInput>
            <Text>IRA:</Text><TextInput placeholder="IRA:"  style={estilos.input} value={ira} onChangeText={(ira) => setIra(ira)}></TextInput>

            <View style={estilos.botao}>
                <Button title="Editar" onPress={cadastro}></Button>
            </View>

        </View>
    )


}

export default EditarEstudante