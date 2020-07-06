import React , {useState} from "react"
import { View, Text , StyleSheet , ScrollView, TouchableOpacity, Button } from "react-native"
import questions from "../quizClass"



const Quiz2 = () => {
    const selectedQuestionArr = [];
    let addedIndex = [];
    for (var i = 0; i < 5; i++) {
        let randomIdx;
        do {
            randomIdx = Math.floor(Math.random() * questions.length);
  }
        while(addedIndex.indexOf(randomIdx) > -1);

  //record added index to not include it in the next cycle
        addedIndex.push(randomIdx);

  //push the randomly selected question
        selectedQuestionArr.push(questions[randomIdx]);
}
 
    var questionID =0
    const [count, setCount] = useState(0)
    const [getList, setList] = useState(selectedQuestionArr[questionID]);
    const [score, setScore] = useState(0)
    const [validate, setValidate] = useState(0)
    
    const next =() => {
        questionID = questionID + 1
        setList(selectedQuestionArr[questionID])
        }
    const checkAnswer = (selectedOption, correctOption) => {
        setValidate(1)
        if (selectedOption === correctOption) {
            setScore(score + 1)
            }
          }
        
    return (
        <View>
         
         <Text>{getList.statement}</Text>
         {getList.options.map((op, i) => 
         <TouchableOpacity style= {{padding:20 , backgroundColor: "grey"}}
           onPress={() => checkAnswer(op, getList.correctChoice)}>
        >
         <View>
             <Text>{op}</Text>
         </View>
         </TouchableOpacity>
         )}
         <Button 
            title= "next" 
            onPress= {next}
            disabled = {validate ===1} 
            ></Button>
        </View>
        )
         }
      
      
         
  
  
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
export default Quiz2