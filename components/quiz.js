import React , {useState} from "react"
import { View, Text , StyleSheet , ScrollView, TouchableOpacity, Button } from "react-native"
import questions from "../quizClass"


const Quiz = () => {
    const selectedQuestionArr = [];
    let addedIndex = [];
    for (var i = 0; i < 5; i++) {
        let randomIdx;
        do {
            randomIdx = Math.floor(Math.random() * questions.length);}
        while(addedIndex.indexOf(randomIdx) > -1);
        //record added index to not include it in the next cycle
        addedIndex.push(randomIdx);

  //push the randomly selected question
        selectedQuestionArr.push(questions[randomIdx]);
}

    const [count, setCount] = useState(0)
    const [getList, setList] = useState(selectedQuestionArr);
    return (
        <View>
        {getList.map((item, index) => 
          <View >
            <View style={quizStyles.infoCont}>
              <Text style={quizStyles.scoreText} >Score: </Text>
              <Text style={quizStyles.questionNum}>Question: {index + 1} / 5</Text>
            </View>
            <Text style={quizStyles.statement}>{item.statement}</Text>
            {item.options.map((optionItem, optionIndex) =>
              <TouchableOpacity >
                <View style={quizStyles.choiceCont}>
                  <Text style={quizStyles.choiceText}>{optionIndex + 1}. {optionItem}</Text>
                </View>
              </TouchableOpacity>
            )}
            <Button title= "next"></Button> 
          
          <View>{questionNum === 5? <Button title= "End"></Button>: null}</View>
          </View>
        )}
      
      
    </View>
        

    )
} 



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      
    },
  
    titleText: {
      fontSize: 30,
      fontFamily: 'serif',
      paddingBottom: 50,
      textAlign: 'center'
    }, 
  
  });
  
  
  /* Styles for the quiz component */
  const quizStyles = StyleSheet.create({
    scrollView: {
      width: '100%',
      paddingTop: 200,
    }, 
  
    infoCont: {
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
  
    scoreText: {
      fontSize: 20,
      fontFamily: 'serif',
      paddingBottom: 40,
      textAlign: 'center',
      paddingLeft: 10,
    },
  
    questionNum: {
      fontSize: 20,
      fontFamily: 'serif',
      paddingBottom: 40,
      textAlign: 'center',
      paddingRight: 10,
    },
  
    statement: {
      fontSize: 24,
      fontFamily: 'serif',
      textAlign: 'center',
      paddingBottom: 20,
    },  
  
    choiceCont: {
      backgroundColor: 'cornflowerblue',
      alignSelf: 'center',
      width: '70%',
      padding: 8,
      margin: 3,
      borderRadius: 50,
    },
  
    choiceText: {
      fontSize: 24,
      color: 'white',
      padding: 12, 
      fontFamily: 'serif',
    }, 
  
    buttonCont: {
      paddingTop: 40,
      alignSelf: 'center',
      width: 280,
      height: 200,
      alignItems: 'flex-end'
    }, 
  })
export default Quiz