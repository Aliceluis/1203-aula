import{ View, Text, TouchableOpacity } from "react-native";
import { estilos } from "./style";

export default function Card(){
    return(
        <View style={estilos.container}>
            <Text style={estilos.texto}>
                {name}
            </Text>
        <TouchableOpacity style={estilos.botao}> 
            <Text style={estilos.texto_botao}>
                -
            </Text>
        
        </TouchableOpacity>
        
        </View>
    

)}