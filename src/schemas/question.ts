import { Document, Schema, Model, model } from 'mongoose'
import { IQuestion } from '../interfaces/question'

export interface IQuestionModel extends IQuestion, Document{
}

export const QuestionSchema: Schema = new Schema({
    round: Number,
    point: Number,
    type: Number,
    title: String,
    description: {
        type: String,
        required: false
    },
    imageURL: {
        type: String,
        required: false
    },
    answer: {
        answerType: {
            type: Number,
            required: true
        },
        numericAnswer: Number,
        answerPrecision: Number,
        answerRegex: String
    } 
})

export const Question: Model<IQuestionModel> = model<IQuestionModel>("Question", QuestionSchema)