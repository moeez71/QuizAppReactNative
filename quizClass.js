import React from "react"
class quizQuestions {
    constructor(statement, options, correctChoice) {
        this.statement = statement
        this.options = options
        this.correctChoice = correctChoice
    }
}

const questions = [
    new quizQuestions(
        'What is capital of Pakistan?',
        ['Karachi', 'Islamabad', 'Lahore', 'Peshawar'],
        'Islamabad',
    ),
    new quizQuestions(
        'What is capital of India?',
        ['delhi', 'Islamabad', 'zcjzj', 'Peshawar'],
        'delhi',
    ),
    new quizQuestions(
        'What is capital of China?',
        ['Karachi', 'Islamabad', 'Lahore', 'Peshawar'],
        'Islamabad',
    ),
    new quizQuestions(
        'What is capital of America?',
        ['Karachi', 'Islamabad', 'Lahore', 'Peshawar'],
        'Islamabad',
    ),
    new quizQuestions(
        'What is capital of Sudaan?',
        ['Karachi', 'Islamabad', 'Lahore', 'Peshawar'],
        'Islamabad',
    ),
    new quizQuestions(
        'What is capital of Chutiya?',
        ['Karachi', 'Islamabad', 'Lahore', 'Peshawar'],
        'Islamabad',
    ),
    new quizQuestions(
        'What is capital of 6?',
        ['Karachi', 'Islamabad', 'Lahore', 'Peshawar'],
        'Islamabad',
    ),
    new quizQuestions(
        'What is capital of 1?',
        ['Karachi', 'Islamabad', 'Lahore', 'Peshawar'],
        'Islamabad',
    ),
    new quizQuestions(
        'What is capital of 2',
        ['Karachi', 'Islamabad', 'Lahore', 'Peshawar'],
        'Islamabad',
    )
]

export default questions