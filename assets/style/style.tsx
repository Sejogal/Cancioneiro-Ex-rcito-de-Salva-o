import { PixelRatio, StyleSheet } from "react-native";
const escala = PixelRatio.getFontScale();


export default StyleSheet.create({
    title:{
        color:'white',
        fontSize:24 * escala,
        fontWeight:"bold",
    },
    subTitle:{
        color:'white',
        fontSize:15 *escala,
        fontWeight:"500",
        marginLeft:'2%'
    },
    fundoBtn:{
        backgroundColor:'#069',
        padding:5,
        margin:5,
        borderRadius:4,
        alignItems:'center'
    },
    buttonText: {
    fontSize: 16 * escala,
    color: '#fff',
    fontWeight: 'bold'
  },
  input:{
    borderWidth:1,
    borderColor:'#069',
    color:'white'
  },
  jogoBtn:{
    borderWidth:2,
    borderColor:'#069',
    borderRadius:4,
    width:'30%',
    padding:5,
    margin:'1.5%',
    alignItems:'center'
},
kLink:{
    borderWidth:2,
    borderBottomColor:'#069',
    borderTopColor:'transparent',
    borderLeftColor:'transparent',
    borderRightColor:'transparent',
    margin:'1.5%',
    padding:2
  },
  link:{
    color:'#069',
    fontWeight:500,
    fontSize:16 * escala
  },
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  caixa: {
    borderRadius: 10,
    padding: 20,
    margin: 10,
    backgroundColor: '#fff',
  },
  copyRight: {
  color: '#666',
  fontSize: 12 * escala,
  textAlign: 'center',
  position: 'absolute',
  bottom: 10,      // distância da borda inferior
  left: 0,
  right: 0,
  marginTop: 20,
  marginBottom: 10
}

})