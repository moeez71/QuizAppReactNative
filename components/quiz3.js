import React from "react"
import { View, Text , StyleSheet , ScrollView, TouchableOpacity, Button } from "react-native"
import questions from "../quizClass"

class Quiz3 extends React.Component {  
    constructor() {
      super();
      this.state = {
        score : 0,
        qe : questions[0],
        count: 0
      }  
    }

    handleChange= () =>{
        var x = this.state.score
        if (x < 5){
        this.setState({
                score: this.state.score + 1,
                qe : questions[this.state.score]
            }
        )
        }
    }
    answer = (correct, selected) => {
        if (correct === selected){
            this.setState({
                count: this.state.count +1
            })
        }
    }
    render(){
        return(
            <View>
         <Text>{this.state.qe.statement}</Text>
         {this.state.qe.options.map((op, i) => 
         <TouchableOpacity style= {{padding:20 , backgroundColor: "grey"}}
         onPress= {this.answer(op, this.state.qe.correctChoice)}
        >
         <View>
             <Text>{op}</Text>
         </View>
         </TouchableOpacity>
         )}
         <Button title= "next" onPress = {this.handleChange}></Button>
        </View>
        )
    }
}
export default Quiz3