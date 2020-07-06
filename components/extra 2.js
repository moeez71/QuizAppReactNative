import React , {useState} from "react"
import { View, Text , StyleSheet , ScrollView, TouchableOpacity, Button } from "react-native"
import questions from "../quizClass"


const Quiz = () => {
    const [qcount, setCount] = useState(0)
    const [getList, setList] = useState(questions[qcount]);
    const [option , setoptions] = useState(questions[qcount].options)
    const cancel = () => {
          setCount(qcount+1)
          setList(questions[qcount])
          setoptions(questions[qcount].options)
      }
    return (
        <View>
            <Text>{getList.statement}</Text>
            <Text>{option}</Text>
            <Button title= "next" onPress= {cancel}> </Button>
        </View>

    ) 
}



        const styles = StyleSheet.create({
      crosstextcontainer: {
        backgroundColor: 'grey',
        borderRadius: 50,
        padding: 5,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center'
      },
      crosstext: {
        fontSize: 16,
        color: 'red',
        fontWeight: "bold"
      },
      scrollviewText: {
        flex: 2,
        fontSize: 26,
        color: 'white'
      },
      scrollview: {
        paddingTop: 20,
        width: '100%'
      },
      scrollviewItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: 'orange',
        alignSelf: "center",
        padding: 10,
        margin: 5,
        width: '90%',
        borderRadius: 10
      },
      title: {
        fontSize: 64,
        color: 'lightgrey'
      },
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 40
      },
      inputContainer: {
        flexDirection: "row",
        width: '70%',
        justifyContent: "space-between",
        alignItems: "center"
      },
      textInput: {
        borderColor: 'red',
        //borderWidth: 2,
        borderBottomWidth: 2,
        width: '100%',
        // borderRadius: 50,
        fontSize: 16,
        padding: 10
      }
    })
export default Quiz